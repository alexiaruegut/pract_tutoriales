import { useState } from "react";

const ImageOptimizer = () => {
  const [originalFile, setOriginalFile] = useState(null);
  const [originalSize, setOriginalSize] = useState(0);
  const [optimizedImages, setOptimizedImages] = useState([]);

  const targetFormats = ["image/jpeg", "image/webp", "image/avif", "image/png", "image/svg+xml"];

  const formatDescriptions = {
    SVG: "Formato vectorial escalable ideal para logotipos e íconos. No usa compresión con pérdidas.",
    JPEG: "Formato con compresión con pérdidas, adecuado para fotografías. Tamaños generalmente pequeños.",
    WEBP: "Formato de imagen de Google con compresión eficiente. Soporta transparencia y animaciones.",
    AVIF: "Nuevo formato con compresión muy eficiente. Puede ofrecer mejor calidad que WebP o JPEG.",
    PNG: "Formato sin pérdidas, ideal para gráficos con fondos transparentes.",
    DESCONOCIDO: "Formato no reconocido o no descrito.",
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setOriginalFile(file);
    setOriginalSize(file.size);

    const reader = new FileReader();
    reader.onload = (e) => {
      const base64 = e.target.result;
      generateOptimizedImages(file, base64);
    };
    reader.readAsDataURL(file);
  };

  const generateOptimizedImages = (file, base64) => {
    const results = [
      {
        format: guessFormatLabel(file.type),
        url: base64,
        size: file.size,
      },
    ];

    if (file.type === "image/svg+xml") {
      setOptimizedImages(results);
      return;
    }

    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0, img.width, img.height);

      targetFormats.forEach((fmt) => {
        if (fmt === file.type) return;

        if (fmt === "image/svg+xml") {
          const dataUrlPng = canvas.toDataURL("image/png", 0.9); 
          const embeddedSvg = createSvgContainer(dataUrlPng, img.width, img.height);
          const byteSize = calcBase64ByteSize(embeddedSvg);
          results.push({
            format: "SVG",
            url: embeddedSvg,
            size: byteSize,
          });
        } else {
          const quality = fmt === "image/jpeg" ? 0.8 : 0.7;
          const dataUrl = canvas.toDataURL(fmt, quality);
          const byteSize = calcBase64ByteSize(dataUrl);

          results.push({
            format: fmt.toUpperCase().split("/")[1], 
            url: dataUrl,
            size: byteSize,
          });
        }
      });

      setOptimizedImages(results);
    };
    img.src = base64;
  };

  const guessFormatLabel = (mimeType) => {
    switch (mimeType) {
      case "image/jpeg":
        return "JPEG";
      case "image/png":
        return "PNG";
      case "image/webp":
        return "WEBP";
      case "image/avif":
        return "AVIF";
      case "image/svg+xml":
        return "SVG";
      default:
        return "DESCONOCIDO";
    }
  };

  const createSvgContainer = (dataUrlPng, width, height) => {
    const svgMarkup = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
        <image href="${dataUrlPng}" width="${width}" height="${height}" />
      </svg>
    `;
    const base64 = window.btoa(unescape(encodeURIComponent(svgMarkup)));
    return `data:image/svg+xml;base64,${base64}`;
  };

  const calcBase64ByteSize = (dataUrl) => {
    const prefixIndex = dataUrl.indexOf("base64,");
    if (prefixIndex === -1) return 0;
    const base64String = dataUrl.slice(prefixIndex + 7);
    return Math.round((base64String.length * 3) / 4);
  };

  return (
    <div className="flex flex-col items-center w-full max-w-4xl p-6 bg-white bg-opacity-10 shadow-lg rounded-2xl">
      <label className="cursor-pointer bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600 transition">
        Subir Imagen
        <input
          type="file"
          className="hidden"
          accept="image/*"
          onChange={handleFileChange}
        />
      </label>

      {originalFile && (
        <div className="mt-6 w-full text-center p-4">
          <h2 className="text-xl font-bold text-white">Imagen Original</h2>
          <img
            src={URL.createObjectURL(originalFile)}
            alt="Original"
            className="w-50 mt-2 rounded-2xl shadow-lg mx-auto"
          />
          <p className="text-sm text-white mt-2">
            Tamaño: {(originalSize / 1024).toFixed(2)} KB
          </p>
        </div>
      )}

      {optimizedImages.length > 0 && (
        <div className="mt-6 w-full">
          <h2 className="text-xl font-bold text-center text-white">
            Imágenes Optimizadas
          </h2>
          <table className="mt-4 w-full border border-gray-200 shadow-md rounded-lg overflow-hidden text-sm sm:text-base">
            <thead className="bg-white bg-opacity-40">
              <tr>
                <th className="p-2 sm:p-3">Formato</th>
                <th className="p-2 sm:p-3">Imagen</th>
                <th className="p-2 sm:p-3">Tamaño original (KB)</th>
                <th className="p-2 sm:p-3">Tamaño optimizado (KB)</th>
                <th className="p-2 sm:p-3">Reducción (%)</th>
                <th className="p-2 sm:p-3">Descripción</th>
              </tr>
            </thead>
            <tbody>
              {optimizedImages.map((img, index) => {
                const desc = formatDescriptions[img.format] || formatDescriptions.DESCONOCIDO;
                const reducedPercent = originalSize
                  ? ((1 - img.size / originalSize) * 100).toFixed(2)
                  : "0";

                return (
                  <tr
                    key={index}
                    className="bg-white bg-opacity-20 border-t border-white border-opacity-10"
                  >
                    <td className="p-2 sm:p-3 text-center">{img.format}</td>
                    <td className="p-2 sm:p-3 text-center">
                      <img
                        src={img.url}
                        alt={img.format}
                        className="w-20 mx-auto rounded-md shadow-sm"
                      />
                    </td>
                    <td className="p-2 sm:p-3 text-center">
                      {(originalSize / 1024).toFixed(2)}
                    </td>
                    <td className="p-2 sm:p-3 text-center">
                      {(img.size / 1024).toFixed(2)}
                    </td>
                    <td className="p-2 sm:p-3 text-center text-green-500 font-semibold">
                      {reducedPercent}%
                    </td>
                    <td className="p-2 sm:p-3 text-left">
                      {desc}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ImageOptimizer;
