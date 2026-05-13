import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Trophy, 
  Zap, 
  Globe, 
  Lock, 
  BarChart3, 
  Settings2, 
  Medal,
  MessageCircleQuestion,
  ShieldCheck,
  ChevronRight,
  TrendingUp,
  Layout
} from "lucide-react";

export default function PollaFutboleraPremium() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-slate-900 selection:bg-green-100 selection:text-green-900">
      {/* Header/Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 transition-transform hover:scale-105 cursor-pointer">
            <Trophy className="h-6 w-6 text-green-600" />
            <span className="text-xl font-bold tracking-tighter">PredicFi</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="https://predicfi.site/pools" className="hidden sm:block text-sm font-medium text-slate-600 hover:text-green-600 transition-colors">
              Cómo funciona
            </Link>
            <Link href="https://predicfi.site/pools">
              <Button className="bg-green-600 font-bold text-white hover:bg-green-700 transition-all hover:scale-105 active:scale-95 shadow-md shadow-green-200">
                MI POLLA
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-8 pb-20 lg:pt-20 lg:pb-40">
          {/* Glassmorphism Blobs */}
          <div className="absolute top-0 right-0 -z-10 h-[400px] w-[400px] bg-green-100/40 rounded-full blur-[100px] animate-pulse-slow"></div>
          <div className="absolute bottom-0 left-0 -z-10 h-[300px] w-[300px] bg-blue-50/40 rounded-full blur-[80px]"></div>

          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              <div className="inline-flex items-center rounded-full bg-green-50 px-4 py-1.5 text-sm font-semibold text-green-700 ring-1 ring-inset ring-green-600/20 mb-6 animate-bounce-subtle">
                <TrendingUp className="mr-2 h-4 w-4" /> 
                Más de 5,000 expertos ya están participando
              </div>
              <h1 className="max-w-4xl text-5xl font-extrabold tracking-tighter text-slate-900 sm:text-7xl leading-[1.1]">
                La Polla Futbolera Definitiva para el <span className="text-green-600">Mundial 2026</span>
              </h1>
              <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-600">
                Olvídate del Excel y los cálculos manuales. Únete a bóvedas públicas o crea grupos privados para tu oficina y amigos. <span className="font-semibold text-slate-900">Todo automatizado, todo en tiempo real.</span>
              </p>
              <div className="mt-8 flex flex-col items-center gap-6">
                <Link href="https://predicfi.site/pools">
                  <Button size="lg" className="h-18 px-12 text-2xl font-black bg-green-600 text-white hover:bg-green-700 shadow-2xl shadow-green-200 transition-all hover:scale-105 active:scale-95 group">
                    CREAR O UNIRSE A UNA POLLA
                    <ChevronRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <p className="text-sm font-medium text-slate-400 flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4" /> Sin instalaciones · 100% Seguro · Acceso Inmediato
                </p>
              </div>
            </div>

            {/* Platform Preview (Mockup Skeleton) */}
            <div className="mt-20 relative mx-auto max-w-5xl rounded-2xl border border-slate-200 bg-white/50 p-2 shadow-2xl backdrop-blur-sm">
              <div className="rounded-xl border border-slate-100 bg-white overflow-hidden shadow-inner">
                <div className="h-8 bg-slate-50 border-b border-slate-100 flex items-center px-4 gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-300"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-300"></div>
                  <div className="w-2 h-2 rounded-full bg-green-300"></div>
                  <div className="ml-4 h-3 w-32 bg-slate-200 rounded-full"></div>
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex justify-between items-center mb-8">
                    <div className="space-y-2">
                      <div className="h-4 w-48 bg-slate-100 rounded"></div>
                      <div className="h-8 w-64 bg-slate-200 rounded"></div>
                    </div>
                    <div className="hidden md:flex gap-4">
                      <div className="h-10 w-24 bg-green-50 rounded-lg border border-green-100"></div>
                      <div className="h-10 w-24 bg-slate-50 rounded-lg border border-slate-100"></div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-slate-50 bg-slate-50/30">
                        <div className="w-10 h-10 rounded-full bg-slate-200 flex-shrink-0"></div>
                        <div className="flex-1 space-y-2">
                          <div className="h-3 w-1/3 bg-slate-200 rounded"></div>
                          <div className="h-2 w-1/4 bg-slate-100 rounded"></div>
                        </div>
                        <div className="w-16 h-6 bg-green-100 rounded-full"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Decorative Floating Icon */}
              <div className="absolute -bottom-6 -right-6 md:-right-12 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 animate-bounce-subtle">
                <Layout className="h-8 w-8 text-green-600" />
              </div>
            </div>
          </div>
        </section>

        {/* Ventaja Competitiva */}
        <section className="py-32 bg-slate-50/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 md:grid-cols-2">
              <Card className="border-none shadow-2xl bg-white overflow-hidden group transition-all hover:-translate-y-2">
                <div className="h-2 bg-green-600 w-0 group-hover:w-full transition-all duration-500"></div>
                <CardHeader className="p-8">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-green-600 text-white shadow-lg shadow-green-200 rotate-3 group-hover:rotate-0 transition-transform">
                    <Globe className="h-9 w-9" />
                  </div>
                  <CardTitle className="text-3xl tracking-tight">🌍 Compite contra Todos</CardTitle>
                  <CardDescription className="text-lg pt-4 leading-relaxed">
                    Únete a nuestras <span className="font-bold text-green-600 italic">Bóvedas Oficiales</span>. Elige tu nivel de entrada y demuestra que eres el mejor pronosticador del continente.
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <div className="space-y-4">
                    {["Bóvedas por niveles (Bronce a Diamante)", "Posos acumulados garantizados", "Certificado de ranking global"].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-slate-600 font-medium">
                        <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center">
                          <Zap className="h-3 w-3 text-green-600" />
                        </div>
                        {item}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-2xl bg-white overflow-hidden group transition-all hover:-translate-y-2">
                <div className="h-2 bg-slate-900 w-0 group-hover:w-full transition-all duration-500"></div>
                <CardHeader className="p-8">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-lg shadow-slate-200 -rotate-3 group-hover:rotate-0 transition-transform">
                    <Lock className="h-9 w-9" />
                  </div>
                  <CardTitle className="text-3xl tracking-tight">🔒 Juega con tus Amigos</CardTitle>
                  <CardDescription className="text-lg pt-4 leading-relaxed">
                    El sistema perfecto para la <span className="font-bold text-slate-900 underline decoration-green-400 decoration-4">oficina y grupos privados</span>. Crea tu torneo, invita por WhatsApp y nosotros hacemos el resto.
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <div className="space-y-4">
                    {["Panel de administración privado", "Invita con un clic vía WhatsApp", "Chat y notificaciones en tiempo real"].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-slate-600 font-medium">
                        <div className="h-5 w-5 rounded-full bg-slate-100 flex items-center justify-center">
                          <Zap className="h-3 w-3 text-slate-900" />
                        </div>
                        {item}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Beneficios Rápidos */}
        <section className="py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-20 text-center">
              <h2 className="text-4xl font-extrabold tracking-tighter text-slate-900 sm:text-5xl">Potencia tu experiencia mundialista</h2>
            </div>
            <div className="grid gap-16 md:grid-cols-3">
              <div className="flex flex-col items-center text-center group">
                <div className="mb-8 rounded-3xl bg-green-50 p-8 transition-all group-hover:bg-green-100 group-hover:scale-110 group-hover:rotate-3">
                  <BarChart3 className="h-12 w-12 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">📊 Tabla en Vivo</h3>
                <p className="text-slate-600 text-lg">
                  Nuestra plataforma se actualiza al segundo. Siente la adrenalina mientras ves tu posición cambiar con cada gol.
                </p>
              </div>

              <div className="flex flex-col items-center text-center group">
                <div className="mb-8 rounded-3xl bg-blue-50 p-8 transition-all group-hover:bg-blue-100 group-hover:scale-110 group-hover:-rotate-3">
                  <Settings2 className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">⚙️ Adiós a los Excels</h3>
                <p className="text-slate-600 text-lg">
                  Cero errores humanos. Nuestro motor de procesamiento calcula puntos y criterios de desempate automáticamente.
                </p>
              </div>

              <div className="flex flex-col items-center text-center group">
                <div className="mb-8 rounded-3xl bg-yellow-50 p-8 transition-all group-hover:bg-yellow-100 group-hover:scale-110 group-hover:rotate-3">
                  <Medal className="h-12 w-12 text-yellow-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">🏆 Reparto Garantizado</h3>
                <p className="text-slate-600 text-lg">
                  Sistema de distribución automático. Los mejores de la jornada reciben sus premios al instante, sin intermediarios.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Rápido */}
        <section className="bg-slate-900 py-32 text-white overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.15),transparent)] pointer-events-none"></div>
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <div className="mb-16 flex items-center gap-4 justify-center">
              <MessageCircleQuestion className="h-10 w-10 text-green-400" />
              <h2 className="text-4xl font-bold tracking-tighter">Preguntas Frecuentes</h2>
            </div>
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="border-slate-800 bg-slate-800/50 rounded-2xl px-6">
                <AccordionTrigger className="text-left font-bold text-lg hover:no-underline py-6">¿Cómo aseguran la transparencia?</AccordionTrigger>
                <AccordionContent className="text-slate-300 text-base pb-6">
                  Cada pronóstico se registra con marca de tiempo inmutable. Nadie, ni siquiera los administradores, puede modificar una predicción una vez iniciado el partido.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-slate-800 bg-slate-800/50 rounded-2xl px-6">
                <AccordionTrigger className="text-left font-bold text-lg hover:no-underline py-6">¿Es gratis crear grupos privados?</AccordionTrigger>
                <AccordionContent className="text-slate-300 text-base pb-6">
                  Sí, puedes crear grupos para tus amigos sin costo base. Solo se aplican niveles de entrada según el tipo de bóveda que elijan participar.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-slate-800 bg-slate-800/50 rounded-2xl px-6">
                <AccordionTrigger className="text-left font-bold text-lg hover:no-underline py-6">¿Qué pasa si olvido poner mi resultado?</AccordionTrigger>
                <AccordionContent className="text-slate-300 text-base pb-6">
                  El sistema envía recordatorios automáticos 1 hora antes de cada partido para asegurar que nadie se quede sin sumar puntos.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 bg-white relative">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto rounded-[3rem] bg-green-600 p-12 md:p-24 text-white shadow-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <h2 className="text-4xl font-black sm:text-6xl mb-8 tracking-tighter">¿Estás listo para el Desafío?</h2>
                <p className="text-green-50 mb-12 max-w-2xl mx-auto text-xl font-medium opacity-90">
                  Únete a la comunidad de pollas más grande del mundo. Asegura tu lugar antes de que comience el partido inaugural.
                </p>
                <Link href="https://predicfi.site/pools">
                  <Button size="lg" className="h-20 px-16 text-2xl font-black bg-white text-green-700 hover:bg-slate-100 shadow-2xl transition-all hover:scale-105 active:scale-95">
                    ENTRAR AL DESAFÍO OFICIAL
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-100 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 text-sm text-slate-500">
            <div className="max-w-xs space-y-4">
              <div className="flex items-center gap-2">
                <Trophy className="h-6 w-6 text-green-600" />
                <span className="font-bold text-xl text-slate-900 tracking-tighter">PredicFi</span>
              </div>
              <p>La plataforma definitiva para organizar y participar en quinielas de fútbol de manera profesional y automatizada.</p>
            </div>
            <div className="grid grid-cols-2 gap-16 md:gap-24">
              <div className="space-y-4">
                <h4 className="font-bold text-slate-900 uppercase tracking-widest text-xs">Producto</h4>
                <ul className="space-y-2">
                  <li><Link href="https://predicfi.site/pools" className="hover:text-green-600">Bóvedas</Link></li>
                  <li><Link href="#" className="hover:text-green-600">Premios</Link></li>
                  <li><Link href="#" className="hover:text-green-600">Ranking</Link></li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-slate-900 uppercase tracking-widest text-xs">Soporte</h4>
                <ul className="space-y-2">
                  <li><Link href="#" className="hover:text-green-600">Ayuda</Link></li>
                  <li><Link href="#" className="hover:text-green-600">Reglas</Link></li>
                  <li><Link href="#" className="hover:text-green-600">Contacto</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-20 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
            <p>© 2026 PredicFi Global. Todos los derechos reservados.</p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-green-600" />
                <span className="font-medium text-slate-900 uppercase tracking-tighter">Sistema Auditado</span>
              </div>
              <Link href="#" className="hover:text-slate-900">Privacidad</Link>
              <Link href="#" className="hover:text-slate-900">Términos</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
