import { Award, Users, Clock, CheckCircle } from "lucide-react";
import { Card } from "./ui/card";

const stats = [
  { icon: Award, value: "15+", label: "Anos de Experiência" },
  { icon: Users, value: "500+", label: "Clientes Satisfeitos" },
  { icon: Clock, value: "1000+", label: "Projetos Concluídos" },
  { icon: CheckCircle, value: "100%", label: "Qualidade Garantida" },
];

const About = () => {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-in-left">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              SOBRE A <span className="text-primary">EMPRESA</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              A L.R Reestruturação é uma empresa especializada em construção civil
              e reformas, com forte presença no setor. Nossa atuação abrange desde
              projetos residenciais até grandes empreendimentos comerciais e
              industriais.
            </p>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Com uma equipe altamente qualificada e comprometida, oferecemos
              soluções completas em elétrica, hidráulica, estruturas metálicas,
              pintura e construção civil. Garantimos excelência em cada detalhe,
              desde a base até o acabamento final.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Nossa missão é transformar sonhos em realidade, entregando obras que
              superam expectativas com qualidade, pontualidade e custos justos.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 md:gap-6 animate-slide-in-right">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card
                  key={index}
                  className="p-6 md:p-8 text-center bg-card hover:bg-primary group transition-all duration-300 cursor-pointer"
                >
                  <Icon className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-4 text-primary group-hover:text-primary-foreground transition-colors" />
                  <div className="text-3xl md:text-4xl font-bold text-primary group-hover:text-primary-foreground mb-2 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground group-hover:text-primary-foreground transition-colors">
                    {stat.label}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
