import { useState } from "react";

const LazyLoadingTheory = () => (
  <div className="mb-6 w-full bg-white bg-opacity-20 p-4 rounded-lg shadow">
    <h2 className="text-xl font-bold mb-2 text-white text-center">Teoría</h2>
    <p className="text-white">
      El Lazy Loading es una técnica que retrasa la carga de recursos (como
      imágenes o componentes) hasta el momento en que se necesitan, generalmente
      cuando están a punto de ser visibles en el viewport. Esto mejora el
      rendimiento inicial de la página y reduce el tiempo de carga, ya que se
      evitan descargas innecesarias de contenido que el usuario aún no ve.
    </p>
    <p className="mt-2 text-white">
      En React, podemos usar la API de <strong>Intersection Observer </strong>
      para detectar cuándo un elemento entra en el viewport y así disparar la
      carga de manera perezosa. También es posible con otros métodos, pero
      Intersection Observer es el más eficiente y moderno para este propósito.
    </p>
  </div>
);

const questions = [
  {
    question: "¿Qué hace Lazy Loading?",
    options: [
      "Carga todas las imágenes de inmediato",
      "Carga imágenes solo cuando son visibles",
      "Reduce la calidad de las imágenes",
      "Almacena en caché todas las peticiones",
    ],
    answer: "Carga imágenes solo cuando son visibles",
  },
  {
    question: "¿Qué API de JavaScript se usa para Lazy Loading?",
    options: [
      "Fetch API",
      "Intersection Observer",
      "Canvas API",
      "LocalStorage",
    ],
    answer: "Intersection Observer",
  },
  {
    question:
      "¿Para qué sirve la propiedad 'threshold' en IntersectionObserver?",
    options: [
      "Define cuántos elementos se pueden observar",
      "Indica el tamaño máximo de un elemento",
      "Define el porcentaje de visibilidad para activar el callback",
      "Mueve el elemento en el DOM",
    ],
    answer: "Define el porcentaje de visibilidad para activar el callback",
  },
  {
    question: "¿Cómo se evita que la imagen desaparezca al salir del viewport?",
    options: [
      "Reiniciando el observer cuando sale",
      "Llamando a observer.disconnect() tras hacerla visible",
      "Uso de CSS display: none",
      "No se puede evitar",
    ],
    answer: "Llamando a observer.disconnect() tras hacerla visible",
  },
  {
    question: "¿Cuál de estas es una ventaja clave de lazy loading?",
    options: [
      "Aumentar el tamaño total de la página",
      "Desactivar las solicitudes HTTP",
      "Mejorar la experiencia de usuario al agilizar la carga inicial",
      "Quitar la necesidad de un servidor",
    ],
    answer: "Mejorar la experiencia de usuario al agilizar la carga inicial",
  },
  {
    question:
      "¿Cuál de estos métodos se usa para cargar perezosamente componentes en React?",
    options: [
      "React.lazy y Suspense",
      "setTimeout y alert",
      "Canvas y fetch",
      "forEach y map",
    ],
    answer: "React.lazy y Suspense",
  },
  {
    question:
      "¿Qué ocurre con la imagen antes de ser visible con lazy loading?",
    options: [
      "Se muestra en baja calidad",
      "Se muestra un placeholder o simplemente nada",
      "Se descarta y no se vuelve a cargar",
      "Se superpone sobre el resto del contenido",
    ],
    answer: "Se muestra un placeholder o simplemente nada",
  },
  {
    question: "¿En qué hook de React suele iniciarse el IntersectionObserver?",
    options: ["useState", "useEffect", "useContext", "useMemo"],
    answer: "useEffect",
  },
  {
    question:
      "¿Es obligatorio tener scroll para que IntersectionObserver funcione?",
    options: [
      "Sí, de lo contrario nunca se disparará",
      "No, se puede usar rootMargin o layouts que causen intersección",
      "Sí, solo con scroll vertical",
      "Sí, pero solo en navegadores modernos",
    ],
    answer: "No, se puede usar rootMargin o layouts que causen intersección",
  },
  {
    question: "¿Qué formato de imagen se carga primero con lazy loading?",
    options: [
      "El que esté más cerca de la parte superior",
      "Todos a la vez",
      "Las imágenes con menor peso en KB",
      "No hay un orden fijo, depende del viewport",
    ],
    answer: "No hay un orden fijo, depende del viewport",
  },
];

const TestEjercicio2 = () => {
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
    <div className="flex flex-col justify-center items-center w-full max-w-3xl p-6 bg-white bg-opacity-10 shadow-lg rounded-2xl mt-4">
      <LazyLoadingTheory />

      <h2 className="text-2xl font-bold mb-4 text-white">
        Test de Lazy Loading
      </h2>

      {questions.map((q, i) => (
        <div key={i} className="mb-6 w-full flex flex-col items-center">
          <p className="font-semibold text-white mb-2">{q.question}</p>
          <div className="flex flex-wrap justify-center">
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

export default TestEjercicio2;
