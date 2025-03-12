const Experiencias = () => {
    const experiencias = [
        {empresa: "Teia Connect", logo: "Logo-teia.jpg", texto: "", data: "2024 - Atual"}
    ]

  return (
    <section
      id="Experiencias"
      className="w-full min-h-screen flex flex-col items-center bg-black p-4 md:p-8"
    >
      {/* Contêiner do título fixado no topo */}
      <div className="w-full text-center py-9 border-b border-b-neutral-700">
        <h1 className="text-white text-6xl font-bold uppercase">
          Minhas Experiências
        </h1>
      </div>

      {/* Conteúdo principal (adicione mais elementos aqui) */}
      <div className="w-full flex-grow flex items-center justify-center">
        
      </div>
    </section>
  );
};

export default Experiencias;
