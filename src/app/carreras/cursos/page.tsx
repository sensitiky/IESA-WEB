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
                  src="/diseño grafico.webp"
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
                  src="/fotografia1.webp"
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
                  src="/fotografia2.webp"
                  width={500}
                  height={500}
                  alt="Fotografía avanzada"
                  className="aspect-square object-cover rounded-lg mb-4"
                />
                <Accordion type="single" collapsible className="w-full mt-4">
                  <AccordionItem value="nombre">
                    <AccordionTrigger>Curso</AccordionTrigger>
                    <AccordionContent>Fotografía avanzada</AccordionContent>
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
                  src="/manosypies copia 2.webp"
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
                  src="/spa.webp"
                  width={500}
                  height={500}
                  alt="Spa"
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
                  src="/maquillaje.webp"
                  width={500}
                  height={500}
                  alt="Maquillaje"
                  className="aspect-square object-cover rounded-lg"
                />

                <Accordion type="single" collapsible className="w-full mt-4">
                  <AccordionItem value="nombre">
                    <AccordionTrigger>Curso</AccordionTrigger>
                    <AccordionContent>Maquillaje</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="descripcion">
                    <AccordionTrigger>Descripción</AccordionTrigger>
                    <AccordionContent>
                      Maquillaje social, Maquillaje de fotografía y video,
                      Maquillaje de moda, Maquillaje artístico.
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
                  src="/colorimetria.webp"
                  width={500}
                  height={500}
                  alt="Curso de Colorimetria"
                  className="aspect-square object-cover rounded-lg"
                />

                <Accordion type="single" collapsible className="w-full mt-4">
                  <AccordionItem value="nombre">
                    <AccordionTrigger>Curso</AccordionTrigger>
                    <AccordionContent>Colorimetría</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="descripcion">
                    <AccordionTrigger>Descripción</AccordionTrigger>
                    <AccordionContent>
                      Aprende a aplicar y combinar colores de forma profesional
                      en diseño, moda y belleza.
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
                  src="/aparatologia.webp"
                  width={500}
                  height={500}
                  alt="Curso de Aparatologia"
                  className="aspect-square object-cover rounded-lg"
                />

                <Accordion type="single" collapsible className="w-full mt-4">
                  <AccordionItem value="nombre">
                    <AccordionTrigger>Curso</AccordionTrigger>
                    <AccordionContent>Aparatología</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="descripcion">
                    <AccordionTrigger>Descripción</AccordionTrigger>
                    <AccordionContent>
                      Domina el uso de equipos estéticos avanzados para
                      tratamientos de belleza y cuidado personal.
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
                  src="/aparatologia.webp"
                  width={500}
                  height={500}
                  alt="Curso de Aparatologia"
                  className="aspect-square object-cover rounded-lg"
                />

                <Accordion type="single" collapsible className="w-full mt-4">
                  <AccordionItem value="nombre">
                    <AccordionTrigger>Curso</AccordionTrigger>
                    <AccordionContent>Aparatología</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="descripcion">
                    <AccordionTrigger>Descripción</AccordionTrigger>
                    <AccordionContent>
                      Domina el uso de equipos estéticos avanzados para
                      tratamientos de belleza y cuidado personal.
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
                  src="/depilacion.webp"
                  width={500}
                  height={500}
                  alt="Curso de Depilacion"
                  className="aspect-square object-cover rounded-lg"
                />

                <Accordion type="single" collapsible className="w-full mt-4">
                  <AccordionItem value="nombre">
                    <AccordionTrigger>Curso</AccordionTrigger>
                    <AccordionContent>Depilación</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="descripcion">
                    <AccordionTrigger>Descripción</AccordionTrigger>
                    <AccordionContent>
                      Aprende técnicas profesionales de depilación para
                      distintos tipos de piel y métodos, garantizando resultados
                      seguros y eficaces.
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
                  src="/c++.webp"
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
                  src="/java.webp"
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
                  src="/php.webp"
                  width={500}
                  height={500}
                  alt="Curso de PHP"
                  className="aspect-square object-cover rounded-lg"
                />
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
                  src="/python.webp"
                  width={500}
                  height={500}
                  alt="Curso de Python"
                  className="aspect-square object-cover rounded-lg"
                />
                <Accordion type="single" collapsible className="w-full mt-4">
                  <AccordionItem value="nombre">
                    <AccordionTrigger>Curso</AccordionTrigger>
                    <AccordionContent>Python</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="descripcion">
                    <AccordionTrigger>Descripción</AccordionTrigger>
                    <AccordionContent>
                      Aprende a programar en Python, desde conceptos básicos
                      hasta aplicaciones avanzadas en diversos proyectos.
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
                  src="/project.webp"
                  width={500}
                  height={500}
                  alt="Curso de Project Manager"
                  className="aspect-square object-cover rounded-lg"
                />
                <Accordion type="single" collapsible className="w-full mt-4">
                  <AccordionItem value="nombre">
                    <AccordionTrigger>Curso</AccordionTrigger>
                    <AccordionContent>Project Manager</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="descripcion">
                    <AccordionTrigger>Descripción</AccordionTrigger>
                    <AccordionContent>
                      Gestiona proyectos eficientemente, coordinando equipos,
                      plazos y recursos para alcanzar objetivos definidos.
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
                  src="/aplicaciones.webp"
                  width={500}
                  height={500}
                  alt="Curso de Desarrollo Movil"
                  className="aspect-square object-cover rounded-lg"
                />
                <Accordion type="single" collapsible className="w-full mt-4">
                  <AccordionItem value="nombre">
                    <AccordionTrigger>Curso</AccordionTrigger>
                    <AccordionContent>Desarrollo Móvil</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="descripcion">
                    <AccordionTrigger>Descripción</AccordionTrigger>
                    <AccordionContent>
                      Aprende a crear aplicaciones móviles funcionales y
                      atractivas para Android e iOS desde cero.
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
                  src="/autocad.webp"
                  width={500}
                  height={500}
                  alt="Curso de Autocad"
                  className="aspect-square object-cover rounded-lg"
                />
                <Accordion type="single" collapsible className="w-full mt-4">
                  <AccordionItem value="nombre">
                    <AccordionTrigger>Curso</AccordionTrigger>
                    <AccordionContent>Autocad</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="descripcion">
                    <AccordionTrigger>Descripción</AccordionTrigger>
                    <AccordionContent>
                      Domina el diseño asistido por computadora para crear
                      planos y modelos 2D y 3D con precisión.
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
                  src="/tecnologias.webp"
                  width={500}
                  height={500}
                  alt="Curso de Tecnologias"
                  className="aspect-square object-cover rounded-lg"
                />
                <Accordion type="single" collapsible className="w-full mt-4">
                  <AccordionItem value="nombre">
                    <AccordionTrigger>Curso</AccordionTrigger>
                    <AccordionContent>
                      Tecnologías de la información y la comunicación
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="descripcion">
                    <AccordionTrigger>Descripción</AccordionTrigger>
                    <AccordionContent>
                      Introducción, entornos virtuales. Capa de modelo, vistas,
                      plantillas.
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
                  src="/videojuegos.webp"
                  width={500}
                  height={500}
                  alt="Curso de Videojuegos"
                  className="aspect-square object-cover rounded-lg"
                />
                <Accordion type="single" collapsible className="w-full mt-4">
                  <AccordionItem value="nombre">
                    <AccordionTrigger>Curso</AccordionTrigger>
                    <AccordionContent>
                      Game developer para jóvenes y niños
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="descripcion">
                    <AccordionTrigger>Descripción</AccordionTrigger>
                    <AccordionContent>
                      Aprende a crear juegos interactivos y divertidos usando
                      herramientas accesibles para jóvenes y niños.
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
                  src="/tango.webp"
                  width={500}
                  height={500}
                  alt="Curso de Tango gestion"
                  className="aspect-square object-cover rounded-lg"
                />
                <Accordion type="single" collapsible className="w-full mt-4">
                  <AccordionItem value="nombre">
                    <AccordionTrigger>Curso</AccordionTrigger>
                    <AccordionContent>Tango Gestión</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="descripcion">
                    <AccordionTrigger>Descripción</AccordionTrigger>
                    <AccordionContent>
                      Domina el software Tango Gestión para la administración
                      integral de empresas y negocios.
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
                  src="/streaming.webp"
                  width={500}
                  height={500}
                  alt="Curso de Streaming"
                  className="aspect-square object-cover rounded-lg"
                />
                <Accordion type="single" collapsible className="w-full mt-4">
                  <AccordionItem value="nombre">
                    <AccordionTrigger>Curso</AccordionTrigger>
                    <AccordionContent>
                      Streaming y grabación de video
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="descripcion">
                    <AccordionTrigger>Descripción</AccordionTrigger>
                    <AccordionContent>
                      Aprende a transmitir y grabar videos de alta calidad con
                      técnicas y herramientas profesionales.
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
                  src="/ganancias.webp"
                  width={500}
                  height={500}
                  alt="Curso de Ganancias y Bienes Personales"
                  className="aspect-square object-cover rounded-lg"
                />
                <Accordion type="single" collapsible className="w-full mt-4">
                  <AccordionItem value="nombre">
                    <AccordionTrigger>Curso</AccordionTrigger>
                    <AccordionContent>
                      Liquidación de Ganancias y Bienes Personales
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="descripcion">
                    <AccordionTrigger>Descripción</AccordionTrigger>
                    <AccordionContent>
                      Aprende a calcular y gestionar impuestos sobre ganancias y
                      bienes personales de manera precisa y eficiente.
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
                  src="/gestoria.webp"
                  width={500}
                  height={500}
                  alt="Curso de Gestoria"
                  className="aspect-square object-cover rounded-lg"
                />
                <Accordion type="single" collapsible className="w-full mt-4">
                  <AccordionItem value="nombre">
                    <AccordionTrigger>Curso</AccordionTrigger>
                    <AccordionContent>Gestoría </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="descripcion">
                    <AccordionTrigger>Descripción</AccordionTrigger>
                    <AccordionContent>
                      Capacítate en la gestión de trámites administrativos y
                      legales para empresas y particulares.
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
                  src="/barberia.webp"
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
                  src="/drenaje.webp"
                  width={500}
                  height={500}
                  alt="Curso de Drenaje linfático"
                  className="aspect-square object-cover rounded-lg"
                />
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

              <div className="group flex flex-col rounded-lg bg-white dark:bg-gray-950 border border-gray-200 shadow-sm transition-allhover:shadow-lg dark:border-gray-800 dark:hover:bg-gray-800 p-6 min-h-full">
                <Image
                  src="/ingles.webp"
                  width={500}
                  height={500}
                  alt="Curso de Ingles"
                  className="aspect-square object-cover rounded-lg"
                />
                <Accordion type="single" collapsible className="w-full mt-4">
                  <AccordionItem value="nombre">
                    <AccordionTrigger>Curso</AccordionTrigger>
                    <AccordionContent>Inglés</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="descripcion">
                    <AccordionTrigger>Descripción</AccordionTrigger>
                    <AccordionContent>
                      Aprende inglés desde nivel básico hasta avanzado,
                      mejorando tus habilidades de conversación, lectura y
                      escritura.
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
                  src="/portugues.webp"
                  width={500}
                  height={500}
                  alt="Curso de Portugues"
                  className="aspect-square object-cover rounded-lg"
                />
                <Accordion type="single" collapsible className="w-full mt-4">
                  <AccordionItem value="nombre">
                    <AccordionTrigger>Curso</AccordionTrigger>
                    <AccordionContent>Portugués</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="descripcion">
                    <AccordionTrigger>Descripción</AccordionTrigger>
                    <AccordionContent>
                      Aprende portugués desde nivel básico hasta avanzado,
                      desarrollando habilidades de conversación, lectura y
                      escritura.
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
                  src="/reflexologia.webp"
                  width={500}
                  height={500}
                  alt="Curso de Reflexologia"
                  className="aspect-square object-cover rounded-lg"
                />
                <Accordion type="single" collapsible className="w-full mt-4">
                  <AccordionItem value="nombre">
                    <AccordionTrigger>Curso</AccordionTrigger>
                    <AccordionContent>Reflexología</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="descripcion">
                    <AccordionTrigger>Descripción</AccordionTrigger>
                    <AccordionContent>
                      En este curso de reflexología aprenderás a tratar
                      diferentes patologías y afecciones medicas de manera
                      efectiva, utilizando los puntos reflejos en los pies.
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
                  src="/notarial.webp"
                  width={500}
                  height={500}
                  alt="Curso de Asist Notarial"
                  className="aspect-square object-cover rounded-lg"
                />
                <Accordion type="single" collapsible className="w-full mt-4">
                  <AccordionItem value="nombre">
                    <AccordionTrigger>Curso</AccordionTrigger>
                    <AccordionContent>Asistente Notarial</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="descripcion">
                    <AccordionTrigger>Descripción</AccordionTrigger>
                    <AccordionContent>
                      Este curso está orientado a brindar a los alumnos los
                      elementos necesarios para desenvolverse con eficiencia e
                      idoneidad en las funciones prácticas de una Escribanía,
                      como asistente de Abogados o Escribanos.
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
                  src="/master office.webp"
                  width={500}
                  height={500}
                  alt="Curso de Master Office"
                  className="aspect-square object-cover rounded-lg"
                />
                <Accordion type="single" collapsible className="w-full mt-4">
                  <AccordionItem value="nombre">
                    <AccordionTrigger>Curso</AccordionTrigger>
                    <AccordionContent>Master Office</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="descripcion">
                    <AccordionTrigger>Descripción</AccordionTrigger>
                    <AccordionContent>
                      Este curso está orientado a destacarte en tu trabajo
                      manejando como experto Microsoft Office, el software clave
                      para potenciar tus tareas.
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
                  src="/marketing1.webp"
                  width={500}
                  height={500}
                  alt="Curso de Marketing"
                  className="aspect-square object-cover rounded-lg"
                />
                <Accordion type="single" collapsible className="w-full mt-4">
                  <AccordionItem value="nombre">
                    <AccordionTrigger>Curso</AccordionTrigger>
                    <AccordionContent>
                      Marketing y dirección comercial
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="descripcion">
                    <AccordionTrigger>Descripción</AccordionTrigger>
                    <AccordionContent>
                      Desarrollar con precisión una estrategia comercial,
                      implica tener en cuenta múltiples variables. A través de
                      este curso, podrás abordar cada una de ellas con visión
                      estratégica, desde las políticas de comunicación hasta los
                      canales de distribución, pasando por innovación, precio,
                      administración de la fuerza de ventas y satisfacción del
                      cliente.
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
                  src="/marketing2.webp"
                  width={500}
                  height={500}
                  alt="Curso de Marketing"
                  className="aspect-square object-cover rounded-lg"
                />
                <Accordion type="single" collapsible className="w-full mt-4">
                  <AccordionItem value="nombre">
                    <AccordionTrigger>Curso</AccordionTrigger>
                    <AccordionContent>
                      Marketing digital y comercio electrónico
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="descripcion">
                    <AccordionTrigger>Descripción</AccordionTrigger>
                    <AccordionContent>
                      Prepárate para iniciar una nueva carrera en marketing
                      digital y comercio electrónico, y adquiere las habilidades
                      necesarias para atraer y fidelizar a los clientes. Aprende
                      cómo los consumidores interactúan con las marcas y cómo
                      los especialistas utilizan las plataformas y herramientas
                      online para comprar y vender productos y servicios.
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
