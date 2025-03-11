"use client"; // Adicione isso para usar Framer Motion

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      id="hero"
      className="w-full min-h-screen flex items-center justify-center p-4 md:p-8 bg-gradient-to-b text-black"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Text Container */}
        <motion.div
          className="flex-1 flex flex-col gap-6 md:gap-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="font-poiret !important">Olá, me chamo </span>
            <span>Urien Nolasco</span>
          </h1>

          <p className="md:text-xl leading-relaxed max-w-2xl">
            Ingressei na faculdade de engenharia de software em 2023/1, desde
            sempre apaixonado por tecnologia, convivo com a área da programação
            desde pequeno. Hoje sou desenvolvedor ABAP para uma consultoria SAP,
            mas nunca deixei de estudar e brincar com o mundo do full stack.
            Apesar de dizer que sou dev ABAP, prefiro dizer que sou só dev - a
            linguagem que utilizo é somente um meio para expressar as minhas
            ideias e criatividade.
          </p>
        </motion.div>

        {/* Image Container */}
        <motion.div
          className="flex-1 flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-50 h-64 md:w-90 md:h-120 overflow-hidden border-8 border-solid border-black shadow-xl">
            <img
              src="/foto-perfil.jpeg"
              alt="Foto do Urien Nolasco"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
