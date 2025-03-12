import { Avatar, AvatarImage } from "./ui/avatar";
import { Card, CardContent } from "./ui/card";

const Experiencias = () => {
  const experiencias = [
    {
      empresa: "Teia Connect",
      logo: "Logo-teia.jpg",
      texto:
        "lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elitlorem ipsum dolor sit amet consectetur adipiscing elitlorem ipsum dolor sit amet consectetur adipiscing elitlorem ipsum dolor sit amet consectetur adipiscing elitlorem ipsum dolor sit amet consectetur adipiscing elit",
      data: "2024 - Atual",
    },
    {
      empresa: "Ages 1 - EASY CHOOSE",
      logo: "Logo-ages1.svg",
      texto:
        "lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elitlorem ipsum dolor sit amet consectetur adipiscing elitlorem ipsum dolor sit amet consectetur adipiscing elitlorem ipsum dolor sit amet consectetur adipiscing elitlorem ipsum dolor sit amet consectetur adipiscing elitlorem ipsum dolor sit amet consectetur adipiscing elitlorem ipsum dolor sit amet consectetur adipiscing elit",
      data: "Semestre de 2024/1",
    },
    {
      empresa: "Ages 2 - EZENPLO",
      logo: "Logo-ages2.svg",
      texto:
        "lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elitlorem ipsum dolor sit amet consectetur adipiscing elitlorem ipsum dolor sit amet consectetur adipiscing elitlorem ipsum dolor sit amet consectetur adipiscing elitlorem ipsum dolor sit amet consectetur adipiscing elit",
      data: "Semestre de 2024/2",
    },
  ];

  return (
    <section
      id="Experiencias"
      className="w-full min-h-screen flex flex-col items-center bg-black p-4 md:p-8"
    >
      {/* Contêiner do título fixado no topo */}
      <div className="w-full text-center py-9 border-b border-b-neutral-700">
        <h1 className="text-white text-6xl font-bold uppercase">
          Minhas{" "}
          <span style={{ WebkitTextStroke: "2px white", color: "black" }}>
            Experiências
          </span>
        </h1>
      </div>

      {/* Listagem das experiências */}
      <div className="w-full flex flex-col items-center gap-6 mt-6">
        {experiencias.map((exp, index) => (
          <Card
            key={index}
            className="bg-black border border-neutral-700 w-full p-4"
          >
            <CardContent className="flex items-start gap-4 w-full ">
              <Avatar className="w-12 h-12 ml-2 object-fill">
                <AvatarImage src={`/${exp.logo}`} alt={exp.empresa} />
              </Avatar>
              <div className="flex-1">
                <div className="flex justify-between items-center w-full">
                  <h2 className="text-white text-xl font-semibold">
                    {exp.empresa}
                  </h2>
                  <span className="text-neutral-400 text-sm">{exp.data}</span>
                </div>
                <p className="text-neutral-300 mt-2 text-sm">{exp.texto}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Experiencias;
