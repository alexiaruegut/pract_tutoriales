import LazyImage from "./LazyImage";
import Test2 from "./testE2";

const Ejercicio2 = () => {
  const images = [
    "forest-ke.jpg",
    "sea-ke.jpg",
    "mountains-ke.jpg",
  ];
  return (
    <div className="p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">
        Ejercicio 2: Lazy Loading en Imágenes
      </h1>
      <p>
        Las imágenes solo se cargarán cuando sean visibles en la
        pantalla. ¡Prepárate para el test!
      </p>
        <Test2 />
        <div className="mt-6 p-6 bg-white bg-opacity-15 shadow-lg rounded-2xl">

        
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <LazyImage key={index} src={src} alt={`Imagen ${index + 1}`} />
        ))}
      </div>
      <p className="text-sm text-gray-400 mt-2 text-center">Fotografías de Karl Egger</p>
      </div>
    </div>
  );
};
export default Ejercicio2;
