"use client";
import Link from "next/link";
import Carousel from "../componentes/Slider";
import Footer from "@/app/componentes/footer";
import Header from "@/app/componentes/header";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import SecondNav from "../componentes/secondnavbar";

export default function Component() {
  return (
    <div>
      <Header />
        <Carousel />
        <SecondNav/>
      <div className="bg-gray-100 w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div id="tecnicaturas" className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-14">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Tecnicaturas Superiores
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
              Explora nuestras diversas opciones de tecnicaturas y encuentra la
              que mejor se adapte a tus intereses y objetivos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-5 gap-6">
            <div className="group">
              <div className="grid gap-4 rounded-lg bg-white dark:bg-gray-950 border border-gray-200 shadow-sm transition-all hover:shadow-lg dark:border-gray-800 dark:hover:bg-gray-800 p-6 min-h-full flex flex-col">
                <Image
                  src="/Tecsistemas.jpeg"
                  width={500}
                  height={500}
                  alt="tecnicatura analista de sistemas"
                  className="aspect-square object-cover rounded-lg"
                />
                <Link href="/tecnicaturas/tecsistemas" prefetch={false}>
                  <h3 className="mb-2 text-lg font-semibold group-hover:text-primary-500 dark:group-hover:text-primary-400">
                    Tecnicatura Superior en Analista de Sistemas
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Desarrolla habilidades en programación, bases de datos y
                    redes.
                  </p>
                  <Button variant="link">Ver más</Button>
                </Link>
              </div>
            </div>
            <div className="group">
              <div className="grid gap-4 rounded-lg bg-white dark:bg-gray-950 border border-gray-200 shadow-sm transition-all hover:shadow-lg dark:border-gray-800 dark:hover:bg-gray-800 p-6 min-h-full flex flex-col">
                <Image
                  src="/tecgrafico.jfif"
                  width={500}
                  height={500}
                  alt="tecnicatura diseño gráfico"
                  className="aspect-square object-cover rounded-lg"
                />
                <Link href="/tecnicaturas/tecgrafico" prefetch={false}>
                  <h3 className="mb-2 text-lg font-semibold group-hover:text-primary-500 dark:group-hover:text-primary-400">
                    Tecnicatura Superior en Diseño Gráfico Digital
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Aprende a crear diseños visuales impactantes y atractivos.
                  </p>
                  <Button variant="link">Ver más</Button>
                </Link>
              </div>
            </div>
            <div className="group">
              <div className="grid gap-4 rounded-lg bg-white dark:bg-gray-950 border border-gray-200 shadow-sm transition-all hover:shadow-lg dark:border-gray-800 dark:hover:bg-gray-800 p-6 min-h-full flex flex-col">
                <Image
                  src="/tecjuridica.jfif"
                  width={500}
                  height={500}
                  alt="tecnicatura gestión jurídica"
                  className="aspect-square object-cover rounded-lg"
                />
                <Link href="/tecnicaturas/tecjuridica" prefetch={false}>
                  <h3 className="mb-2 text-lg font-semibold group-hover:text-primary-500 dark:group-hover:text-primary-400">
                    Tecnicatura Superior en Gestión Jurídica Generalista
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Formación especializada en gestión jurídica generalista,
                    proporcionando habilidades fundamentales para abordar
                    diversos aspectos legales con eficacia y precisión.
                  </p>
                  <Button variant="link">Ver más</Button>
                </Link>
              </div>
            </div>
            <div className="group">
              <div className="grid gap-4 rounded-lg bg-white dark:bg-gray-950 border border-gray-200 shadow-sm transition-all hover:shadow-lg dark:border-gray-800 dark:hover:bg-gray-800 p-6 min-h-full flex flex-col">
                <Image
                  src="/tecestetica.jfif"
                  width={500}
                  height={500}
                  alt="tecnicatura cosmetología"
                  className="aspect-square object-cover rounded-lg"
                />
                <Link href="/tecnicaturas/teccosmetica" prefetch={false}>
                  <h3 className="mb-2 text-lg font-semibold group-hover:text-primary-500 dark:group-hover:text-primary-400">
                    Tecnicatura Superior en Cosmetología, Cosmiatría y Estética
                    Profesional
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Especialízate en técnicas avanzadas de cosmetología,
                    cosmiatría y estética profesional para dominar el arte del
                    cuidado estético y facial.
                  </p>
                  <Button variant="link">Ver más</Button>
                </Link>
              </div>
            </div>
            <div className="group">
              <div className="grid gap-4 rounded-lg bg-white dark:bg-gray-950 border border-gray-200 shadow-sm transition-all hover:shadow-lg dark:border-gray-800 dark:hover:bg-gray-800 p-6 min-h-full flex flex-col">
                <Image
                  src="/teccontable.jfif"
                  width={500}
                  height={500}
                  alt="tecnicatura contable"
                  className="aspect-square object-cover rounded-lg"
                />
                <Link href="/tecnicaturas/teccontable" prefetch={false}>
                  <h3 className="mb-2 text-lg font-semibold group-hover:text-primary-500 dark:group-hover:text-primary-400">
                    Tecnicatura Superior en Gestión Impositiva, Previsional y
                    Contable
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Desarrolla competencias clave en el manejo integral de la
                    Gestión impositiva, previsional y contable.
                  </p>
                  <Button variant="link">Ver más</Button>
                </Link>
              </div>
            </div>
          </div>

          <div id="formaciones">
            <section className="w-full py-12 md:py-24 lg:py-32">
              <div className="container px-4 md:px-6">
                <div className="grid gap-6 md:gap-8">
                  <div className="grid gap-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                      Formaciones Profesionales
                    </h2>
                    <p className="max-w-[700px] text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
                      Explora nuestras opciones de formaciones y encuentra la
                      que mejor se adapte a tus objetivos profesionales.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <div className="group flex flex-col rounded-lg bg-white dark:bg-gray-950 border border-gray-200 shadow-sm transition-all hover:shadow-lg dark:border-gray-800 dark:hover:bg-gray-800 p-6 min-h-full">
                      <Image
                        src="/operador pc.jpeg"
                        width={500}
                        height={500}
                        alt="Operador de informática"
                        className="aspect-square object-cover rounded-lg mb-4"
                      />
                      <div className="flex-1">
                        <h3 className="mb-2 text-lg font-semibold">
                          Operador de informática
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Formación esencial en operación y gestión de sistemas
                          informáticos.
                        </p>
                      </div>
                    </div>
                    <div className="group flex flex-col rounded-lg bg-white dark:bg-gray-950 border border-gray-200 shadow-sm transition-all hover:shadow-lg dark:border-gray-800 dark:hover:bg-gray-800 p-6 min-h-full">
                      <Image
                        src="/masajistaprof.jpeg"
                        width={500}
                        height={500}
                        alt="Masajista Profesional"
                        className="aspect-square object-cover rounded-lg mb-4"
                      />
                      <div className="flex-1">
                        <h3 className="mb-2 text-lg font-semibold">
                          Masajista Profesional
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Entrenamiento especializado en técnicas avanzadas para
                          masajistas profesionales.
                        </p>
                      </div>
                    </div>
                    <div className="group flex flex-col rounded-lg bg-white dark:bg-gray-950 border border-gray-200 shadow-sm transition-all hover:shadow-lg dark:border-gray-800 dark:hover:bg-gray-800 p-6 min-h-full">
                      <Image
                        src="/estilista.jpeg"
                        width={500}
                        height={500}
                        alt="Estilista Profesional"
                        className="aspect-square object-cover rounded-lg mb-4"
                      />
                      <div className="flex-1">
                        <h3 className="mb-2 text-lg font-semibold">
                          Estilista Profesional
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Formación integral en técnicas de estilismo para
                          aspirantes a profesionales.
                        </p>
                      </div>
                    </div>
                    <div className="group flex flex-col rounded-lg bg-white dark:bg-gray-950 border border-gray-200 shadow-sm transition-all hover:shadow-lg dark:border-gray-800 dark:hover:bg-gray-800 p-6 min-h-full">
                      <Image
                        src="/admin contable.jpeg"
                        width={500}
                        height={500}
                        alt="Administrativo Contable"
                        className="aspect-square object-cover rounded-lg mb-4"
                      />
                      <div className="flex-1">
                        <h3 className="mb-2 text-lg font-semibold">
                          Administrativo Contable
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Formación especializada en administración y
                          contabilidad empresarial.
                        </p>
                      </div>
                    </div>
                    <div className="group flex flex-col rounded-lg bg-white dark:bg-gray-950 border border-gray-200 shadow-sm transition-all hover:shadow-lg dark:border-gray-800 dark:hover:bg-gray-800 p-6 min-h-full">
                      <Image
                        src="/reparacion pc.jpeg"
                        width={500}
                        height={500}
                        alt="Armado y configuración de PC y notebook"
                        className="aspect-square object-cover rounded-lg mb-4"
                      />
                      <div className="flex-1">
                        <h3 className="mb-2 text-lg font-semibold">
                          Armado y configuración de PC y notebook
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Curso especializado en ensamblaje y configuración de
                          computadoras y notebooks.
                        </p>
                      </div>
                    </div>
                    <div className="group flex flex-col rounded-lg bg-white dark:bg-gray-950 border border-gray-200 shadow-sm transition-all hover:shadow-lg dark:border-gray-800 dark:hover:bg-gray-800 p-6 min-h-full">
                      <Image
                        src="/instalacion redes.jpeg"
                        width={500}
                        height={500}
                        alt="Instalación y reparación de sistemas electrónicos y de seguridad."
                        className="aspect-square object-cover rounded-lg mb-4"
                      />
                      <div className="flex-1">
                        <h3 className="mb-2 text-lg font-semibold">
                          Instalación y reparación de sistemas electrónicos y de
                          seguridad
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Curso avanzado en montaje y reparación de sistemas
                          electrónicos y seguridad.
                        </p>
                      </div>
                    </div>
                    <div className="group flex flex-col rounded-lg bg-white dark:bg-gray-950 border border-gray-200 shadow-sm transition-all hover:shadow-lg dark:border-gray-800 dark:hover:bg-gray-800 p-6 min-h-full">
                      <Image
                        src="/inst redes 2.jpeg"
                        width={500}
                        height={500}
                        alt="Configuración, administración e instalación de redes."
                        className="aspect-square object-cover rounded-lg mb-4"
                      />
                      <div className="flex-1">
                        <h3 className="mb-2 text-lg font-semibold">
                          Configuración, administración e instalación de redes
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Dominio integral en configuración, administración e
                          instalación avanzada de redes informáticas.
                        </p>
                      </div>
                    </div>
                    <div className="group flex flex-col rounded-lg bg-white dark:bg-gray-950 border border-gray-200 shadow-sm transition-all hover:shadow-lg dark:border-gray-800 dark:hover:bg-gray-800 p-6 min-h-full">
                      <Image
                        src="/estetica.jpg"
                        width={500}
                        height={500}
                        alt="Estética Profesional"
                        className="aspect-square object-cover rounded-lg mb-4"
                      />
                      <div className="flex-1">
                        <h3 className="mb-2 text-lg font-semibold">
                          Estética Profesional
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Perfeccionamiento en técnicas avanzadas de estética
                          para profesionales del cuidado personal.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <section id="cursos" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 md:gap-8">
                <div className="grid gap-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Cursos
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
                    Explora nuestra amplia gama de cursos diseñados para
                    impulsar tu desarrollo profesional.
                  </p>
                </div>
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
                        Domina técnicas especializadas en manicura y podología
                        con nuestro curso, enfocado en brindar habilidades
                        prácticas y conocimientos fundamentales para el cuidado
                        profesional de manos, uñas y pies.
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
                      <h3 className="mb-2 text-lg font-semibold">
                        Curso de PHP
                      </h3>
                      <p className=" text-gray-500 dark:text-gray-400">
                        Introducción, entornos virtuales. Capa de modelo,
                        vistas, plantillas. PostgreSQL: creación de base de
                        datos. HTML, CSS, JavaScript, Python.
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
                      <h3 className="mb-2 text-lg font-semibold">
                        Curso de Java
                      </h3>
                      <p className=" text-gray-500 dark:text-gray-400">
                        Sumérgete en el mundo del desarrollo de software con
                        nuestro curso de Java, diseñado para proporcionar una
                        comprensión profunda de la programación orientada a
                        objetos, aplicaciones prácticas en el desarrollo de
                        software y habilidades esenciales para construir
                        aplicaciones robustas y escalables.
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
                        Degradados y tipos, Estilos y tendencias. Visagismo.
                        Diseños y freestyle.
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
                        El curso de drenaje linfático ofrece formación
                        especializada en técnicas manuales para estimular el
                        sistema linfático, mejorando la circulación y reduciendo
                        la retención de líquidos. Incluye teoría sobre la
                        anatomía y fisiología del sistema linfático, así como
                        prácticas supervisadas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
