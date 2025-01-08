import { motion } from "framer-motion";
import ScrollReveal from "../utils/ScrollReveal";
import { fadeFromLeft } from "../utils/motionVariants";

import { techStack } from "../utils/data";

const About = () => {
  return (
    <section
      id="about"
      className="w-full flex justify-center items-center min-h-screen bg-customSection py-20 md:py-40"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
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

          <ScrollReveal className="flex flex-col items-center">
            <div className="bg-LightSky border border-blue-950 hover:border-blue-900 rounded-2xl px-4 sm:px-11 xl:px-20 py-4 sm:py-8 xl:py-12 duration-500 transition-all">
              {Object.entries(techStack).map(([category, items]) => (
                <div key={category} className="my-2">
                  <h2 className="text-xl font-medium text-white mb-4">
                    {category}
                  </h2>
                  <div className="flex gap-4 sm:gap-6 lg:gap-8">
                    {items.map(({ id, name, icon: Icon }) => (
                      <div
                        key={id}
                        className="duration-500 transition-all text-zinc-400 hover:text-customButton cursor-pointer"
                      >
                        <div className="flex h-12 w-[3.75rem] sm:h-14 sm:w-[4.30rem] items-center justify-center rounded-2xl border border-slateCustomA hover:border-customButton">
                          <Icon className="text-lg sm:text-2xl" />
                        </div>
                        <p className="mt-2 text-center">{name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default About;
