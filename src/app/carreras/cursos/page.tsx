"use client";
import Link from "next/link";
import Footer from "@/app/componentes/footer";
import Header from "@/app/componentes/header";
import Image from "next/image";
import Carousel3 from "@/app/componentes/slider3";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function cursos() {
  return (
    <div>
      <Header />
      <Carousel3 />
      <section id="cursos" className="w-full py-12 md:py-24 lg:py-32">
        \
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:gap-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
              <div className="group flex flex-col rounded-lg bg-white dark:bg-gray-950 border border-gray-200 shadow-sm transition-all hover:shadow-lg dark:border-gray-800 dark:hover:bg-gray-800 p-6 min-h-full">
                <Image
                  src="/graficocurso.jpg"
                  width={500}
                  height={500}
                  alt="diseño gráfico digital"
                  className="aspect-square object-cover rounded-lg mb-4"
                />
                <div className="flex-1">
                  <h3 className="mb-2 text-lg font-semibold"></h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400"></p>
                </div>
                <Accordion type="single" collapsible className="w-full mt-4">
                  <AccordionItem value="nombre">
                    <AccordionTrigger>Curso</AccordionTrigger>
                    <AccordionContent>
                      Curso de Diseño gráfico digital
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="descripcion">
                    <AccordionTrigger>Descripción</AccordionTrigger>
                    <AccordionContent>
                      CorelDRAW, Photoshop, SketchUp.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="modalidad">
                    <AccordionTrigger>Modalidad</AccordionTrigger>
                    <AccordionContent>Presencial.</AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="group flex flex-col rounded-lg bg-white dark:bg-gray-950 border border-gray-200 shadow-sm transition-all hover:shadow-lg dark:border-gray-800 dark:hover:bg-gray-800 p-6 min-h-full">
                <Image
                  src="/fotobasica.jpg"
                  width={500}
                  height={500}
                  alt="Fotografía básica"
                  className="aspect-square object-cover rounded-lg mb-4"
                />
                <Accordion type="single" collapsible className="w-full mt-4">
                  <AccordionItem value="nombre">
                    <AccordionTrigger>Curso</AccordionTrigger>
                    <AccordionContent>Fotografía básica</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="descripcion">
                    <AccordionTrigger>Descripción</AccordionTrigger>
                    <AccordionContent>
                      Elementos de la Fotografía, Composición, Manejo de las
                      cámaras, Edición, Salidas fotográficas.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="modalidad">
                    <AccordionTrigger>Modalidad</AccordionTrigger>
                    <AccordionContent>Presencial.</AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div className="group flex flex-col rounded-lg bg-white dark:bg-gray-950 border border-gray-200 shadow-sm transition-all hover:shadow-lg dark:border-gray-800 dark:hover:bg-gray-800 p-6 min-h-full">
                <Image
                  src="/manicura.jpg"
                  width={500}
                  height={100}
                  alt="Curso de Manicura y podología"
                  className="aspect-square object-cover rounded-lg mb-4"
                />
                <Accordion type="single" collapsible className="w-full mt-4">
                  <AccordionItem value="nombre">
                    <AccordionTrigger>Curso</AccordionTrigger>
                    <AccordionContent>Belleza de Manos y pies</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="descripcion">
                    <AccordionTrigger>Descripción</AccordionTrigger>
                    <AccordionContent>
                      Domina técnicas especializadas en belleza manos y pies con
                      nuestro curso, enfocado en brindar habilidades prácticas y
                      conocimientos fundamentales para el cuidado profesional de
                      manos, uñas y pies.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="modalidad">
                    <AccordionTrigger>Modalidad</AccordionTrigger>
                    <AccordionContent>Presencial.</AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div className="group flex flex-col rounded-lg bg-white dark:bg-gray-950 border border-gray-200 shadow-sm transition-all hover:shadow-lg dark:border-gray-800 dark:hover:bg-gray-800 p-6 min-h-full">
                <Image
                  src="/tecnicasspa.jpg"
                  width={500}
                  height={500}
                  alt="Aromaterapia"
                  className="aspect-square object-cover rounded-lg"
                />

                <Accordion type="single" collapsible className="w-full mt-4">
                  <AccordionItem value="nombre">
                    <AccordionTrigger>Curso</AccordionTrigger>
                    <AccordionContent>Técnicas de spa</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="descripcion">
                    <AccordionTrigger>Descripción</AccordionTrigger>
                    <AccordionContent>
                      Aromaterapia, Fitoterapia, Cromoterapia, Musicoterapia.
                      Cómo, cuándo y cuáles aplicar. Tratamientos en gabinete.
                      Cuándo derivar.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="modalidad">
                    <AccordionTrigger>Modalidad</AccordionTrigger>
                    <AccordionContent>Presencial.</AccordionContent>
                  </AccordionItem>
                </Accordion>
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
                  <h3 className="mb-2 text-lg font-semibold">Curso de </h3>
                  <p className=" text-gray-500 dark:text-gray-400"></p>
                </div>
                <Accordion type="single" collapsible className="w-full mt-4">
                  <AccordionItem value="nombre">
                    <AccordionTrigger>Curso</AccordionTrigger>
                    <AccordionContent>PHP</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="descripcion">
                    <AccordionTrigger>Descripción</AccordionTrigger>
                    <AccordionContent>
                      Introducción, entornos virtuales. Capa de modelo, vistas,
                      plantillas. PostgreSQL: creación de base de datos. HTML,
                      CSS, JavaScript, Python.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="modalidad">
                    <AccordionTrigger>Modalidad</AccordionTrigger>
                    <AccordionContent>Presencial.</AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="group flex flex-col rounded-lg bg-white dark:bg-gray-950 border border-gray-200 shadow-sm transition-all hover:shadow-lg dark:border-gray-800 dark:hover:bg-gray-800 p-6 min-h-full">
                <Image
                  src="/javacurso.jpg"
                  width={500}
                  height={500}
                  alt="Curso de Java"
                  className="aspect-square object-cover rounded-lg"
                />

                <Accordion type="single" collapsible className="w-full mt-4">
                  <AccordionItem value="nombre">
                    <AccordionTrigger>Curso</AccordionTrigger>
                    <AccordionContent>Java</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="descripcion">
                    <AccordionTrigger>Descripción</AccordionTrigger>
                    <AccordionContent>
                      Sumérgete en el mundo del desarrollo de software con
                      nuestro curso de Java, diseñado para proporcionar una
                      comprensión profunda de la programación orientada a
                      objetos, aplicaciones prácticas en el desarrollo de
                      software y habilidades esenciales para construir
                      aplicaciones robustas y escalables.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="modalidad">
                    <AccordionTrigger>Modalidad</AccordionTrigger>
                    <AccordionContent>Presencial.</AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="group flex flex-col rounded-lg bg-white dark:bg-gray-950 border border-gray-200 shadow-sm transition-all hover:shadow-lg dark:border-gray-800 dark:hover:bg-gray-800 p-6 min-h-full">
                <Image
                  src="/c++curso.jpg"
                  width={500}
                  height={500}
                  alt="Curso de Introducción a la programación"
                  className="aspect-square object-cover rounded-lg"
                />
                <Accordion type="single" collapsible className="w-full mt-4">
                  <AccordionItem value="nombre">
                    <AccordionTrigger>Curso</AccordionTrigger>
                    <AccordionContent>
                      Introducción a la programación
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="descripcion">
                    <AccordionTrigger>Descripción</AccordionTrigger>
                    <AccordionContent>
                      Análisis y diseño de algoritmos. Estructuras de control.
                      Estructuras estáticas. Funciones y procedimientos.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="modalidad">
                    <AccordionTrigger>Modalidad</AccordionTrigger>
                    <AccordionContent>Presencial.</AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="group flex flex-col rounded-lg bg-white dark:bg-gray-950 border border-gray-200 shadow-sm transition-all hover:shadow-lg dark:border-gray-800 dark:hover:bg-gray-800 p-6 min-h-full">
                <Image
                  src="/barberia.jpg"
                  width={500}
                  height={500}
                  alt="Curso de Barbería"
                  className="aspect-square object-cover rounded-lg"
                />

                <Accordion type="single" collapsible className="w-full mt-4">
                  <AccordionItem value="nombre">
                    <AccordionTrigger>Curso</AccordionTrigger>
                    <AccordionContent>
                      Barbería y corte masculino
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="descripcion">
                    <AccordionTrigger>Descripción</AccordionTrigger>
                    <AccordionContent>
                      Degradados y tipos, Estilos y tendencias. Visagismo.
                      Diseños y freestyle.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="modalidad">
                    <AccordionTrigger>Modalidad</AccordionTrigger>
                    <AccordionContent>Presencial.</AccordionContent>
                  </AccordionItem>
                </Accordion>
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
                  <h3 className="mb-2 text-lg font-semibold">Curso de</h3>
                  <p className="text-gray-500 dark:text-gray-400"></p>
                </div>
                <Accordion type="single" collapsible className="w-full mt-4">
                  <AccordionItem value="nombre">
                    <AccordionTrigger>Curso</AccordionTrigger>
                    <AccordionContent>Drenaje linfático</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="descripcion">
                    <AccordionTrigger>Descripción</AccordionTrigger>
                    <AccordionContent>
                      El curso de drenaje linfático ofrece formación
                      especializada en técnicas manuales para estimular el
                      sistema linfático, mejorando la circulación y reduciendo
                      la retención de líquidos. Incluye teoría sobre la anatomía
                      y fisiología del sistema linfático, así como prácticas
                      supervisadas.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="modalidad">
                    <AccordionTrigger>Modalidad</AccordionTrigger>
                    <AccordionContent>Presencial.</AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
