import { useState } from "react";

const questions = [
  {
    question: "¿Cuál de estos formatos soporta transparencia?",
    options: ["JPEG", "PNG", "WebP", "AVIF"],
    answer: "PNG",
  },
  {
    question: "¿Cuál de estos formatos es vectorial?",
    options: ["JPEG", "SVG", "WebP", "PNG"],
    answer: "SVG",
  },
  {
    question: "¿Cuál es considerado uno de los más eficientes en la web?",
    options: ["GIF", "PNG", "WebP", "BMP"],
    answer: "WebP",
  },
  {
    question: "¿Cuál de estos formatos NO permite transparencia?",
    options: ["PNG", "AVIF", "JPEG", "WebP"],
    answer: "JPEG",
  },
  {
    question: "¿Cuál de estos formatos utiliza compresión con pérdida?",
    options: ["PNG", "SVG", "BMP", "JPEG"],
    answer: "JPEG",
  },
  {
    question: "¿Cuál de estos formatos soporta animaciones nativamente?",
    options: ["PNG", "JPEG", "WebP", "BMP"],
    answer: "WebP",
  },
  {
    question: "¿Cuál formato es apropiado para logotipos con colores planos?",
    options: ["JPEG", "PNG", "SVG", "AVIF"],
    answer: "SVG",
  },
  {
    question: "¿Qué formato se considera 'legacy' pero aún muy usado para fotos?",
    options: ["JPEG", "PNG", "SVG", "AVIF"],
    answer: "JPEG",
  },
  {
    question: "¿Cuál de estos no es un formato vectorial?",
    options: ["SVG", "EPS", "PNG", "AI"],
    answer: "PNG",
  },
  {
    question: "¿Cuál es un formato emergente con alta compresión para fotos?",
    options: ["PNG", "AVIF", "BMP", "TIFF"],
    answer: "AVIF",
  },
];

const TestEjercicio1 = () => {
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
    <div className="flex flex-col justify-center items-center w-full max-w-3xl p-6 bg-white bg-opacity-10 shadow-lg rounded-2xl mt-6">
      <h2 className="text-2xl font-bold mb-4 text-white">Test de Conocimientos</h2>

      {questions.map((q, i) => (
        <div key={i} className="mb-6 w-full flex flex-col items-center">
          <p className="font-semibold text-white mb-2">{q.question}</p>
          <div className="flex flex-wrap">
            {q.options.map((opt) => (
              <button
                key={opt}
                onClick={() => handleSelect(i, opt)}
                className={`mr-2 mb-2 px-4 font-bold py-2 rounded-lg transition ${
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

export default TestEjercicio1;
