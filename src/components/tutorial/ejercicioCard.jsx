import jsPDF from "jspdf";
import "jspdf-autotable";
import PropTypes from "prop-types";

const teorias = {
  "Ejercicio 1": `Optimización de imágenes
  
  La optimización de imágenes es crucial para mejorar el rendimiento y la accesibilidad de las páginas web. Se utilizan diferentes formatos como JPEG, PNG y WebP, cada uno con sus ventajas y desventajas.
  - **JPEG**: Compresión con pérdida, ideal para fotografías.
  - **PNG**: Sin pérdida, adecuado para gráficos con transparencia.
  - **WebP**: Alta compresión con y sin pérdida, optimizado para la web.
  
  **Técnicas de optimización:**
  - Reducción del tamaño sin comprometer la calidad.
  - Uso de herramientas como TinyPNG, Squoosh y OptiPNG.
  - Implementación de carga diferida (Lazy Loading) para reducir el tiempo de carga.
  
  **Beneficios:**
  - Páginas más rápidas y eficientes.
  - Mejor experiencia de usuario y SEO.
  - Ahorro de ancho de banda.
  `,
  
  "Ejercicio 2": `Lazy Loading en imágenes
  
  El Lazy Loading es una técnica que retrasa la carga de recursos como imágenes hasta que sean visibles en la pantalla.
  
  **Funcionamiento:**
  - Se usa la API **Intersection Observer** para detectar cuando un elemento entra en el viewport.
  - Permite evitar la carga innecesaria de recursos y mejora la velocidad de la web.
  
  **Ejemplo en React:**
  - Implementación de un componente de carga diferida utilizando el hook **useEffect** y **useRef**.
  
  **Beneficios:**
  - Reduce el tiempo de carga inicial.
  - Mejora el rendimiento en dispositivos móviles.
  - Optimiza el uso del ancho de banda.
  `,
  
  "Ejercicio 3": `Manipulación de imágenes con Canvas
  
  La API Canvas de HTML5 permite manipular imágenes directamente en el navegador, ofreciendo funcionalidades avanzadas para modificar gráficos y aplicar efectos.
  
  **Características principales:**
  - Dibujar imágenes y figuras en un lienzo.
  - Manipulación de píxeles mediante **getImageData()** y **putImageData()**.
  - Aplicación de filtros y transformaciones, como escala de grises, inversión de colores y rotaciones.
  
  **Ejemplo de código en JavaScript:**
  - Cargar una imagen y aplicarle efectos en tiempo real.
  - Uso del contexto 2D de Canvas para realizar modificaciones avanzadas.
  
  **Aplicaciones:**
  - Edición de imágenes en el navegador.
  - Creación de gráficos interactivos y animaciones.
  - Desarrollo de videojuegos en 2D.
  `,
  
  "Ejercicio 4": `E4: Integración de Figma en React
  
  Figma es una herramienta de diseño que permite la colaboración en la creación de interfaces de usuario. Su integración con React facilita la conversión de diseños en componentes reutilizables.
  
  **Pasos para exportar un diseño de Figma a React:**
  - Diseñar la interfaz en Figma.
  - Usar plugins como **Figma to Code** para obtener el código JSX.
  - Adaptar los estilos con **Tailwind CSS** o **Styled Components**.
  
  **Ventajas de esta integración:**
  - Acelera el desarrollo de interfaces responsivas.
  - Permite la reutilización de componentes.
  - Mejora la coherencia entre diseño y código.
  `
};

const descargarPDF = (title) => {
    const normalizedTitle = Object.keys(teorias).find((key) =>
      key.toLowerCase().includes(title.toLowerCase())
    );
  
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text(title, 10, 10);
    doc.setFontSize(12);
    doc.text(teorias[normalizedTitle] || "Teoría no disponible", 10, 20);
    doc.save(`${title}.pdf`);
  };  

const EjercicioCard = ({ title, path }) => {
  return (
    <div className="p-6 bg-white bg-opacity-10 shadow-lg rounded-2xl text-center w-full max-w-md mx-auto">
      <h3 className="text-2xl font-bold text-white font-['Montserrat'] mb-4 text-center">{title}</h3>
      <div className="flex justify-center gap-4">
        <a
          href={path}
          className="inline-block px-6 py-3 text-white bg-pink-500 text-white px-4 py-2 m-1 rounded-lg hover:bg-pink-600 transition"
        >
          Ver Ejercicio
        </a>
        <button
          onClick={() => descargarPDF(title)}
          className="px-6 py-3 text-white bg-gray-500 text-white px-4 py-2 m-1 rounded-lg hover:bg-gray-600 transition"
        >
          Descargar Teoría
        </button>
      </div>
    </div>
  );
};

EjercicioCard.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default EjercicioCard;
