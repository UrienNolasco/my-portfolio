// app/fonts.ts
import { Poiret_One } from "next/font/google";

export const poiretOne = Poiret_One({
  weight: "400", // Obrigatório para fontes Google
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poiret", // Opcional para usar CSS variables
});
