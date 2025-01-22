import React, { useRef, useState, useEffect } from "react";
import ScrollReveal from "../utils/ScrollReveal";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { fadeUp } from "../utils/motionVariants";

const ContactForm = ({
  emailjsServiceId,
  emailjsTemplateId,
  emailjsPublicKey,
}) => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  // Initialize emailjs with your public key
  useEffect(() => {
    if (emailjsPublicKey) {
      emailjs.init(emailjsPublicKey);
    }
  }, [emailjsPublicKey]);

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        emailjsServiceId,
        emailjsTemplateId,
        {
          from_name: form.name,
          to_name: "Tomso",
          from_email: form.email,
          message: form.message,
        },
        emailjsPublicKey
      );
      setLoading(false);
      alert("Your message has been sent!");
      window.location.reload();
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="w-full flex justify-center items-center min-h-screen"
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
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="px-0 md:px-14"
            >
              <div className="grid grid-cols-2 gap-x-20 gap-y-14 input-box">
                <div className="col-span-2 sm:col-span-1 input-field px-0 lg:px-14">
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="input"
                    required
                  />
                  <label htmlFor="name" className="text-zaffreBlue">
                    Your Name
                  </label>
                </div>
                <div className="col-span-2 sm:col-span-1 input-field px-0 lg:px-14">
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="input"
                    required
                  />
                  <label htmlFor="email" className="text-zaffreBlue">
                    Email Adress
                  </label>
                </div>
                <div className="col-span-2 px-0 lg:px-14 input-field">
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    className="input"
                    required
                  />
                  <label htmlFor="message" className="text-zaffreBlue">
                    Your Message
                  </label>
                </div>
                <div className="col-span-2 flex items-center justify-center">
                  <button
                    className="text-sm bg:transparent hover:bg-zaffreBlue border border-zaffreBlue text-zaffreBlue font-medium uppercase hover:text-white transition-all duration-500 py-3 md:py-5 px-20 md:px-32"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send Message"}
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
