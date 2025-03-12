import Header from "@/components/header";
import Hero from "@/components/hero";
import Projetos from "@/components/projetos";

import Conhecimento from "@/components/conhecimento";
import Experiencias from "@/components/experiencias";

const Home = () => {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between">
        {/* Seção Hero */}
        <Hero />

        {/* Seção Hero */}
        <Conhecimento />

        {/* Seção Experiencias */}
        <Experiencias />

        {/* Seção Projetos */}
        <Projetos />
        {/* Seção Contato */}
        <section
          id="contato"
          className="w-full min-h-screen flex items-center justify-center p-4 md:p-8 bg-blue-50 dark:bg-gray-700"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 dark:text-white">
              Contato
            </h2>
            {/* Adicione seu formulário ou informações de contato aqui */}
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
