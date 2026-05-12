import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Trophy, 
  Users, 
  Zap, 
  CheckCircle, 
  ShieldCheck, 
  MessageCircleQuestion,
  ArrowRight,
  Star
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#050a06] font-sans text-white antialiased overflow-x-hidden">
      {/* Header/Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#050a06]/80 backdrop-blur-xl">
        <div className="container mx-auto flex h-16 md:h-20 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-lg md:rounded-xl bg-gradient-to-br from-green-400 to-green-600 shadow-lg shadow-green-500/20">
              <Trophy className="h-5 w-5 md:h-6 md:w-6 text-white" />
            </div>
            <span className="text-xl md:text-2xl font-black tracking-tighter uppercase italic">PredicFi</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
            <Link href="#how-it-works" className="hover:text-green-400 transition-colors uppercase">Cómo funciona</Link>
            <Link href="#testimonials" className="hover:text-green-400 transition-colors uppercase">Testimonios</Link>
            <Link href="#faq" className="hover:text-green-400 transition-colors uppercase">FAQ</Link>
          </nav>
          <Link href="https://predicfi.site/">
            <Button className="bg-green-500 hover:bg-green-400 text-black font-bold px-4 md:px-8 h-9 md:h-11 rounded-full shadow-lg shadow-green-500/20 transition-all hover:scale-105 active:scale-95 text-[10px] md:text-sm">
              EMPEZAR AHORA
            </Button>
          </Link>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden py-16 md:py-24">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <Image 
              src="/hero.png" 
              alt="World Cup Stadium" 
              fill 
              className="object-cover opacity-40 scale-105 animate-pulse-slow"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#050a06]/60 via-[#050a06]/80 to-[#050a06]"></div>
          </div>

          <div className="container relative z-10 mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-green-500/10 border border-green-500/20 px-3 py-1.5 md:px-4 md:py-2 text-[10px] md:text-sm font-bold text-green-400 mb-6 md:mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              +500 GRUPOS COMPITIENDO EN VIVO
            </div>
            
            <h1 className="max-w-5xl mx-auto text-4xl md:text-8xl font-black tracking-tight leading-[0.9] mb-6 md:mb-8 uppercase italic animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
              EL GRAN <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">DESAFÍO</span> DE PRONÓSTICOS
            </h1>
            
            <p className="mt-4 md:mt-6 max-w-2xl mx-auto text-base md:text-xl text-white/60 leading-relaxed mb-8 md:mb-12 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
              Vive el Mundial 2026 como nunca antes. Crea tu grupo, predice resultados y gana premios reales con la tecnología de predicción más avanzada del mercado.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-500">
              <Link href="https://predicfi.site/">
                <Button size="lg" className="h-12 md:h-16 px-6 md:px-10 text-base md:text-xl font-black bg-green-500 text-black hover:bg-green-400 rounded-full shadow-2xl shadow-green-500/30 group transition-all">
                  ENTRAR AL DESAFÍO OFICIAL
                  <ArrowRight className="ml-2 h-5 w-5 md:h-6 md:w-6 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Stats/Proof Bar */}
        <section className="border-y border-white/5 bg-white/[0.02] py-8 md:py-12">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
              <div>
                <p className="text-2xl md:text-4xl font-black text-white">$100K+</p>
                <p className="text-[10px] md:text-sm text-white/40 uppercase tracking-widest font-bold mt-1 md:mt-2">PREMIOS REPARTIDOS</p>
              </div>
              <div>
                <p className="text-2xl md:text-4xl font-black text-white">50K+</p>
                <p className="text-[10px] md:text-sm text-white/40 uppercase tracking-widest font-bold mt-1 md:mt-2">USUARIOS ACTIVOS</p>
              </div>
              <div>
                <p className="text-2xl md:text-4xl font-black text-white">100%</p>
                <p className="text-[10px] md:text-sm text-white/40 uppercase tracking-widest font-bold mt-1 md:mt-2">TRANSPARENCIA</p>
              </div>
              <div>
                <p className="text-2xl md:text-4xl font-black text-white">24/7</p>
                <p className="text-[10px] md:text-sm text-white/40 uppercase tracking-widest font-bold mt-1 md:mt-2">SOPORTE TÉCNICO</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-20 md:py-32 relative">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-end justify-between mb-12 md:mb-20 gap-8 text-center md:text-left">
              <div className="max-w-2xl mx-auto md:mx-0">
                <h2 className="text-3xl md:text-6xl font-black uppercase italic mb-4 md:mb-6">DOMINA LA <span className="text-green-500">CANCHA</span> DIGITAL</h2>
                <p className="text-white/50 text-lg md:text-xl">Tres pasos simples para convertirte en el mejor pronosticador de tu comunidad.</p>
              </div>
              <div className="hidden md:block">
                <div className="h-px w-64 bg-gradient-to-r from-transparent via-green-500/50 to-transparent"></div>
              </div>
            </div>

            <div className="grid gap-6 md:gap-8 md:grid-cols-3">
              {[
                {
                  icon: Users,
                  title: "ELIGE TU NIVEL",
                  desc: "Desde ligas amateur hasta torneos profesionales. Tenemos una mesa para cada tipo de jugador.",
                  step: "01"
                },
                {
                  icon: Zap,
                  title: "PRONOSTICA",
                  desc: "Usa tus conocimientos de fútbol para predecir marcadores, goleadores y eventos especiales.",
                  step: "02"
                },
                {
                  icon: CheckCircle,
                  title: "GANA REAL",
                  desc: "Los premios se distribuyen automáticamente mediante smart contracts. Sin esperas, sin errores.",
                  step: "03"
                }
              ].map((item, i) => (
                <div key={i} className="group relative p-6 md:p-8 rounded-2xl md:rounded-3xl bg-white/[0.03] border border-white/5 hover:border-green-500/50 transition-all duration-500 overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 md:p-6 text-4xl md:text-6xl font-black text-white/[0.02] group-hover:text-green-500/5 transition-colors">
                    {item.step}
                  </div>
                  <div className="relative z-10">
                    <div className="mb-6 md:mb-8 inline-flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-xl md:rounded-2xl bg-green-500/10 text-green-500 group-hover:scale-110 transition-transform duration-500">
                      <item.icon className="h-6 w-6 md:h-8 md:w-8" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-black mb-3 md:mb-4 uppercase">{item.title}</h3>
                    <p className="text-sm md:text-base text-white/40 leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-green-500 transition-all duration-700 group-hover:w-full"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-20 md:py-32 bg-gradient-to-b from-[#050a06] to-[#0a140c]">
          <div className="container mx-auto px-6 text-center">
            <div className="mb-12 md:mb-20">
              <h2 className="text-3xl md:text-5xl font-black uppercase italic mb-4">VOCES DE LA COMUNIDAD</h2>
              <div className="flex items-center justify-center gap-1 text-green-500 mb-8">
                <Star className="fill-current h-4 w-4 md:h-5 md:w-5" />
                <Star className="fill-current h-4 w-4 md:h-5 md:w-5" />
                <Star className="fill-current h-4 w-4 md:h-5 md:w-5" />
                <Star className="fill-current h-4 w-4 md:h-5 md:w-5" />
                <Star className="fill-current h-4 w-4 md:h-5 md:w-5" />
              </div>
            </div>

            <div className="grid gap-6 md:gap-8 md:grid-cols-2 max-w-5xl mx-auto">
              {[
                {
                  name: "Juan R.",
                  role: "Usuario Verificado",
                  text: "Increíblemente fácil de usar. Mi grupo de amigos y yo nos divertimos mucho en el último torneo. La automatización lo hace todo más sencillo."
                },
                {
                  name: "Maria G.",
                  role: "Líder de Grupo",
                  text: "La transparencia es total. Los premios se reparten al instante sin complicaciones. Es la plataforma que estábamos esperando para el mundial."
                }
              ].map((t, i) => (
                <Card key={i} className="bg-white/[0.02] border-white/10 rounded-2xl md:rounded-3xl overflow-hidden backdrop-blur-sm text-left">
                  <CardContent className="p-8 md:p-10">
                    <p className="text-lg md:text-xl text-white/80 italic mb-6 md:mb-8 leading-relaxed">
                      "{t.text}"
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-700 flex items-center justify-center font-bold text-black text-sm md:text-base">
                        {t.name[0]}
                      </div>
                      <div>
                        <p className="font-black text-white uppercase tracking-tight text-sm md:text-base">{t.name}</p>
                        <p className="text-[10px] md:text-xs text-white/40 font-bold uppercase tracking-widest">{t.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-20 md:py-32 bg-[#0a140c]">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="flex items-center gap-4 md:gap-6 mb-12 md:mb-16">
              <div className="h-12 w-12 md:h-16 md:w-16 rounded-xl md:rounded-2xl bg-green-500/10 flex items-center justify-center">
                <MessageCircleQuestion className="h-6 w-6 md:h-8 md:w-8 text-green-500" />
              </div>
              <h2 className="text-2xl md:text-5xl font-black uppercase italic">DUDAS FRECUENTES</h2>
            </div>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {[
                {
                  q: "¿CÓMO ME REGISTRO?",
                  a: "Simplemente haz clic en el botón de entrar al desafío oficial, crea tu perfil y elige el nivel en el que deseas participar. Solo necesitas una wallet o un correo electrónico."
                },
                {
                  q: "¿ES SEGURO PARTICIPAR?",
                  a: "Absolutamente. Nuestro sistema automatizado garantiza transparencia total en cada paso, desde el registro de predicciones hasta el reparto de premios mediante smart contracts."
                },
                {
                  q: "¿PUEDO JUGAR CON AMIGOS?",
                  a: "¡Claro que sí! La plataforma está diseñada específicamente para potenciar la competencia entre grupos de amigos y comunidades locales o globales."
                }
              ].map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-white/5 bg-white/[0.01] rounded-xl md:rounded-2xl px-4 md:px-6">
                  <AccordionTrigger className="text-base md:text-lg font-bold hover:text-green-400 py-4 md:py-6 uppercase tracking-tight text-left">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/50 text-sm md:text-lg leading-relaxed pb-4 md:pb-6">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative py-24 md:py-40 overflow-hidden text-center">
          <div className="absolute inset-0 bg-green-500"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
          
          <div className="container relative z-10 mx-auto px-6">
            <h2 className="text-3xl md:text-8xl font-black text-black uppercase italic mb-6 md:mb-8 leading-none">
              ¿LISTO PARA HACER <span className="text-white">HISTORIA</span>?
            </h2>
            <p className="text-black/70 mb-8 md:mb-12 max-w-2xl mx-auto text-lg md:text-2xl font-bold">
              Únete a la revolución de los pronósticos deportivos. El Mundial 2026 te espera.
            </p>
            <Link href="https://predicfi.site/">
              <Button size="lg" className="h-14 md:h-20 px-8 md:px-12 text-lg md:text-2xl font-black bg-black text-white hover:bg-zinc-900 rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95">
                COMENZAR DESAFÍO
              </Button>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#050a06] border-t border-white/5 py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="max-w-xs">
              <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                <Trophy className="h-6 w-6 md:h-8 md:w-8 text-green-500" />
                <span className="text-xl md:text-2xl font-black uppercase italic tracking-tighter">PredicFi</span>
              </div>
              <p className="text-sm md:text-base text-white/40 leading-relaxed">
                La plataforma de predicción definitiva para el Mundial 2026. Transparencia, velocidad y diversión garantizada.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-12 md:gap-16">
              <div>
                <h4 className="text-xs md:text-sm font-black uppercase tracking-widest text-white mb-4 md:mb-6">LINKS</h4>
                <ul className="space-y-3 md:space-y-4 text-[10px] md:text-sm text-white/40 font-medium">
                  <li><Link href="#how-it-works" className="hover:text-white transition-colors">Cómo funciona</Link></li>
                  <li><Link href="#testimonials" className="hover:text-white transition-colors">Testimonios</Link></li>
                  <li><Link href="#faq" className="hover:text-white transition-colors">FAQ</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs md:text-sm font-black uppercase tracking-widest text-white mb-4 md:mb-6">LEGAL</h4>
                <ul className="space-y-3 md:space-y-4 text-[10px] md:text-sm text-white/40 font-medium">
                  <li><Link href="#" className="hover:text-white transition-colors">Términos</Link></li>
                  <li><Link href="#" className="hover:text-white transition-colors">Privacidad</Link></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-16 md:mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-white/20 text-[10px] md:text-sm font-bold uppercase tracking-widest text-center md:text-left">
              © 2026 PREDICFI DESAFÍO MUNDIAL. ALL RIGHTS RESERVED.
            </p>
            <div className="flex items-center gap-4 md:gap-6">
              <ShieldCheck className="h-4 w-4 md:h-5 md:w-5 text-green-500/40" />
              <span className="text-[10px] md:text-xs text-white/20 font-black uppercase tracking-widest">SECURED BY BLOCKCHAIN</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
