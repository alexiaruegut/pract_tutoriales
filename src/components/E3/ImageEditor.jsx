import { useRef, useState } from "react";

const ImageEditor = () => {
  const [image, setImage] = useState(null);
  const [isImageUploaded, setIsImageUploaded] = useState(false);
  const [brightness, setBrightness] = useState(100); 
  const [grayscale, setGrayscale] = useState(false); 
  const [invert, setInvert] = useState(false); 
  const imgRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
        setIsImageUploaded(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const resetFilters = () => {
    setBrightness(100);
    setGrayscale(false);
    setInvert(false);
  };

  const getFilterStyle = () => {
    let filters = `brightness(${brightness}%)`;
    if (grayscale) filters += " grayscale(100%)";
    if (invert) filters += " invert(100%)";
    return filters;
  };

  return (
    <div
      className={`flex flex-col items-center w-full max-w-3xl p-6 bg-white bg-opacity-10 shadow-lg rounded-2xl text-white mx-auto mt-6 transition-all duration-500 ${
        isImageUploaded ? "h-auto" : ""
      }`}
    >
      <label className="cursor-pointer bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600 transition">
        Subir Imagen
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
        />
      </label>

      {isImageUploaded && (
        <>
          <h2 className="text-2xl font-bold mt-4 mb-2">Editor de Imágenes</h2>
          <p className="mb-4 text-center">
            Ajusta el brillo y aplica filtros a la imagen.
          </p>

          {image && (
            <img
              ref={imgRef}
              src={image}
              alt="Imagen original"
              className="w-full max-w-lg rounded-lg shadow-md mb-4 transition-all duration-300 mt-4"
              style={{
                filter: getFilterStyle(), 
              }}
            />
          )}

          <div className="w-full max-w-lg flex flex-col items-center mt-4">
            <label className="mb-2 text-white text-sm">Brillo: {brightness}%</label>
            <input
              type="range"
              min="50"
              max="200"
              value={brightness}
              onChange={(e) => setBrightness(e.target.value)}
              className="w-full cursor-pointer"
            />
          </div>

          <div className="mt-4">
            <button
              onClick={() => setGrayscale(!grayscale)}
              className={`px-4 py-2 m-2 rounded-lg transition ${
                grayscale ? "bg-pink-600 text-white" : "bg-pink-500 text-white hover:bg-pink-600"
              }`}
            >
              {grayscale ? "Desactivar Grises" : "Escala de Grises"}
            </button>
            <button
              onClick={() => setInvert(!invert)}
              className={`px-4 py-2 m-2 rounded-lg transition ${
                invert ? "bg-pink-600 text-white" : "bg-pink-500 text-white hover:bg-pink-600"
              }`}
            >
              {invert ? "Desactivar Invertido" : "Invertir Colores"}
            </button>
            <button
              onClick={resetFilters}
              className="bg-gray-500 text-white px-4 py-2 m-2 rounded-lg hover:bg-gray-600 transition"
            >
              Restablecer Imagen
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ImageEditor;
