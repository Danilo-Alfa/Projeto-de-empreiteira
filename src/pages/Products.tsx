import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import productDrill from "@/assets/product-drill.jpg";
import productCable from "@/assets/product-cable.jpg";
import productValve from "@/assets/product-valve.jpg";

const allProducts = [
  {
    image: productCable,
    name: "Cabo Elétrico Amarelo",
    description: "Cabo flexível de alta qualidade para instalações elétricas",
    category: "Elétrica",
  },
  {
    image: productValve,
    name: "Válvula Esfera",
    description: "Válvula em metal para água, alta durabilidade",
    category: "Hidráulica",
  },
  {
    image: productDrill,
    name: "Parafusadeira Profissional",
    description: "Ferramenta de alta performance para trabalhos pesados",
    category: "Ferramentas",
  },
  {
    image: productCable,
    name: "Cabo de Cobre 2.5mm",
    description: "Cabo elétrico flexível para circuitos residenciais",
    category: "Elétrica",
  },
  {
    image: productValve,
    name: "Registro de Pressão",
    description: "Registro metálico para controle de fluxo de água",
    category: "Hidráulica",
  },
  {
    image: productDrill,
    name: "Furadeira de Impacto",
    description: "Potente furadeira para alvenaria e concreto",
    category: "Ferramentas",
  },
  {
    image: productCable,
    name: "Fio Rígido 1.5mm",
    description: "Fio condutor para instalações fixas",
    category: "Elétrica",
  },
  {
    image: productValve,
    name: "Válvula de Retenção",
    description: "Impede retorno de fluxo em tubulações",
    category: "Hidráulica",
  },
  {
    image: productDrill,
    name: "Martelete Rotativo",
    description: "Ideal para perfurações em concreto armado",
    category: "Ferramentas",
  },
  {
    image: productCable,
    name: "Cabo PP 3x2.5mm",
    description: "Cabo paralelo para uso externo",
    category: "Elétrica",
  },
  {
    image: productValve,
    name: "Torneira de Jardim",
    description: "Torneira robusta para áreas externas",
    category: "Hidráulica",
  },
  {
    image: productDrill,
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
        <section className="bg-gradient-to-br from-primary to-destructive text-primary-foreground py-12 md:py-16">
          <div className="container mx-auto px-4">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors"
            >
              <ArrowLeft size={20} />
              Voltar
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
              Catálogo de Produtos
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl animate-fade-in">
              Materiais e ferramentas de qualidade para sua construção
            </p>
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
