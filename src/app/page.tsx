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
  Users, 
  Zap, 
  Globe, 
  Lock, 
  BarChart3, 
  Settings2, 
  Medal,
  MessageCircleQuestion,
  ShieldCheck
} from "lucide-react";

export default function PollaFutboleraPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-slate-900">
      {/* Header/Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <Trophy className="h-6 w-6 text-green-600" />
            <span className="text-xl font-bold tracking-tight">PredicFi</span>
          </div>
          <Link href="https://predicfi.site/vaults">
            <Button className="bg-green-600 font-semibold text-white hover:bg-green-700">
              MI POLLA
            </Button>
          </Link>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-32">
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              <div className="inline-flex items-center rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-green-700 ring-1 ring-inset ring-green-600/20 mb-6">
                🏆 ¡La plataforma de pollas líder para el 2026!
              </div>
              <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
                La Polla Futbolera Definitiva para el <span className="text-green-600">Mundial 2026</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Olvídate del Excel. Únete a las pollas públicas para competir a lo grande, o crea tu grupo privado exclusivo para tus amigos y la oficina. El sistema calcula todo en tiempo real.
              </p>
              <div className="mt-10">
                <Link href="https://predicfi.site/vaults">
                  <Button size="lg" className="h-16 px-10 text-xl font-bold bg-green-600 text-white hover:bg-green-700 shadow-xl shadow-green-200">
                    CREAR O UNIRSE A UNA POLLA
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Background Pattern */}
          <div className="absolute top-0 -z-10 h-full w-full bg-[radial-gradient(#22c55e_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-10"></div>
        </section>

        {/* Ventaja Competitiva */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="border-none shadow-lg bg-white p-4">
                <CardHeader>
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-600">
                    <Globe className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl">🌍 Compite contra Todos</CardTitle>
                  <CardDescription className="text-base pt-2">
                    Únete a nuestras bóvedas oficiales categorizadas (Bronce a Diamante) y demuestra tus conocimientos a nivel global con miles de participantes.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {["Bóvedas por niveles", "Premios acumulados masivos", "Ranking global oficial"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-600">
                        <Zap className="h-4 w-4 text-green-500" /> {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg bg-white p-4">
                <CardHeader>
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-900">
                    <Lock className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl">🔒 Juega con tus Amigos</CardTitle>
                  <CardDescription className="text-base pt-2">
                    Crea tu propio torneo cerrado, invita por WhatsApp y descubre quién es el verdadero experto de tu grupo, familia o empresa.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {["Grupos privados con acceso único", "Invita por enlace directo", "Personaliza tu polla"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-600">
                        <Zap className="h-4 w-4 text-green-500" /> {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Beneficios Rápidos */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">¿Por qué elegir nuestra Polla?</h2>
            </div>
            <div className="grid gap-12 md:grid-cols-3">
              <div className="flex flex-col items-center text-center group">
                <div className="mb-6 rounded-full bg-green-50 p-6 transition-colors group-hover:bg-green-100">
                  <BarChart3 className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">📈 Posiciones en tiempo real</h3>
                <p className="text-slate-600">
                  Mira cómo subes o bajas en la tabla en el mismo instante en que se marca un gol.
                </p>
              </div>

              <div className="flex flex-col items-center text-center group">
                <div className="mb-6 rounded-full bg-green-50 p-6 transition-colors group-hover:bg-green-100">
                  <Settings2 className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">⚙️ 100% Automatizado</h3>
                <p className="text-slate-600">
                  Sin cálculos manuales ni errores de Excel. El sistema procesa puntos y resultados al segundo.
                </p>
              </div>

              <div className="flex flex-col items-center text-center group">
                <div className="mb-6 rounded-full bg-green-50 p-6 transition-colors group-hover:bg-green-100">
                  <Medal className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">🏆 Premios Justos</h3>
                <p className="text-slate-600">
                  Repartición de premios transparente y garantizada para los mejores de cada categoría.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Rápido */}
        <section className="bg-slate-50 py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <div className="mb-12 flex items-center gap-3 justify-center">
              <MessageCircleQuestion className="h-8 w-8 text-green-600" />
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 text-center">Todo lo que necesitas saber</h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left font-semibold">¿Cómo se calculan los puntos?</AccordionTrigger>
                <AccordionContent>
                  Nuestro sistema otorga puntos por acertar el ganador, el marcador exacto y otros criterios dinámicos que mantienen la emoción hasta el final.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-semibold">¿Puedo crear pollas para mi oficina?</AccordionTrigger>
                <AccordionContent>
                  Sí, puedes crear una polla privada en segundos, establecer el nivel de participación e invitar a tus colegas con un simple enlace.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-semibold">¿Qué pasa si un partido se va a prórroga?</AccordionTrigger>
                <AccordionContent>
                  El sistema está configurado siguiendo las reglas oficiales del Mundial 2026 para garantizar que los pronósticos sean lo más precisos posible.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-green-600 text-white overflow-hidden relative">
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl font-bold sm:text-5xl mb-6 tracking-tight">¡No te quedes fuera del juego!</h2>
            <p className="text-green-50 mb-10 max-w-2xl mx-auto text-xl">
              Más de 5,000 participantes ya están afinando sus pronósticos. Crea tu grupo hoy.
            </p>
            <Link href="https://predicfi.site/vaults">
              <Button size="lg" className="h-18 px-12 text-2xl font-black bg-white text-green-700 hover:bg-slate-100 shadow-2xl transition-all hover:scale-105">
                CREAR O UNIRSE A UNA POLLA
              </Button>
            </Link>
          </div>
          {/* Decorative Circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] bg-white opacity-5 rounded-full blur-3xl"></div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-100 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-green-600" />
              <span className="font-bold text-slate-900">PredicFi Polla Mundialista</span>
            </div>
            <p>© 2026 Plataforma de Quinielas Futboleras. Todos los derechos reservados.</p>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4" />
              <span>Cálculos 100% Transparentes</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
