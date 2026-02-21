
import { juanDevStudioContent as content } from "@/app/content/juanDevStudioContent";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Check, Rocket, Zap, ShieldCheck, Star, ArrowRight, Mail } from "lucide-react";
import BookingSection from "@/components/BookingSection";

export default function Home() {
  const getWppLink = (message: string) => {
    return `https://wa.me/${content.contact.phone}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar sutil */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-headline font-extrabold text-xl tracking-tighter">
            JUAN<span className="text-primary">DEV</span> STUDIO
          </span>
          <Button asChild variant="outline" className="flex border-primary/20 hover:border-primary text-xs md:text-sm px-3 md:px-4 h-9 md:h-10">
            <a href="#agenda">
              Agendar Llamada
            </a>
          </Button>
        </div>
      </header>

      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-primary/10 blur-[120px] rounded-full -z-10" />
          <div className="container mx-auto px-6 text-center">
            <Badge variant="outline" className="mb-6 border-primary/30 text-primary px-4 py-1">
              Disponible para proyectos VIP
            </Badge>
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold leading-tight mb-8 tracking-tight max-w-4xl mx-auto">
              {content.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              {content.hero.subtitle}
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="h-14 px-8 text-lg font-bold gold-glow group">
                <a href="#agenda">
                  {content.hero.cta}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button asChild size="lg" variant="ghost" className="h-14 px-8 text-lg transition-all duration-200 active:scale-95">
                <a href="#proceso">
                  {content.hero.secondaryCta}
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Social Proof Metrics */}
        <section className="py-12 border-y border-white/5 bg-white/[0.02]">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {content.metrics.map((metric, i) => (
                <div key={i} className="text-center group">
                  <div className="text-4xl md:text-5xl font-black text-primary mb-2 group-hover:scale-110 transition-transform">
                    {metric.value}
                  </div>
                  <div className="text-sm uppercase tracking-widest font-bold text-white/40 mb-1">
                    {metric.label}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {metric.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services VIP Grid */}
        <section id="proceso" className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4">El Proceso de Éxito</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Desarrollo estratégico con tiempos de entrega adaptados a la complejidad de tu proyecto.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.services.map((service, i) => (
                <Card key={i} className="gold-border-gradient gold-neon-glow border-none overflow-hidden transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="text-5xl font-black gold-text-gradient mb-4 select-none">
                      {service.step}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-24 bg-white/[0.02]">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Planes de Inversión</h2>
              <p className="text-muted-foreground">Precios competitivos. Resultados garantizados.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {content.pricing.map((plan, i) => {
                const wppMsg = plan.whatsappMessage;
                return (
                  <div key={i} className={`relative p-8 rounded-2xl border transition-all duration-300 flex flex-col h-full ${plan.recommended
                    ? 'bg-white/[0.05] border-primary/50 gold-border-soft-glow gold-neon-glow animate-breathing-glow scale-105 z-10'
                    : 'bg-white/[0.02] border-primary/30 hover:border-primary/50'
                    }`}>
                    {plan.recommended && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        Más Recomendado
                      </div>
                    )}
                    <div className="mb-8">
                      <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                      <div className="text-4xl font-extrabold gold-text-gradient mb-4">{plan.price}</div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{plan.description}</p>
                    </div>
                    <div className="space-y-4 mb-8 flex-grow">
                      {plan.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-3 text-sm">
                          <Check className="h-5 w-5 text-primary shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button asChild className={`w-full h-12 text-lg font-bold ${plan.recommended ? 'gold-glow' : 'variant-secondary'}`}>
                      <a href={getWppLink(wppMsg)} target="_blank" rel="noopener noreferrer">
                        {plan.cta}
                      </a>
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <BookingSection />

        {/* FAQ Section */}
        <section className="py-24">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-12 text-center">Preguntas Frecuentes</h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {content.faq.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border border-white/5 bg-white/[0.03] rounded-lg px-6">
                  <AccordionTrigger className="hover:no-underline font-bold text-lg py-6">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-primary font-medium leading-relaxed pb-6 text-base">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Guarantee Block */}
        <section className="py-24 container mx-auto px-6">
          <div className="gold-border-gradient border-none rounded-2xl p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <ShieldCheck className="w-32 h-32 text-primary" />
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-6 gold-text-gradient">
              &quot;{content.guarantee.message}&quot;
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed italic">
              {content.guarantee.subtext}
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-6 h-6 fill-primary text-primary" />
                ))}
              </div>
              <span className="font-bold">5.0 Calificación de clientes</span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <span className="font-headline font-extrabold text-xl tracking-tighter block mb-2">
                JUAN<span className="text-primary">DEV</span> STUDIO
              </span>
              <p className="text-sm text-muted-foreground">
                {content.footer.copy}
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <a href={`mailto:${content.footer.email}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-bold uppercase tracking-widest">
                <Mail className="w-4 h-4" />
                {content.footer.email}
              </a>
              <div className="flex gap-6">
                {content.footer.links.map((link, i) => (
                  <a key={i} href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors font-bold uppercase tracking-widest">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
