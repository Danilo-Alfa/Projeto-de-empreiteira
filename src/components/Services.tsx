import { Zap, Droplet, Hammer, Building2, Paintbrush } from "lucide-react";
import { Card } from "./ui/card";

const services = [
  {
    icon: Zap,
    title: "ELÉTRICA",
    description: "Instalações elétricas residenciais e comerciais",
  },
  {
    icon: Droplet,
    title: "HIDRÁULICA",
    description: "Sistemas hidráulicos e sanitários completos",
  },
  {
    icon: Hammer,
    title: "CONSTRUÇÃO CIVIL",
    description: "Obras completas do alicerce ao acabamento",
  },
  {
    icon: Building2,
    title: "ESTRUTURAS METÁLICAS",
    description: "Projetos e montagem de estruturas metálicas",
  },
  {
    icon: Paintbrush,
    title: "PINTURA",
    description: "Pintura residencial e comercial de alta qualidade",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            NOSSOS <span className="text-primary">SERVIÇOS</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Soluções completas para todas as etapas da sua obra
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden bg-primary hover:bg-primary/90 transition-all duration-300 p-6 md:p-8 cursor-pointer border-0 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-primary-foreground/20 rounded-lg group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-primary-foreground font-bold text-lg md:text-xl mb-2">
                      {service.title}
                    </h3>
                    <p className="text-primary-foreground/90 text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
