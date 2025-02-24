import { useState } from "react";

const questions = [
  {
    question: "¿Cuál de estos formatos soporta transparencia?",
    options: ["JPEG", "PNG", "WebP", "AVIF"],
    answer: "PNG",
  },
  {
    question: "¿Qué API de JavaScript permite manipular imágenes en un canvas?",
    options: ["WebGL", "Canvas API", "Intersection Observer", "Fetch API"],
    answer: "Canvas API",
  },
  {
    question: "¿Qué herramienta permite diseñar interfaces web?",
    options: ["Photoshop", "Figma", "GIMP"],
    answer: "Figma",
  },
  {
    question: "¿Cuál es la ventaja principal del Lazy Loading?",
    options: [
      "Reduce el consumo de memoria",
      "Mejora el rendimiento y tiempo de carga",
      "Aumenta la resolución de la imagen",
    ],
    answer: "Mejora el rendimiento y tiempo de carga",
  },
  {
    question: "¿Cómo se llama la herramienta de prototipado colaborativo de Figma?",
    options: ["FigJam", "Figma Team", "ProtoPie", "React Preview"],
    answer: "FigJam",
  },
  {
    question: "¿Qué método se usa en Canvas API para obtener datos de una imagen?",
    options: ["getImageData", "drawImage", "setTimeout", "putImageData"],
    answer: "getImageData",
  },
  {
    question: "¿Qué API se utiliza en JavaScript para detectar cuando un elemento entra en el viewport?",
    options: ["WebGL", "Canvas API", "Intersection Observer", "Fetch API"],
    answer: "Intersection Observer",
  },
  {
    question: "¿Qué formato es ideal para exportar iconos desde Figma?",
    options: ["JPEG", "PNG", "SVG", "WEBP"],
    answer: "SVG",
  },
  {
    question: "¿Cuál de estos métodos se recomienda para integrar diseños de Figma en React?",
    options: [
      "Exportar a PDF y convertirlo en JSX",
      "Exportar imágenes estáticas",
      "Usar un plugin que genere componentes React",
      "Copiar y pegar el prototipo directamente",
    ],
    answer: "Usar un plugin que genere componentes React",
  },
  {
    question: "¿Cuál es la mejor forma de manejar tipografías de Figma en React?",
    options: [
      "Exportarlas como imágenes",
      "Convertir cada texto en un SVG",
      "Usar variables CSS o archivos de fuente en el proyecto React",
      "No se puede manejar tipografías de Figma en React",
    ],
    answer: "Usar variables CSS o archivos de fuente en el proyecto React",
  },
  {
    question: "¿Cuál de estos métodos se usa para cargar perezosamente componentes en React?",
    options: ["React.lazy y Suspense", "setTimeout y alert", "Canvas y fetch", "forEach y map"],
    answer: "React.lazy y Suspense",
  },
  {
    question: "¿Cómo se define un color de relleno para dibujos en el contexto 2D de Canvas?",
    options: [
      "context.fillStyle = '#FF0000'",
      "context.setColor('#FF0000')",
      "context.color = 'red'",
      "fillStyle.context('#FF0000')",
    ],
    answer: "context.fillStyle = '#FF0000'",
  },
  {
    question: "¿Qué propiedad de CSS ayuda a mejorar la accesibilidad de las imágenes?",
    options: ["alt", "title", "src"],
    answer: "alt",
  },
  {
    question: "¿Cómo se convierte el contenido de un canvas en una URL base64?",
    options: ["canvas.toDataURL()", "canvas.convertToBase64()", "canvas.getImageData()", "canvas.getBytes()"],
    answer: "canvas.toDataURL()",
  },
  {
    question: "¿Qué formato emergente con alta compresión es ideal para fotos?",
    options: ["PNG", "AVIF", "BMP", "TIFF"],
    answer: "AVIF",
  }
];

const Test = () => {
  const [selectedAnswers, setSelectedAnswers] = useState(
    Array(questions.length).fill("")
  );

  const handleSelect = (index, option) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[index] = option;
    setSelectedAnswers(newAnswers);
  };

  const checkAnswers = () => {
    const correct = selectedAnswers.filter((ans, i) => ans === questions[i].answer).length;
    alert(`Has respondido correctamente ${correct} de ${questions.length}`);
  };

  return (
    <div className="p-6 bg-white bg-opacity-10 shadow-lg rounded-2xl w-full mx-auto text-center mt-6">
      <h2 className="text-2xl font-bold mb-4">Test Final</h2>
      {questions.map((q, i) => (
        <div key={i} className="mb-4">
          <p className="font-semibold text-lg">{q.question}</p>
          <div className="mt-2 flex flex-wrap justify-center gap-2">
            {q.options.map((opt) => (
              <button
                key={opt}
                className={`px-4 py-2 rounded-md transition-all duration-300 ${
                    selectedAnswers[i] === opt
                    ? "bg-pink-500 text-white"
                    : "bg-white bg-opacity-20 hover:bg-pink-400"
                }`}
                onClick={() => handleSelect(i, opt)}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      ))}
      <button
        onClick={checkAnswers}
        className="bg-pink-500 text-white px-6 py-2 mt-4 rounded-lg hover:bg-green-600 transition"
      >
        Verificar respuestas
      </button>
    </div>
  );
};

export default Test;
