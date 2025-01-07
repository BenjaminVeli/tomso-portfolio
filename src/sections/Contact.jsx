import React from "react";
import Setup from "../images/Setup.webp";
import ScrollReveal from "../utils/ScrollReveal";

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-24 bg-customSection">
      <div className="container">
        <ScrollReveal variant="text">
          <h2 className="text-5xl md:text-6xl font-medium text-center tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_right,white,white,#aaaaaa)] text-transparent bg-clip-text mb-20">
            Contact
          </h2>
        </ScrollReveal>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-center  ">
          <ScrollReveal variant="divUp" className="flex justify-center">
            <img
              src={Setup.src}
              className="w-11/12 h-[580px] object-cover rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer"
              alt="Image Setup"
            />
          </ScrollReveal>

          <ScrollReveal variant="divUp">
            <div
              id="form-container"
              class="w-11/12 border border-dark-gray-custom bg-light-gray-custom rounded-lg mx-auto shadow-lg"
            >
              <form method="POST" class="space-y-6 px-8 py-10">
                <div class="grid grid-cols-1 gap-7">
                  <div>
                    <label
                      for="name"
                      class="block text-sm font-semibold text-white"
                    >
                      Nombre y Apellido <span class="text-red-500">:</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      class="mt-3 block w-full shadow-sm sm:text-sm  rounded-md py-2 px-5 bg-customInput text-colorInput focus:outline-none min-h-12"
                    />
                  </div>
                  <div>
                    <label
                      for="phone"
                      class="block text-sm font-semibold text-white"
                    >
                      Teléfono <span class="text-red-500">:</span>
                    </label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      required
                      class="mt-3 block w-full shadow-sm sm:text-sm  rounded-md py-2 px-5 bg-customInput text-colorInput focus:outline-none min-h-12"
                    />
                  </div>
                  <div>
                    <label
                      for="email"
                      class="block text-sm font-semibold text-white"
                    >
                      Correo electrónico <span class="text-red-500">:</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      class="mt-3 block w-full shadow-sm sm:text-sm  rounded-md py-2 px-5 bg-customInput text-colorInput focus:outline-none min-h-12"
                    />
                  </div>
                </div>
                <div>
                  <label
                    for="message"
                    class="block text-sm font-semibold text-white"
                  >
                    Mensaje <span class="text-red-500">:</span>
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows="3"
                    required
                    class="mt-3 block w-full shadow-sm sm:text-sm  rounded-md py-2 px-5 bg-customInput text-colorInput focus:outline-none min-h-12"
                  ></textarea>
                </div>
                <div class="flex justify-center items-center space-x-4">
                  <button
                    type="submit"
                    class="font-medium bg-zinc-950 hover:bg-customButton border rounded-md border-customButton py-2.5 px-6 transition-all duration-300 text-white hover:text-black text-center"
                  >
                    <span>Enviar</span>
                  </button>

                  <div id="loading-spinner" class="hidden">
                    <div class="spinner"></div>
                  </div>
                </div>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
