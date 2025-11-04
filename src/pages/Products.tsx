import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import productCableYellow from "@/assets/product-cable-yellow.jpg";
import productBallValve from "@/assets/product-ball-valve.jpg";
import productScrewdriver from "@/assets/product-screwdriver.jpg";
import productCopperWire from "@/assets/product-copper-wire.jpg";
import productPressureValve from "@/assets/product-pressure-valve.jpg";
import productImpactDrill from "@/assets/product-impact-drill.jpg";
import productRigidWire from "@/assets/product-rigid-wire.jpg";
import productCheckValve from "@/assets/product-check-valve.jpg";
import productRotaryHammer from "@/assets/product-rotary-hammer.jpg";
import productPPCable from "@/assets/product-pp-cable.jpg";
import productGardenFaucet from "@/assets/product-garden-faucet.jpg";
import productAngleGrinder from "@/assets/product-angle-grinder.jpg";

const allProducts = [
  {
    image: productCableYellow,
    name: "Cabo Elétrico Amarelo",
    description: "Cabo flexível de alta qualidade para instalações elétricas",
    category: "Elétrica",
  },
  {
    image: productBallValve,
    name: "Válvula Esfera",
    description: "Válvula em metal para água, alta durabilidade",
    category: "Hidráulica",
  },
  {
    image: productScrewdriver,
    name: "Parafusadeira Profissional",
    description: "Ferramenta de alta performance para trabalhos pesados",
    category: "Ferramentas",
  },
  {
    image: productCopperWire,
    name: "Cabo de Cobre 2.5mm",
    description: "Cabo elétrico flexível para circuitos residenciais",
    category: "Elétrica",
  },
  {
    image: productPressureValve,
    name: "Registro de Pressão",
    description: "Registro metálico para controle de fluxo de água",
    category: "Hidráulica",
  },
  {
    image: productImpactDrill,
    name: "Furadeira de Impacto",
    description: "Potente furadeira para alvenaria e concreto",
    category: "Ferramentas",
  },
  {
    image: productRigidWire,
    name: "Fio Rígido 1.5mm",
    description: "Fio condutor para instalações fixas",
    category: "Elétrica",
  },
  {
    image: productCheckValve,
    name: "Válvula de Retenção",
    description: "Impede retorno de fluxo em tubulações",
    category: "Hidráulica",
  },
  {
    image: productRotaryHammer,
    name: "Martelete Rotativo",
    description: "Ideal para perfurações em concreto armado",
    category: "Ferramentas",
  },
  {
    image: productPPCable,
    name: "Cabo PP 3x2.5mm",
    description: "Cabo paralelo para uso externo",
    category: "Elétrica",
  },
  {
    image: productGardenFaucet,
    name: "Torneira de Jardim",
    description: "Torneira robusta para áreas externas",
    category: "Hidráulica",
  },
  {
    image: productAngleGrinder,
    name: "Lixadeira Angular",
    description: "Perfeita para acabamentos e cortes",
    category: "Ferramentas",
  },
];

const ProductsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary via-primary/90 to-destructive text-primary-foreground py-16 md:py-24 overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,transparent,black)]" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-destructive/20 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
              <Link 
                to="/" 
                className="inline-flex items-center gap-2 text-primary-foreground hover:text-accent transition-colors group w-fit"
              >
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                <span className="font-medium">Voltar</span>
              </Link>
              <Link to="/#contato">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-background text-foreground hover:bg-background/90 shadow-lg"
                >
                  Solicitar Orçamento
                </Button>
              </Link>
            </div>
            
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
                Catálogo de <span className="text-accent">Produtos</span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-primary-foreground/90 leading-relaxed animate-fade-in">
                Materiais e ferramentas de qualidade profissional para sua construção. 
                Produtos selecionados para garantir durabilidade e performance.
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {allProducts.map((product, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden bg-card hover:shadow-xl transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full mb-3">
                      {product.category}
                    </span>
                    <h3 className="font-bold text-xl mb-2 text-foreground">{product.name}</h3>
                    <p className="text-muted-foreground mb-4 text-sm">{product.description}</p>
                    <Button
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      Consultar Preço
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Não encontrou o que procura?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Entre em contato conosco para consultar disponibilidade de outros produtos
            </p>
            <Link to="/#contato">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8"
              >
                FALE CONOSCO
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProductsPage;
