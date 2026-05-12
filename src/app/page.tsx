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
  CheckCircle, 
  ShieldCheck, 
  MessageCircleQuestion 
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-slate-900">
      {/* Header/Navbar (Simple) */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <Trophy className="h-6 w-6 text-green-600" />
            <span className="text-xl font-bold tracking-tight">PredicFi</span>
          </div>
          <Link href="https://predicfi.site/">
            <Button className="bg-green-600 font-semibold text-white hover:bg-green-700">
              ENTRAR
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
                <span className="mr-2">🔥</span> Más de 500 grupos ya están registrados.
              </div>
              <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
                El Gran Desafío de Pronósticos: <span className="text-green-600">Mundial 2026</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Arma tu grupo, predice los resultados y compite por el premio acumulado. 
                El sistema más transparente para jugar con amigos y demostrar quién sabe más de fútbol.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link href="https://predicfi.site/">
                  <Button size="lg" className="h-14 px-8 text-lg font-bold bg-green-600 text-white hover:bg-green-700 shadow-lg shadow-green-200">
                    ENTRAR AL DESAFÍO OFICIAL
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Background decoration */}
          <div className="absolute top-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>
        </section>

        {/* How It Works */}
        <section className="bg-slate-50 py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Cómo Funciona</h2>
              <p className="mt-4 text-slate-600">Comienza a jugar en menos de 2 minutos</p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="border-none shadow-sm transition-transform hover:scale-[1.02]">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-green-600">
                    <Users className="h-6 w-6" />
                  </div>
                  <CardTitle>1. Elige tu nivel</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Desde Bronce hasta Diamante. Tenemos diferentes niveles de entrada ajustados a lo que tu grupo de amigos busca.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-sm transition-transform hover:scale-[1.02]">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-green-600">
                    <Zap className="h-6 w-6" />
                  </div>
                  <CardTitle>2. Haz tus predicciones</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Completa tus pronósticos antes de cada partido. Nuestro sistema registra todo en tiempo real para máxima transparencia.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-sm transition-transform hover:scale-[1.02]">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-green-600">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <CardTitle>3. Premios Automáticos</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    El sistema reparte los premios automáticamente a los mejores pronosticadores al finalizar la jornada. Sin esperas.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Lo que dicen nuestros usuarios</h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
              <Card className="bg-white border-green-100">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4 text-yellow-400">
                    {"★".repeat(5)}
                  </div>
                  <p className="italic text-slate-700 mb-4">
                    "Increíblemente fácil de usar. Mi grupo de amigos y yo nos divertimos mucho en el último torneo. La automatización lo hace todo más sencillo."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-slate-200"></div>
                    <div>
                      <p className="font-semibold">Juan R.</p>
                      <p className="text-xs text-slate-500">Usuario Verificado</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-green-100">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4 text-yellow-400">
                    {"★".repeat(5)}
                  </div>
                  <p className="italic text-slate-700 mb-4">
                    "La transparencia es total. Los premios se reparten al instante sin complicaciones. Es la plataforma que estábamos esperando para el mundial."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-slate-200"></div>
                    <div>
                      <p className="font-semibold">Maria G.</p>
                      <p className="text-xs text-slate-500">Líder de Grupo</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-slate-50 py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <div className="mb-12 flex items-center gap-3 justify-center">
              <MessageCircleQuestion className="h-8 w-8 text-green-600" />
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">Preguntas Frecuentes</h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left font-semibold">¿Cómo me registro?</AccordionTrigger>
                <AccordionContent>
                  Simplemente haz clic en el botón de entrar al desafío oficial, crea tu perfil y elige el nivel en el que deseas participar.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-semibold">¿Es seguro participar?</AccordionTrigger>
                <AccordionContent>
                  Absolutamente. Nuestro sistema automatizado garantiza transparencia total en cada paso, desde el registro de predicciones hasta el reparto de premios.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-semibold">¿Puedo jugar con amigos?</AccordionTrigger>
                <AccordionContent>
                  ¡Claro que sí! La plataforma está diseñada específicamente para potenciar la competencia entre grupos de amigos y comunidades.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-green-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl mb-6">¿Listo para demostrar tu conocimiento?</h2>
            <p className="text-green-50 mb-10 max-w-2xl mx-auto text-lg">
              Únete a los más de 500 grupos que ya están listos para el gran desafío del Mundial 2026.
            </p>
            <Link href="https://predicfi.site/">
              <Button size="lg" className="h-16 px-10 text-xl font-black bg-white text-green-700 hover:bg-slate-100 shadow-2xl">
                ENTRAR AL DESAFÍO OFICIAL
              </Button>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-100 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-green-600" />
              <span className="font-bold">PredicFi 2026</span>
            </div>
            <p className="text-sm text-slate-500">
              © 2026 Plataforma de Pronósticos Deportivos. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <ShieldCheck className="h-4 w-4" />
              <span>Sistema 100% Automatizado</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
