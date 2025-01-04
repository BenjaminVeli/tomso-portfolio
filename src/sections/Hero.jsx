import { motion } from "framer-motion";

import Tomso from "../images/Tomso.png";
import Scroll from "../images/scroll.png";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};    

const Hero = () => {
  return (
    <section id="hero" className="flex justify-center items-center min-h-screen">
      <div className="container relative">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <motion.div
            className="md:text-left text-center"
            variants={textVariants}
            initial="initial"
            animate="animate"
          >
            <motion.h1
              variants={textVariants}
              class="text-5xl md:text-4xl lg:text-5xl text-white font-semibold mb-4"
            >
              Benjamín Veli
            </motion.h1>
            <motion.h2
              variants={textVariants}
              class="text-xl md:text-4xl lg:text-6xl text-white font-semibold"
            >
              Full Stack Develoaper
            </motion.h2>

            <motion.div
              variants={textVariants}
              className="my-6"
            >
              <motion.a
                variants={textVariants}
                href="#contact"
                className="bg-transparent hover:bg-blue-800 border rounded-md border-blue-800 py-2.5 px-5  transition-all duration-500 text-blue-600 hover:text-white mr-4  "
              >
                Contact me
              </motion.a>
              <motion.a
                variants={textVariants}
                href="#contact"
                className="bg-blue-800 hover:bg-blue-950 border rounded-md border-blue-800 py-2.5 px-5  transition-all duration-500 text-white"
              >
                See the Latest Works
              </motion.a> 
            </motion.div>
          </motion.div>

          <div className="flex justify-center">
            <img
              src={Tomso.src}
              alt="Logo"
              className="w-60 md:w-72 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
