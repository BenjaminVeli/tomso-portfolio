import { motion } from "framer-motion";
import { fadeFromLeft } from "../utils/motionVariants";
import ScrollReveal from "../utils/ScrollReveal";

import Tomso from "../images/TomsoGreen.png";

const Hero = () => {
  return (
    <section
      id="hero"
      className="w-full flex justify-center items-center min-h-screen bg-white"
    >
      <div className="container relative">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <ScrollReveal
            className="md:text-left text-center"
            variant="container"
          >
            <motion.h1
              variants={fadeFromLeft}
              className="text-black text-[2.7rem] sm:text-5xl xl:text-7xl leading-none mb-4 font-semibold"
            >
              Benjamín Veli
            </motion.h1>
            <motion.h2
              variants={fadeFromLeft}
              className="sm:text-3xl text-xl leading-none text-black font-normal"
            >
              Full Stack Developer
            </motion.h2>

            <motion.div
              variants={fadeFromLeft}
              className="mt-8 flex items-center flex-col gap-4 md:flex-row"
            >
              <a
                href="#contact"
                className="font-medium bg-zinc-950 hover:bg-customButton border rounded-md border-customButton py-2.5 px-6 transition-all duration-300 text-white hover:text-black text-center"
              >
                Contact me
              </a>
              <a
                href="#projects"
                className="font-medium inline-block bg-customButton hover:bg-zinc-950 border rounded-md border-customButton py-2.5 px-6 transition-all duration-300 text-black hover:text-white"
              >
                See the Latest Works
              </a>
            </motion.div>
          </ScrollReveal>

          <ScrollReveal variant="fadeInScale" className="flex justify-center">
            <img
              src={Tomso.src}
              alt="Profile"
              className="w-60 md:w-72 object-cover"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;
