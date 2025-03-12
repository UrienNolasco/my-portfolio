"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

const Tecnologias = () => {
  const tecnologias = [
    { nome: "React", arquivo: "react-svgrepo-com.svg" },
    { nome: "TypeScript", arquivo: "typescript-svgrepo-com.svg" },
    { nome: "Node.js", arquivo: "node-16-svgrepo-com.svg" },
    { nome: "Next.js", arquivo: "next-16-svgrepo-com.svg" },
    { nome: "Python", arquivo: "python-127-svgrepo-com.svg" },
    { nome: "Github", arquivo: "github-142-svgrepo-com.svg" },
    { nome: "PostGreSql", arquivo: "postgresql-svgrepo-com.svg" },
  ];

  return (
    <section
      id="tecnologias"
      className="w-full min-h-screen flex items-center justify-center p-4 md:p-8 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full m-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 dark:text-white text-center">
          Tecnologias
        </h2>

        {/* Container dos sliders */}
        <div
          className="relative w-full space-y-8
          before:content-[''] before:absolute before:inset-y-0 before:left-0 before:w-32 before:bg-gradient-to-r before:from-white dark:before:from-[#121212] before:to-transparent before:z-20
          after:content-[''] after:absolute after:inset-y-0 after:right-0 after:w-32 after:bg-gradient-to-l after:from-white dark:after:from-[#121212] after:to-transparent after:z-20"
        >
          {/* Primeiro slider (esquerda para direita) */}
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{
                x: ["-50%", "0%"],
              }}
              transition={{
                duration: 20,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {[...tecnologias, ...tecnologias].map((tech, index) => (
                <div
                  key={index}
                  className="min-w-fit px-4 flex flex-col items-center gap-4"
                >
                  <div className="h-24 w-24 flex items-center justify-center">
                    <img
                      src={tech.arquivo}
                      alt={tech.nome}
                      className="h-16 w-16 object-contain"
                    />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 text-sm">
                    {tech.nome}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Segundo slider (direita para esquerda) */}
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                duration: 20,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {[...tecnologias.reverse(), ...tecnologias.reverse()].map(
                (tech, index) => (
                  <div
                    key={index}
                    className="min-w-fit px-4 flex flex-col items-center gap-4"
                  >
                    <div className="h-24 w-24 flex items-center justify-center">
                      <img
                        src={tech.arquivo}
                        alt={tech.nome}
                        className="h-16 w-16 object-contain"
                      />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 text-sm">
                      {tech.nome}
                    </span>
                  </div>
                )
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tecnologias;
