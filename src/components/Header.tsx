import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    // If not on home page, navigate to home first
    if (location.pathname !== "/") {
      navigate("/");
      // Wait for navigation and then scroll
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-secondary shadow-lg" : "bg-secondary/95"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="text-primary font-bold text-2xl md:text-3xl">
              L.R
            </div>
            <div className="text-primary-foreground font-bold text-xl md:text-2xl">
              REESTRUTURAÇÃO
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-primary-foreground hover:text-primary transition-colors font-medium"
            >
              INÍCIO
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-primary-foreground hover:text-primary transition-colors font-medium"
            >
              SERVIÇOS
            </button>
            <button
              onClick={() => scrollToSection("produtos")}
              className="text-primary-foreground hover:text-primary transition-colors font-medium"
            >
              PRODUTOS
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-primary-foreground hover:text-primary transition-colors font-medium"
            >
              SOBRE NÓS
            </button>
            <Button
              onClick={() => scrollToSection("contato")}
              variant="default"
              className="bg-primary hover:bg-primary/90"
            >
              Contato
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-primary-foreground"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-primary-foreground hover:text-primary transition-colors font-medium text-left"
              >
                INÍCIO
              </button>
              <button
                onClick={() => scrollToSection("servicos")}
                className="text-primary-foreground hover:text-primary transition-colors font-medium text-left"
              >
                SERVIÇOS
              </button>
              <button
                onClick={() => scrollToSection("produtos")}
                className="text-primary-foreground hover:text-primary transition-colors font-medium text-left"
              >
                PRODUTOS
              </button>
              <button
                onClick={() => scrollToSection("sobre")}
                className="text-primary-foreground hover:text-primary transition-colors font-medium text-left"
              >
                SOBRE NÓS
              </button>
              <Button
                onClick={() => scrollToSection("contato")}
                variant="default"
                className="bg-primary hover:bg-primary/90 w-full"
              >
                Contato
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
