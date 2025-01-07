import { useState } from "react";
import { navLinks } from "../utils/data";

import LogoIcon from "../assets/logo.svg";
import Github from "../assets/bxl-github.svg";
import Menu from "../assets/bx-menu.svg";
import BtnX from "../assets/bx-x.svg";

import { motion, AnimatePresence } from "framer-motion";

const NavItems = ({ closeMenu }) => (
  <ul className="flex flex-col items-center gap-6 lg:flex-row lg:gap-11 relative z-20 w-full">
    {navLinks.map(({ id, href, name }) => (
      <li
        key={id}
        className="text-customLink hover:text-customOrange duration-500 transition-all font-medium text-base w-full bg-blue-900 lg:bg-transparent hover:bg-red-900 lg:hover:bg-transparent py-2 px-4 text-center rounded-md"
      >
        <a href={href} onClick={closeMenu} className="block w-full">
          {name}
        </a>
      </li>
    ))}
  </ul>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const menuVariants = {
    hidden: { x: "-100%", opacity: 0 }, // Fuera de la pantalla a la izquierda
    visible: { x: "0%", opacity: 1 }, // Totalmente visible
    exit: { x: "-100%", opacity: 0 }, // Deslizándose hacia afuera
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white">
      <div className="header-lower">
        <div className="container relative">
          <div className="flex justify-between lg:relative items-center h-16 lg:h-18">
            <a
              href="/"
              title="Go to Tomso homepage"
              aria-label="Tomso homepage"
            >
              <img src={LogoIcon.src} alt="Tomso logo" className="h-8 w-8" />
            </a>

            {/* Menú para pantallas grandes */}
            <nav className="lg:flex hidden">
              <NavItems closeMenu={null} />
            </nav>

            <a
              href="https://github.com/BenjaminVeli/tomso-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my portfolio"
              className="lg:flex hidden"
            >
              <img
                src={Github.src}
                alt="Github icon"
                className="cursor-pointer h-8 w-8"
              />
            </a>

            <button
              onClick={toggleMenu}
              className="lg:hidden flex"
              alt="Toggle Menu"
            >
              <img
                src={Menu.src}
                alt="Menu icon"
                className="cursor-pointer h-8 w-8"
              />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute z-40 inset-y-0 left-0 lg:hidden block w-[240px] h-screen bg-white"
              variants={menuVariants} // Variantes de animación
              initial="hidden" // Estado inicial (fuera de pantalla)
              animate="visible" // Cuando está visible
              exit="exit" // Cuando sale de la pantalla
              transition={{ type: "tween", duration: 0.3 }} // Transición suave
            >
              {/* Botón para cerrar el menú móvil */}
              <button
                onClick={closeMenu}
                className="right-4 z-10 top-5 flex items-center justify-center w-8 h-8 cursor-pointer absolute "
                alt="Close Menu"
              >
                <img
                  src={BtnX.src}
                  alt="Close icon"
                  className="cursor-pointer h-8 w-8"
                />
              </button>
              <div className="py-10 px-5">
                <h2 className="text-2xl font-medium text-customLink py-4">
                  Menu
                </h2>
                <nav>
                  <NavItems closeMenu={closeMenu} />
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
