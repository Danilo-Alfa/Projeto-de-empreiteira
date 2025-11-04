import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import productDrill from "@/assets/product-drill.jpg";
import productCable from "@/assets/product-cable.jpg";
import productValve from "@/assets/product-valve.jpg";

const products = [
  {
    image: productCable,
    name: "Cabo Elétrico Amarelo",
    description: "Cabo flexível de alta qualidade",
  },
  {
    image: productValve,
    name: "Válvula Esfera",
    description: "Válvula em metal para água",
  },
  {
    image: productDrill,
    name: "Parafusadeira Profissional",
    description: "Ferramenta de alta performance",
  },
];

const Products = () => {
  return (
    <section id="produtos" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            PRODUTOS EM <span className="text-primary">DESTAQUE</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Materiais e ferramentas de qualidade para sua obra
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {products.map((product, index) => (
            <Card
              key={index}
              className="group overflow-hidden bg-card hover:shadow-xl transition-all duration-300 animate-slide-in-left"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{product.name}</h3>
                <p className="text-muted-foreground mb-4">{product.description}</p>
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

        <div className="text-center">
          <Link to="/produtos">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8"
            >
              VER TODOS OS PRODUTOS
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
