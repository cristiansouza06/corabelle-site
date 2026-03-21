import { Button } from "@/components/ui/button";
import { Heart, Sparkles, Users, TrendingUp, Shield, Zap, Menu, X } from "lucide-react";
import { useState } from "react";

/**
 * Design Philosophy: Luxury Editorial - Fully Responsive
 * - Fotografia cinematográfica como protagonista
 * - Tipografia elegante (Cormorant Garamond + Lato)
 * - Paleta de cores: Bege (#fff4e3), Ouro (#daa46e), Preto (#1a1a1a)
 * - Layout full-width com imagens grandes
 * - Animações sutis: parallax, fade-in, zoom
 * - Mobile-first responsive design
 */

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 sm:w-6 sm:h-6 fill-accent text-accent" />
            <span className="text-lg sm:text-xl font-cormorant font-bold text-accent">CORABELLE</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <a href="#colecoes" className="font-lato text-sm hover:text-accent transition">
              Coleções
            </a>
            <a href="#beneficios" className="font-lato text-sm hover:text-accent transition">
              Benefícios
            </a>
            <a href="#processo" className="font-lato text-sm hover:text-accent transition">
              Como Funciona
            </a>
            <Button 
              onClick={() => setShowForm(true)}
              className="bg-accent text-background hover:bg-accent/90 font-lato font-semibold text-sm"
            >
              Seja Revendedora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="container py-4 space-y-4">
              <a 
                href="#colecoes" 
                className="block font-lato text-sm hover:text-accent transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Coleções
              </a>
              <a 
                href="#beneficios" 
                className="block font-lato text-sm hover:text-accent transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Benefícios
              </a>
              <a 
                href="#processo" 
                className="block font-lato text-sm hover:text-accent transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Como Funciona
              </a>
              <Button 
                onClick={() => {
                  setShowForm(true);
                  setMobileMenuOpen(false);
                }}
                className="w-full bg-accent text-background hover:bg-accent/90 font-lato font-semibold text-sm"
              >
                Seja Revendedora
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663297170469/iGJCys9GWSHfXfJwavgARd/hero_banner-iTENUYK87LSyAnTDq6PxwR.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed"
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4 sm:px-6 py-20">
          <div className="mb-4 sm:mb-6 animate-fade-in">
            <Heart className="w-12 h-12 sm:w-16 sm:h-16 mx-auto fill-white text-white opacity-80 mb-4 sm:mb-6" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-cormorant font-bold mb-2 sm:mb-4 tracking-wider animate-fade-in" style={{animationDelay: "0.2s"}}>
            CORABELLE
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-cormorant font-light mb-4 sm:mb-8 animate-fade-in" style={{animationDelay: "0.4s"}}>
            Semijoias de Luxo
          </p>
          <p className="text-sm sm:text-base md:text-lg font-lato mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: "0.6s"}}>
            Torne-se uma revendedora autorizada e compartilhe a elegância e sofisticação das nossas peças com suas clientes.
          </p>
          <Button 
            onClick={() => setShowForm(true)}
            className="bg-accent text-background hover:bg-accent/90 font-lato font-semibold px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-lg animate-fade-in w-full sm:w-auto"
            style={{animationDelay: "0.8s"}}
          >
            Descubra a Oportunidade
          </Button>
        </div>
      </section>

      {/* Collections Section */}
      <section id="colecoes" className="py-12 sm:py-16 md:py-20 bg-card">
        <div className="container px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-cormorant font-semibold text-center mb-2 sm:mb-4">
            Nossas Coleções
          </h2>
          <p className="text-center font-lato text-sm sm:text-base text-muted-foreground mb-8 sm:mb-12 md:mb-16 max-w-2xl mx-auto">
            Cada peça é cuidadosamente selecionada para transmitir elegância, sofisticação e qualidade premium.
          </p>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
            {/* Image */}
            <div className="relative overflow-hidden rounded-lg order-2 md:order-1">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663297170469/iGJCys9GWSHfXfJwavgARd/product_showcase_1-fev4x3BLjviknBFWZy8zku.webp"
                alt="Coleção Corabelle"
                className="w-full h-48 sm:h-64 md:h-96 object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Content */}
            <div className="order-1 md:order-2">
              <h3 className="text-2xl sm:text-3xl font-cormorant font-semibold mb-4 sm:mb-6">
                Elegância em Cada Detalhe
              </h3>
              <p className="font-lato text-sm sm:text-base text-foreground mb-4 sm:mb-6 leading-relaxed">
                Nossa coleção exclusiva combina design minimalista com acabamento premium. Cada peça é produzida com materiais de alta qualidade, garantindo durabilidade e beleza duradoura.
              </p>
              <ul className="space-y-2 sm:space-y-3 font-lato text-sm sm:text-base">
                <li className="flex items-center gap-3">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
                  <span>Designs exclusivos e sofisticados</span>
                </li>
                <li className="flex items-center gap-3">
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
                  <span>Materiais premium e durável</span>
                </li>
                <li className="flex items-center gap-3">
                  <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
                  <span>Tendências globais de moda</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-cormorant font-semibold text-center mb-8 sm:mb-12 md:mb-16">
            Por Que Ser Revendedora Corabelle?
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              {
                icon: Users,
                title: "Comunidade Exclusiva",
                description: "Faça parte de uma rede de revendedoras autorizada com suporte dedicado e treinamento contínuo."
              },
              {
                icon: TrendingUp,
                title: "Margens Competitivas",
                description: "Lucre com preços de revenda estratégicos e descontos progressivos conforme o volume."
              },
              {
                icon: Zap,
                title: "Suporte Premium",
                description: "Acesso a catálogos, materiais de marketing e atendimento personalizado para suas clientes."
              },
              {
                icon: Sparkles,
                title: "Produtos Exclusivos",
                description: "Acesso a coleções limitadas e lançamentos antes do mercado geral."
              },
              {
                icon: Shield,
                title: "Qualidade Garantida",
                description: "Todos os produtos passam por rigoroso controle de qualidade e vêm com garantia."
              },
              {
                icon: Heart,
                title: "Marca Reconhecida",
                description: "Revenda uma marca de luxo consolidada com identidade visual forte e reconhecimento no mercado."
              }
            ].map((benefit, idx) => (
              <div key={idx} className="bg-card p-4 sm:p-6 md:p-8 rounded-lg border border-border hover:shadow-lg transition-shadow">
                <benefit.icon className="w-8 h-8 sm:w-10 sm:h-10 text-accent mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-cormorant font-semibold mb-2 sm:mb-3">
                  {benefit.title}
                </h3>
                <p className="font-lato text-xs sm:text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663297170469/iGJCys9GWSHfXfJwavgARd/reseller_opportunity-LZr3owGAQDH5EsBtGLcA2p.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed"
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white max-w-2xl mx-auto px-4 sm:px-6 py-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-cormorant font-bold mb-4 sm:mb-6 tracking-wider">
            Oportunidade de Negócio
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-lato mb-6 sm:mb-8 leading-relaxed">
            Transforme sua paixão por joias em um negócio lucrativo. Corabelle oferece tudo que você precisa para ter sucesso.
          </p>
          <Button 
            onClick={() => setShowForm(true)}
            className="bg-accent text-background hover:bg-accent/90 font-lato font-semibold px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-lg w-full sm:w-auto"
          >
            Começar Agora
          </Button>
        </div>
      </section>

      {/* Process Section */}
      <section id="processo" className="py-12 sm:py-16 md:py-20 bg-card">
        <div className="container px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-cormorant font-semibold text-center mb-8 sm:mb-12 md:mb-16">
            Como Funciona
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {[
              { step: "01", title: "Inscrição", desc: "Preencha o formulário com seus dados e interesse." },
              { step: "02", title: "Análise", desc: "Nossa equipe avalia seu perfil e potencial." },
              { step: "03", title: "Aprovação", desc: "Receba orientações e acesso ao catálogo exclusivo." },
              { step: "04", title: "Venda", desc: "Comece a vender e lucrar com as peças Corabelle." }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-accent text-background rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 font-cormorant text-lg sm:text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg sm:text-xl font-cormorant font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="font-lato text-xs sm:text-sm text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-cormorant font-semibold mb-4 sm:mb-6">
            Pronta para Começar?
          </h2>
          <p className="text-sm sm:text-base md:text-lg font-lato text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
            Junte-se à comunidade de revendedoras Corabelle e descubra uma oportunidade de negócio única.
          </p>
          <Button 
            onClick={() => setShowForm(true)}
            className="bg-accent text-background hover:bg-accent/90 font-lato font-semibold px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-lg w-full sm:w-auto"
          >
            Inscrever-se Agora
          </Button>
        </div>
      </section>

      {/* Contact Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-background rounded-lg max-w-md w-full p-6 sm:p-8 border border-border max-h-[90vh] overflow-y-auto">
            <h3 className="text-2xl font-cormorant font-semibold mb-6">
              Inscrição de Revendedora
            </h3>
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Seu Nome" 
                className="w-full px-4 py-2 border border-border rounded bg-card font-lato text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full px-4 py-2 border border-border rounded bg-card font-lato text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <input 
                type="tel" 
                placeholder="Telefone" 
                className="w-full px-4 py-2 border border-border rounded bg-card font-lato text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <textarea 
                placeholder="Conte-nos sobre seu interesse" 
                rows={4}
                className="w-full px-4 py-2 border border-border rounded bg-card font-lato text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button 
                  type="submit"
                  className="flex-1 bg-accent text-background hover:bg-accent/90 font-lato font-semibold text-sm"
                >
                  Enviar
                </Button>
                <Button 
                  type="button"
                  onClick={() => setShowForm(false)}
                  variant="outline"
                  className="flex-1 font-lato text-sm"
                >
                  Cancelar
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8 sm:py-12">
        <div className="container px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-5 h-5 sm:w-6 sm:h-6 fill-accent text-accent" />
                <span className="font-cormorant font-bold text-accent text-lg">CORABELLE</span>
              </div>
              <p className="font-lato text-xs sm:text-sm text-muted-foreground">
                Semijoias de luxo para mulheres sofisticadas.
              </p>
            </div>
            <div>
              <h4 className="font-cormorant font-semibold mb-4 text-sm sm:text-base">Links</h4>
              <ul className="space-y-2 font-lato text-xs sm:text-sm">
                <li><a href="#colecoes" className="text-muted-foreground hover:text-accent">Coleções</a></li>
                <li><a href="#beneficios" className="text-muted-foreground hover:text-accent">Benefícios</a></li>
                <li><a href="#processo" className="text-muted-foreground hover:text-accent">Processo</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-cormorant font-semibold mb-4 text-sm sm:text-base">Contato</h4>
              <p className="font-lato text-xs sm:text-sm text-muted-foreground">
                Email: contato@corabelle.com.br<br />
                Telefone: (11) 9999-9999
              </p>
            </div>
            <div>
              <h4 className="font-cormorant font-semibold mb-4 text-sm sm:text-base">Siga-nos</h4>
              <div className="flex gap-4">
                <a href="#" className="text-accent hover:text-accent/80 font-lato text-xs sm:text-sm">Instagram</a>
                <a href="#" className="text-accent hover:text-accent/80 font-lato text-xs sm:text-sm">Facebook</a>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-6 sm:pt-8 text-center font-lato text-xs sm:text-sm text-muted-foreground">
            <p>&copy; 2026 Corabelle Semijoias. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
