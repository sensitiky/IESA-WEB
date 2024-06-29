"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { JSX, SVGProps } from "react";
import CookieNotice from "./componentes/cookies";
import Footer from "./componentes/footer";
import Header from "./componentes/header";
import Image from "next/image";

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <CookieNotice />
      <Header />
      <main className="flex-1">
        <section className="bg-gray-100 text-white py-24 md:py-32 lg:py-40">
          <div className="container px-4 md:px-6 lg:px-8">
            <div className="text-black grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                  Descubre tu futura profesión
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl mb-8">
                  Explora nuestros programas e inscríbete a una vibrante
                  comunidad de estudiantes.
                </p>
                <div className="flex gap-4">
                  <Button className="bg-customColor-iesa hover:bg-slate-500">
                    <Link
                      href="/contacto"
                      className="relative group"
                      prefetch={false}
                    >
                      Contáctanos{" "}
                      <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                    </Link>
                  </Button>
                  <Button className="text-black" variant="outline">
                    <Link
                      href="/instituto"
                      className="relative group"
                      prefetch={false}
                    >
                      Descubre más
                      <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="hidden md:block">
                <Image
                  src="/iesa3.jpeg"
                  width="1000"
                  height="600"
                  alt="diversas"
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="py-12 md:py-20 lg:py-28">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="w-full max-w-full">
                <Image
                  src="/iesa2.jpeg"
                  width="600"
                  height="400"
                  alt="Logo"
                  className="w-full h-auto rounded-xl"
                />
              </div>
              <div className="w-full max-w-full">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  Bienvenidos a IESA, el instituto de tu futura profesión.
                </h2>
                <p className="text-lg md:text-xl lg:text-2xl mb-8">
                  Un Instituto innovador enfocado en prepararte para el ámbito
                  profesional con programas prácticos, profesores dedicados y
                  conexiones laborales.
                </p>
                <Link
                  href="/instituto"
                  className="relative group inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 transition-colors"
                  prefetch={false}
                >
                  Descubre más
                  <ArrowRightIcon className="h-5 w-5 text-customColor-iesa" />
                  <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-customColor-iesa scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="programs" className="bg-gray-100 py-12 md:py-20 lg:py-28">
          <div className="container px-4 md:px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-12 lg:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Nuestras Ofertas Académicas
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-600">
                Explora nuestra variada oferta de tecnicaturas superiores,
                cursos y formaciones profesionales.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-white dark:bg-zinc-800 shadow-lg rounded-lg transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <BeakerIcon className="h-8 w-8 text-primary-500" />
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-bold mb-2">
                    Tecnicaturas Superiores
                  </h3>
                  <p className="text-gray-600">
                    Investiga nuestras innovadoras Tecnicaturas Superiores y
                    prepárate para un futuro prometedor en diferentes campos.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    href="/carreras"
                    className="relative group text-primary-500 hover:text-primary-600 transition-colors"
                    prefetch={false}
                  >
                    Descubre más
                    <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-customColor-iesa scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="bg-white dark:bg-zinc-800 shadow-lg rounded-lg transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <BookIcon className="h-8 w-8 text-primary-500" />
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-bold mb-2">Cursos</h3>
                  <p className="text-gray-600">
                    Conoce nuestra amplia variedad de cursos especializados y
                    abre las puertas a nuevas oportunidades en tu carrera
                    profesional.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    href="/carreras"
                    className="relative group text-primary-500 hover:text-primary-600 transition-colors"
                    prefetch={false}
                  >
                    Descubre más
                    <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-customColor-iesa scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="bg-white dark:bg-zinc-800 shadow-lg rounded-lg transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <MicroscopeIcon className="h-8 w-8 text-primary-500" />
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-bold mb-2">
                    Formaciones Profesionales
                  </h3>
                  <p className="text-gray-600">
                    Sumérgete en nuestras rigurosas formaciones profesionales y
                    haz crecer tu carrera hacia nuevas alturas en tu campo
                    elegido.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    href="/carreras"
                    className="relative group text-primary-500 hover:text-primary-600 transition-colors"
                    prefetch={false}
                  >
                    Descubre más
                    <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-customColor-iesa scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section id="admissions" className="py-12 md:py-20 lg:py-28">
          <div className="container px-4 md:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="relative group text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  Preinscripción
                </h2>
                <p className="text-lg md:text-xl lg:text-2xl mb-8">
                  Infórmate sobre nuestro proceso de preinscripción y cómo
                  presentar tu solicitud.
                </p>
                <div className="flex gap-4">
                  <Button className="bg-customColor-iesa hover:bg-slate-500">
                    <Link
                      href="/formulario"
                      className="relative group"
                      prefetch={false}
                    >
                      Solicitar ahora
                      <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="hidden md:block">
                <Image
                  src="/iesa7.jpeg"
                  width="600"
                  height="400"
                  alt="inscripción"
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="mision" className="bg-gray-100 py-12 md:py-20 lg:py-28">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="w-full max-w-full">
                <Image
                  src="/iesa5.jpeg"
                  width="600"
                  height="400"
                  alt="misión y valores"
                  className="w-full h-auto rounded-xl"
                />
              </div>
              <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-10 mb-10 w-full">
                <div className="text-black w-full lg:w-1/2 mb-10 lg:mb-0">
                  <h2 className="text-2xl lg:text-4xl font-bold mb-6">
                    Nuestra visión es hacer que el trabajo sea inspirador y
                    gratificante.
                  </h2>
                  <p className="mb-8 text-lg sm:text-sm">
                    El IESA es un instituto privado <br />
                    de gestión pública fundado en 2003 en Posadas, Misiones.
                    Hemos dedicado años a brindar formación profesional exitosa
                    a lo largo de nuestra historia.
                  </p>
                  <div className="flex gap-4">
                    <Button className="bg-customColor-iesa hover:bg-slate-500">
                      <Link
                        href="/instituto"
                        className="relative group"
                        prefetch={false}
                      >
                        Descubre más
                        <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 lg:gap-8 w-full lg:w-auto">
                  <div className="bg-customColor-iesa text-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105">
                    <h3 className="text-xl lg:text-2xl font-bold mb-4 ">
                      Misión
                    </h3>
                    <p>Formar líderes</p>
                  </div>
                  <div className="bg-customColor-iesa text-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105">
                    <h3 className="text-xl lg:text-2xl font-bold mb-4">
                      Valores
                    </h3>
                    <p>Excelencia y ética</p>
                  </div>
                  <div className="bg-customColor-iesa text-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105">
                    <h3 className="text-xl lg:text-2xl font-bold mb-4">
                      Diversidad
                    </h3>
                    <p>Comunidad inclusiva</p>
                  </div>
                  <div className="bg-customColor-iesa text-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105">
                    <h3 className="text-xl lg:text-2xl font-bold mb-4">
                      Innovación
                    </h3>
                    <p>Vanguardia educativa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function ArrowRightIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function BeakerIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 3h15" />
      <path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3" />
      <path d="M6 14h12" />
    </svg>
  );
}

function BookIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  );
}

function MicroscopeIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 18h8" />
      <path d="M3 22h18" />
      <path d="M14 22a7 7 0 1 0 0-14h-1" />
      <path d="M9 14h2" />
      <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
      <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
    </svg>
  );
}
