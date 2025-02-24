import { useState } from "react";

const questions = [
  {
    question: "¿Qué formato es ideal para exportar iconos desde Figma?",
    options: ["JPEG", "PNG", "SVG", "WEBP"],
    answer: "SVG",
  },
  {
    question: "¿Qué plugin permite exportar código JSX desde Figma?",
    options: ["Tailwind CSS for Figma", "Anima for Figma", "SVG Export", "FigJam Exporter"],
    answer: "Anima for Figma",
  },
  {
    question: "¿Cómo se llama la herramienta de prototipado colaborativo de Figma?",
    options: ["FigJam", "Figma Team", "ProtoPie", "React Preview"],
    answer: "FigJam",
  },
  {
    question: "¿Cuál es el comando para copiar el CSS de un elemento en Figma?",
    options: [
      "Click derecho → Inspect → Copy CSS",
      "Click derecho → Export → CSS",
      "View → Source Code → Copy",
      "Archivo → Exportar como CSS",
    ],
    answer: "Click derecho → Inspect → Copy CSS",
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
    question: "¿Para qué sirve el modo 'Auto Layout' en Figma?",
    options: [
      "Para generar animaciones con React",
      "Para definir y mantener espaciados y alineaciones automáticamente",
      "Para convertir diseños en JSX",
      "Para hacer scroll infinito en Figma",
    ],
    answer: "Para definir y mantener espaciados y alineaciones automáticamente",
  },
  {
    question: "¿Cuál es la principal ventaja de usar componentes en Figma?",
    options: [
      "Permitir animaciones 3D",
      "Poder enlazar la cuenta de React",
      "Mantener consistencia y reutilización en el diseño",
      "Habilitar la importación directa a TypeScript",
    ],
    answer: "Mantener consistencia y reutilización en el diseño",
  },
  {
    question: "¿Cuál de estas extensiones de Figma facilita la conversión a React?",
    options: [
      "React Figma Converter",
      "Figma to React by Builder.io",
      "Figma Animations for CSS",
      "Gatsby Figma Linker",
    ],
    answer: "Figma to React by Builder.io",
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
    question: "¿Qué debes revisar antes de exportar diseños de Figma a React?",
    options: [
      "El color de fondo de la pantalla",
      "La compatibilidad de fuentes y estructura de componentes",
      "El historial de versiones de Figma",
      "La conexión a Internet",
    ],
    answer: "La compatibilidad de fuentes y estructura de componentes",
  },
];

const TestEjercicio4 = () => {
  const [selectedAnswers, setSelectedAnswers] = useState(
    Array(questions.length).fill("")
  );

  const handleSelect = (index, option) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[index] = option;
    setSelectedAnswers(newAnswers);
  };

  const checkAnswers = () => {
    const correct = selectedAnswers.filter(
      (ans, i) => ans === questions[i].answer
    ).length;
    alert(`Has respondido correctamente ${correct} de ${questions.length}`);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full max-w-3xl p-6 bg-white bg-opacity-10 shadow-lg rounded-2xl mt-6 text-white">
      <h2 className="text-2xl font-bold mb-4">Test sobre Figma y React</h2>

      {questions.map((q, i) => (
        <div key={i} className="mb-6 w-full flex flex-col items-center">
          <p className="font-semibold mb-2">{q.question}</p>
          <div className="flex flex-wrap justify-center">
            {q.options.map((opt) => (
              <button
                key={opt}
                onClick={() => handleSelect(i, opt)}
                className={`mr-2 mb-2 px-4 py-2 rounded-lg font-bold transition ${
                  selectedAnswers[i] === opt
                    ? "bg-pink-500 text-white"
                    : "bg-white bg-opacity-20 hover:bg-pink-400"
                }`}
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

export default TestEjercicio4;
