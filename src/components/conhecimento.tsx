"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "./ui/card";

const Conhecimento = () => {
  const tecnologias = [
    { nome: "React", arquivo: "react-svgrepo-com.svg" },
    { nome: "TypeScript", arquivo: "typescript-svgrepo-com.svg" },
    { nome: "Node.js", arquivo: "node-16-svgrepo-com.svg" },
    { nome: "Next.js", arquivo: "next-16-svgrepo-com.svg" },
    { nome: "Python", arquivo: "python-127-svgrepo-com.svg" },
    { nome: "Github", arquivo: "github-142-svgrepo-com.svg" },
    { nome: "PostgreSql", arquivo: "postgresql-svgrepo-com.svg" },
    { nome: "SAP", arquivo: "sap-svgrepo-com.svg" },
    { nome: "Java", arquivo: "java-svgrepo-com.svg" },
  ];

  const ref = useRef(null);

  const textRef = useRef(null);
  const slider1Ref = useRef(null);
  const slider2Ref = useRef(null);

  const isTextRefInView = useInView(textRef, {
    margin: "-70px 0px",
  });
  const isSlider1InView = useInView(slider1Ref, {
    margin: "-100px 0px",
  });
  const isSlider2InView = useInView(slider2Ref, {
    margin: "-100px 0px",
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="conhecimento"
      className="w-full min-h-screen flex items-center justify-center p-4 md:p-8 overflow-hidden"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          ref={textRef}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isTextRefInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
          className="text-3xl md:text-5xl font-bold mb-10 text-black dark:text-white text-center uppercase "
        >
          Conhecimentos Técnicos
        </motion.h2>

        <div
          className="relative w-full space-y-8 
          before:content-[''] before:absolute before:inset-y-0 before:left-0 before:w-32 before:bg-gradient-to-r before:from-white dark:before:from-[#121212] before:to-transparent before:z-20
          after:content-[''] after:absolute after:inset-y-0 after:right-0 after:w-32 after:bg-gradient-to-l after:from-white dark:after:from-[#121212] after:to-transparent after:z-20"
        >
          {/* Primeiro slider com Cards */}
          <motion.div
            ref={slider1Ref}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isSlider1InView ? { opacity: 1, scale: 1 } : {}}
            transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
          >
            <div className="overflow-hidden py-4">
              <motion.div
                className="flex gap-6"
                animate={{ x: ["-100%", "0%"] }}
                transition={{ duration: 30, ease: "linear", repeat: Infinity }}
              >
                {[
                  ...tecnologias,
                  ...tecnologias,
                  ...tecnologias,
                  ...tecnologias,
                ].map((tech, index) => (
                  <motion.div
                    key={index}
                    className="min-w-[170px]"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isSlider1InView ? "visible" : "hidden"}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow border-2 border-black">
                      {" "}
                      {/* Card wrapper */}
                      <CardContent className="p-6 flex flex-col items-center gap-4">
                        {" "}
                        {/* Espaçamento interno */}
                        <motion.div
                          className="h-24 w-24 flex items-center justify-center"
                          variants={itemVariants}
                        >
                          <img
                            src={`/${tech.arquivo}`}
                            alt={tech.nome}
                            className="h-16 w-16 object-contain hover:scale-110 transition-transform"
                          />
                        </motion.div>
                        <motion.span
                          className="text-black text-sm font-medium text-center"
                          variants={itemVariants}
                        >
                          {tech.nome}
                        </motion.span>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Segundo slider com Cards */}
          <motion.div
            ref={slider2Ref}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isSlider2InView ? { opacity: 1, scale: 1 } : {}}
            transition={{ type: "spring", stiffness: 100, delay: 0.6 }}
          >
            <div className="overflow-hidden py-4">
              <motion.div
                className="flex gap-6" // Espaçamento consistente
                animate={{ x: ["0%", "-100%"] }}
                transition={{ duration: 30, ease: "linear", repeat: Infinity }}
              >
                {[
                  ...tecnologias,
                  ...tecnologias,
                  ...tecnologias,
                  ...tecnologias,
                ]
                  .reverse()
                  .map((tech, index) => (
                    <motion.div
                      key={index}
                      className="min-w-[170px] "
                      variants={containerVariants}
                      initial="hidden"
                      animate={isSlider2InView ? "visible" : "hidden"}
                    >
                      <Card className="h-full hover:shadow-lg transition-shadow border-2 border-black">
                        <CardContent className="p-6 flex flex-col items-center gap-4">
                          <motion.div
                            className="h-24 w-24 flex items-center justify-center"
                            variants={itemVariants}
                          >
                            <img
                              src={`/${tech.arquivo}`}
                              alt={tech.nome}
                              className="h-16 w-16 object-contain hover:scale-110 transition-transform"
                            />
                          </motion.div>
                          <motion.span
                            className="text-black text-sm font-medium text-center"
                            variants={itemVariants}
                          >
                            {tech.nome}
                          </motion.span>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Conhecimento;
