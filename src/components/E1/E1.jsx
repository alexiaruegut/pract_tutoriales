import ImageOptimizer from "./ImageOptimizer";
import TestE1 from "./testE1";

const Ejercicio1 = () => {
  return (
    <div className="p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Ejercicio 1: Optimización de Imágenes
      </h1>
      <p className="mb-4">
       Sube una imagen para convertirla a otros formatos y comparalos. ¡Prepárate para el test!
      </p>
      <ImageOptimizer />
      <TestE1 />
    </div>
  );
};

export default Ejercicio1;
