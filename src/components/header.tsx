"use client";

import { Download } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState, useRef } from "react";
import Image from "next/image";

const Header = () => {
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = lastScrollY.current;
    const diff = latest - previous;

    if (latest > 100) {
      if (diff > 0) {
        // Rolando para baixo
        setIsHidden(true);
      } else if (diff < -5) {
        // Rolando para cima com uma pequena zona morta
        setIsHidden(false);
      }
    } else {
      // No topo da página
      setIsHidden(false);
    }

    lastScrollY.current = latest;
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.div
      initial={{ y: 0, opacity: 1 }}
      animate={{
        y: isHidden ? -100 : 0,
        opacity: isHidden ? 0 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 25,
        mass: 0.5,
      }}
      className="fixed top-0 w-full z-50 backdrop-blur-md"
    >
      <Card className="rounded-none bg-black/90 border-0 p-3">
        <CardContent className="p-1 flex items-center justify-between pr-10">
          <div className="flex items-center ml-5">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                alt="logo"
                src="/cube-five-svgrepo-com.svg"
                width={50}
                height={50}
                className="mr-4" // adiciona um espaçamento entre a imagem e a nav
              />
            </motion.div>

            <nav className="flex space-x-10 text-white ml-24">
              {["hero", "conhecimento", "projetos", "contato"].map(
                (section) => (
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="text-sm font-medium capitalize"
                  >
                    {section === "hero" ? "Início" : section}
                  </motion.button>
                )
              )}
            </nav>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-sm font-medium capitalize flex items-center gap-2 bg-white text-black px-2 rounded-full py-2"
          >
            CV
            <Download className="w-5 h-5" />
          </motion.button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Header;
