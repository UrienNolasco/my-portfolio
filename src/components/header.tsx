"use client";

import { FileText } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { motion } from "framer-motion";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        ease: [0.4, 0, 0.2, 1],
        delay: 0.3,
      }}
    >
      <Card className="fixed top-0 w-full rounded-none bg-black border-0 z-50">
        <CardContent className="p-1 flex items-center justify-between">
          {/* Menu alinhado à esquerda com espaçamento */}
          <nav className="flex space-x-10 text-white pl-6">
            {["hero", "tecnologias", "projetos", "contato"].map((section) => (
              <motion.button
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-sm font-medium capitalize"
              >
                {section === "hero" ? "Início" : section}
              </motion.button>
            ))}
          </nav>

          {/* Botão "curriculum" na direita com espaçamento */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-sm font-medium capitalize flex items-center gap-2 text-white pr-6"
          >
            <FileText className="w-5 h-5" />
            curriculum
          </motion.button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Header;
