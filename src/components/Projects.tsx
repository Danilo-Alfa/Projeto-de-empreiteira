import { Card } from "./ui/card";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    image: project1,
    title: "Residencial Moderno",
    category: "Construção Residencial",
    description: "Projeto completo de residência com 3 pavimentos",
  },
  {
    image: project2,
    title: "Edifício Comercial",
    category: "Reforma Comercial",
    description: "Renovação completa de fachada e interiores",
  },
  {
    image: project3,
    title: "Galpão Industrial",
    category: "Estrutura Metálica",
    description: "Construção de galpão industrial de 2000m²",
  },
];

const Projects = () => {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            PROJETOS <span className="text-primary">REALIZADOS</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Conheça alguns dos nossos trabalhos concluídos com excelência
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden bg-card hover:shadow-2xl transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-accent text-sm font-semibold mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-primary-foreground font-bold text-xl mb-2">
                    {project.title}
                  </h3>
                  <p className="text-primary-foreground/90 text-sm">
                    {project.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
