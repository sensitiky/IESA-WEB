"use client";
import Link from "next/link";
import Footer from "@/app/componentes/footer";
import Header from "@/app/componentes/header";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Carousel3 from "@/app/componentes/slider3";

export default function cursos() {
  return (
    <div>
      <Header />
      <Carousel3 />
      <section id="cursos" className="w-full py-12 md:py-24 lg:py-32">
        \
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:gap-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <div className="group flex flex-col rounded-lg bg-white dark:bg-gray-950 border border-gray-200 shadow-sm transition-all hover:shadow-lg dark:border-gray-800 dark:hover:bg-gray-800 p-6 min-h-full">
                <Image
                  src="/graficocurso.jpg"
                  width={500}
                  height={500}
                  alt="diseño gráfico digital"
                  className="aspect-square object-cover rounded-lg mb-4"
                />
                <div className="flex-1">
                  <h3 className="mb-2 text-lg font-semibold">
                    Curso de Diseño gráfico digital
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    CorelDRAW, Photoshop, SketchUp.
                  </p>
                </div>
              </div>
              <div className="group flex flex-col rounded-lg bg-white dark:bg-gray-950 border border-gray-200 shadow-sm transition-all hover:shadow-lg dark:border-gray-800 dark:hover:bg-gray-800 p-6 min-h-full">
                <Image
                  src="/fotobasica.jpg"
                  width={500}
                  height={500}
                  alt="Fotografía básica"
                  className="aspect-square object-cover rounded-lg mb-4"
                />
                <div className="flex-1">
                  <h3 className="mb-2 text-lg font-semibold">
                    Curso de Fotografía básica
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Elementos de la Fotografía, Composición, Manejo de las
                    cámaras, Edición, Salidas fotográficas.
                  </p>
                </div>
              </div>
              <div className="group flex flex-col rounded-lg bg-white dark:bg-gray-950 border border-gray-200 shadow-sm transition-all hover:shadow-lg dark:border-gray-800 dark:hover:bg-gray-800 p-6 min-h-full">
                <Image
                  src="/manicura.jpg"
                  width={500}
                  height={500}
                  alt="Curso de Manicura y podología"
                  className="aspect-square object-cover rounded-lg mb-4"
                />
                <div className="flex-1">
                  <h3 className="mb-2 text-lg font-semibold">
                    Curso de Manicura y podología
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Domina técnicas especializadas en manicura y podología con
                    nuestro curso, enfocado en brindar habilidades prácticas y
                    conocimientos fundamentales para el cuidado profesional de
                    manos, uñas y pies.
                  </p>
                </div>
              </div>
              <div className="group flex flex-col rounded-lg bg-white dark:bg-gray-950 border border-gray-200 shadow-sm transition-all hover:shadow-lg dark:border-gray-800 dark:hover:bg-gray-800 p-6 min-h-full">
                <Image
                  src="/tecnicasspa.jpg"
                  width={500}
                  height={500}
                  alt="Aromaterapia"
                  className="aspect-square object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="mb-2 text-lg font-semibold">
                    Curso de Técnicas de spa
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Aromaterapia, Fitoterapia, Cromoterapia, Musicoterapia.
                    Cómo, cuándo y cuáles aplicar. Tratamientos en gabinete.
                    Cuándo derivar.
                  </p>
                </div>
              </div>
              <div className="group flex flex-col rounded-lg bg-white dark:bg-gray-950 border border-gray-200 shadow-sm transition-all hover:shadow-lg dark:border-gray-800 dark:hover:bg-gray-800 p-6 min-h-full">
                <Image
                  src="/php.jpg"
                  width={500}
                  height={500}
                  alt="Curso de PHP"
                  className="aspect-square object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="mb-2 text-lg font-semibold">Curso de PHP</h3>
                  <p className=" text-gray-500 dark:text-gray-400">
                    Introducción, entornos virtuales. Capa de modelo, vistas,
                    plantillas. PostgreSQL: creación de base de datos. HTML,
                    CSS, JavaScript, Python.
                  </p>
                </div>
              </div>
              <div className="group flex flex-col rounded-lg bg-white dark:bg-gray-950 border border-gray-200 shadow-sm transition-all hover:shadow-lg dark:border-gray-800 dark:hover:bg-gray-800 p-6 min-h-full">
                <Image
                  src="/javacurso.jpg"
                  width={500}
                  height={500}
                  alt="Curso de Java"
                  className="aspect-square object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="mb-2 text-lg font-semibold">Curso de Java</h3>
                  <p className=" text-gray-500 dark:text-gray-400">
                    Sumérgete en el mundo del desarrollo de software con nuestro
                    curso de Java, diseñado para proporcionar una comprensión
                    profunda de la programación orientada a objetos,
                    aplicaciones prácticas en el desarrollo de software y
                    habilidades esenciales para construir aplicaciones robustas
                    y escalables.
                  </p>
                </div>
              </div>
              <div className="group flex flex-col rounded-lg bg-white dark:bg-gray-950 border border-gray-200 shadow-sm transition-all hover:shadow-lg dark:border-gray-800 dark:hover:bg-gray-800 p-6 min-h-full">
                <Image
                  src="/c++curso.jpg"
                  width={500}
                  height={500}
                  alt="Curso de Introducción a la programación"
                  className="aspect-square object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="mb-2 text-lg font-semibold">
                    Curso de Introducción a la programación
                  </h3>
                  <p className=" text-gray-500 dark:text-gray-400">
                    Análisis y diseño de algoritmos. Estructuras de control.
                    Estructuras estáticas. Funciones y procedimientos.
                  </p>
                </div>
              </div>
              <div className="group flex flex-col rounded-lg bg-white dark:bg-gray-950 border border-gray-200 shadow-sm transition-all hover:shadow-lg dark:border-gray-800 dark:hover:bg-gray-800 p-6 min-h-full">
                <Image
                  src="/barberia.jpg"
                  width={500}
                  height={500}
                  alt="Curso de Barbería"
                  className="aspect-square object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="mb-2 text-lg font-semibold">
                    Curso de Barbería y corte masculino
                  </h3>
                  <p className=" text-gray-500 dark:text-gray-400">
                    Degradados y tipos, Estilos y tendencias. Visagismo. Diseños
                    y freestyle.
                  </p>
                </div>
              </div>
              <div className="group flex flex-col rounded-lg bg-white dark:bg-gray-950 border border-gray-200 shadow-sm transition-allhover:shadow-lg dark:border-gray-800 dark:hover:bg-gray-800 p-6 min-h-full">
                <Image
                  src="/drenaje.jpg"
                  width={500}
                  height={500}
                  alt="Curso de Drenaje linfático"
                  className="aspect-square object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="mb-2 text-lg font-semibold">
                    Curso de Drenaje linfático
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    El curso de drenaje linfático ofrece formación especializada
                    en técnicas manuales para estimular el sistema linfático,
                    mejorando la circulación y reduciendo la retención de
                    líquidos. Incluye teoría sobre la anatomía y fisiología del
                    sistema linfático, así como prácticas supervisadas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
