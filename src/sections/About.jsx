import { motion } from "framer-motion";
import ScrollReveal from "../utils/ScrollReveal";
import { fadeFromLeft } from "../utils/motionVariants";

const About = () => {
  return (
    <section
      id="about"
      className="w-full flex justify-center items-center min-h-screen bg-black"
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <ScrollReveal
            variant="container"
            className="text-center md:text-left"
          >
            <motion.h2
              variants={fadeFromLeft}
              className="text-5xl md:text-6xl font-medium tracking-tighter text-white mb-8"
            >
              About{" "}
              <span className="bg-gradient-to-br bg-clip-text text-transparent from-[#9281F7] to-[#9A54DC]">
                Me
              </span>
            </motion.h2>
            <motion.p
              variants={fadeFromLeft}
              className="text-base md:text-lg text-slateCustom font-medium tracking-tighter"
            >
              I am a recent graduate in Software Design and Development,
              passionate about creating innovative and functional technological
              solutions. With expertise in UI/UX design, web development, and
              backend programming, I specialize in developing high-performance
              applications with modern technologies that prioritize both
              usability and visual appeal.
            </motion.p>
          </ScrollReveal>

          <div className=""></div>
        </div>
      </div>
    </section>
  );
};

export default About;
