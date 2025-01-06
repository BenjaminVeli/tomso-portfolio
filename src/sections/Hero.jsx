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

const buttonVariants = {
  initial: {
    x: 0,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const Hero = () => {
  return (
    <section id="hero" className="w-full flex justify-center items-center min-h-screen">
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
              className="text-white text-[2.7rem] sm:text-5xl xl:text-8xl leading-none mb-4 font-semibold"
            >
              Benjamín Veli
            </motion.h1>
            <motion.h2
              variants={textVariants}
              className="sm:text-3xl text-xl leading-none text-white font-normal"
            >
              Full Stack Developer
            </motion.h2>

            <motion.div
              variants={textVariants}
              className="mt-8 flex items-center flex-col gap-4 md:flex-row"
            >
              <motion.a
                variants={buttonVariants}
                href="#contact"
                className="font-medium bg-zinc-950 hover:bg-customButton border rounded-md border-customButton py-2.5 px-6 transition-all duration-300 text-white hover:text-black text-center"
                whileTap={{ scale: 0.95 }}
              >
                Contact me
              </motion.a>
              <motion.a
                variants={buttonVariants}
                href="#projects"
                className="font-medium inline-block bg-customButton hover:bg-zinc-950 border rounded-md border-customButton py-2.5 px-6 transition-all duration-300 text-black hover:text-white"
                whileTap={{ scale: 0.95 }}
              >
                See the Latest Works
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src={Tomso.src}
              alt="Profile"
              className="w-60 md:w-72 object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
