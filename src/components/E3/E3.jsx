import ImageEditor from "./ImageEditor";
import Test3 from "./testE3";

const Ejercicio3 = () => {
  return (
    <div className="p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Ejercicio 3: Manipulación de Imágenes con Canvas
      </h1>
      <p className="mb-4 text-center">
        Sube una imagen y aplica efectos en tiempo real usando la API Canvas.
        ¡Prepárate para el test!
      </p>
      <ImageEditor />
      <Test3 />
    </div>
  );
};
export default Ejercicio3;
