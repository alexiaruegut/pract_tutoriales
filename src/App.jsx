import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/home";
import E1 from "./components/E1/E1";
import E2 from "./components/E2/E2";
import E3 from "./components/E3/E3";
import E4 from "./components/E4/E4";
import E5 from "./components/tutorial/tutorial";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow flex items-center justify-center pl-4 pr-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ejercicio1" element={<E1 />} />
            <Route path="/ejercicio2" element={<E2 />} />
            <Route path="/ejercicio3" element={<E3 />} />
            <Route path="/ejercicio4" element={<E4 />} />
            <Route path="/ejercicio5" element={<E5 />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
