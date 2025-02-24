import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full text-white p-4 flex justify-center">
      <div className="h-full w-full container mx-auto flex justify-between items-center max-w-[80%]">
        <div className="flex items-center space-x-4">
          <Link to="/" className="flex items-center space-x-4">
            <img src="/kitty1.png" alt="Logo Kitty" />
            <h1 className="tracking-wider text-2xl font-bold bg-gradient-to-r from-pink-500 to-white bg-clip-text text-transparent">
              TUTORIALES DAREZ
            </h1>
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link
                to="/ejercicio1"
                className="p-2 font-bold rounded-3xl hover:bg-pink-400/20"
              >
                E1
              </Link>
            </li>
            <li>
              <Link
                to="/ejercicio2"
                className="p-2 font-bold rounded-3xl hover:bg-pink-400/20"
              >
                E2
              </Link>
            </li>
            <li>
              <Link
                to="/ejercicio3"
                className="p-2 font-bold rounded-3xl hover:bg-pink-400/20"
              >
                E3
              </Link>
            </li>
            <li>
              <Link
                to="/ejercicio4"
                className="p-2 font-bold rounded-3xl hover:bg-pink-400/20"
              >
                E4
              </Link>
            </li>
            <li>
              <Link
                to="/ejercicio5"
                className="p-2 font-bold rounded-3xl hover:bg-pink-400/20"
              >
                E5
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
