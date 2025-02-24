import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import jsPDF from "jspdf";

const MarkdownEditor = () => {
  const [text, setText] = useState(() => {
    return localStorage.getItem("tutorialContent") || "";
  });

  useEffect(() => {
    localStorage.setItem("tutorialContent", text);
  }, [text]);

  const descargarPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Notas del Usuario", 10, 10);
    doc.setFontSize(12);
    doc.text(text || "No hay contenido para descargar", 10, 20);
    doc.save("Notas.pdf");
  };

  return (
    <div className="bg-white bg-opacity-10 shadow-lg rounded-2xl p-6 w-full w-full mx-auto text-center mt-4">
      <h2 className="text-2xl font-bold font-['Montserrat'] mb-4">Editor de Notas</h2>
      <textarea
        className="w-full h-40 p-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ee3299]"
        placeholder="Escribe aquí tus notas..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <h3 className="text-lg font-bold mt-4">Vista Previa</h3>
      <div className="p-4 text-black border border-gray-300 bg-gray-100 rounded-lg text-left">
        <ReactMarkdown>{text}</ReactMarkdown>
      </div>
      <button
        onClick={descargarPDF}
        className="mt-4 px-6 py-3 text-white bg-pink-500 rounded-lg shadow-md transition-all duration-300 hover:bg-pink-600"
      >
        Descargar Notas en PDF
      </button>
    </div>
  );
};

export default MarkdownEditor;
