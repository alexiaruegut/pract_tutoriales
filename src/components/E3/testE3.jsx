import { useState } from "react";

const questions = [
  {
    question: "¿Qué API de JavaScript permite manipular imágenes en un canvas?",
    options: ["WebGL", "Canvas API", "Intersection Observer", "Fetch API"],
    answer: "Canvas API",
  },
  {
    question: "¿Cuál de estos métodos obtiene los datos de píxeles de una imagen en Canvas?",
    options: ["getContext()", "getImageData()", "setTimeout()", "drawImage()"],
    answer: "getImageData()",
  },
  {
    question: "¿Cuál es el método para dibujar una imagen en un lienzo de Canvas?",
    options: ["fillRect()", "drawImage()", "drawRect()", "putImageData()"],
    answer: "drawImage()",
  },
  {
    question: "¿Qué contexto se usa generalmente para 2D en un elemento <canvas>?",
    options: ["webgl2", "2d", "bitmaprenderer", "3d"],
    answer: "2d",
  },
  {
    question: "¿Qué propiedad define el ancho del elemento <canvas> en HTML?",
    options: ["canvas.style.width", "canvas.offsetWidth", "canvasWidth", "canvas.width"],
    answer: "canvas.width",
  },
  {
    question: "¿Cuál de estas librerías facilita la manipulación avanzada de imágenes en Canvas?",
    options: ["React Router", "Konva", "Redux", "Axios"],
    answer: "Konva",
  },
  {
    question: "¿Para qué sirve el método putImageData()?",
    options: [
      "Cargar una imagen externa",
      "Dibujar un rectángulo",
      "Colocar datos de píxeles en el lienzo",
      "Obtener el contexto 3D",
    ],
    answer: "Colocar datos de píxeles en el lienzo",
  },
  {
    question: "¿Cómo se convierte el contenido de un canvas en una URL base64?",
    options: [
      "canvas.toDataURL()",
      "canvas.convertToBase64()",
      "canvas.getImageData()",
      "canvas.getBytes()",
    ],
    answer: "canvas.toDataURL()",
  },
  {
    question: "¿Cuál es la forma correcta de obtener el contexto 2D de un canvas?",
    options: [
      "document.getElementById('canvas')",
      "canvas.getContext('2d')",
      "context.canvas",
      "canvas.getContext('canvas-2d')",
    ],
    answer: "canvas.getContext('2d')",
  },
  {
    question: "¿Cómo se define un color de relleno para dibujos en el contexto 2D?",
    options: [
      "context.fillStyle = '#FF0000'",
      "context.setColor('#FF0000')",
      "context.color = 'red'",
      "fillStyle.context('#FF0000')",
    ],
    answer: "context.fillStyle = '#FF0000'",
  },
];

const TestEjercicio3 = () => {
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
      <h2 className="text-2xl font-bold mb-4">Test de Manipulación de Imágenes</h2>

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

export default TestEjercicio3;
