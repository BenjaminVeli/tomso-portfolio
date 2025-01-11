import React from "react";
import ScrollReveal from "../utils/ScrollReveal";

import { motion } from "framer-motion";
import { fadeUp } from "../utils/motionVariants";

const ContactForm = () => {
  return (
    <section
      id="contact"
      className="w-full min-h-screen flex justify-center items-center py-20 md:py-40 bg-white"
    >
      <div className="container">
        <ScrollReveal variant="container">
          <motion.h2
            variants={fadeUp}
            className="text-5xl md:text-6xl font-medium text-center tracking-tighter text-zaffreBlue mb-5"
          >
            Contact me!
          </motion.h2>
          <motion.h2
            variants={fadeUp}
            className="text-xl md:text-2xl text-violet-900  text-center mb-16 md:mb-40"
          >
            Do you have an exciting proposal or idea to share? Let’s make it
            happen!
          </motion.h2>

          <motion.div variants={fadeUp} className="container">
            <form action="" className="px-0 md:px-14">
              <div className="grid grid-cols-2 gap-x-20 gap-y-14 input-box">
                <div className="col-span-2 sm:col-span-1 input-field px-0 lg:px-14">
                  <input type="text" id="name" className="input" required />
                  <label htmlFor="name" className="text-zaffreBlue">Your Name</label>
                </div>
                <div className="col-span-2 sm:col-span-1 input-field px-0 lg:px-14">
                  <input type="email" id="email" className="input" required />
                  <label htmlFor="email" className="text-zaffreBlue">Email Adress</label>
                </div>
                <div className="col-span-2 px-0 lg:px-14 input-field">
                  <textarea id="message" className="input" required />
                  <label htmlFor="message" className="text-zaffreBlue">Your Message</label>
                </div>
                <div className="col-span-2 flex items-center justify-center">
                  <button className="text-sm bg:transparent hover:bg-zaffreBlue border border-zaffreBlue text-zaffreBlue font-medium uppercase hover:text-white transition-all duration-500 py-3 md:py-5 px-20 md:px-32">
                    Send Email
                  </button>
                </div>
              </div>
            </form>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactForm;
