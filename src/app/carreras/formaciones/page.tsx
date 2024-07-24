"use client";
import Link from "next/link";
import Footer from "@/app/componentes/footer";
import Header from "@/app/componentes/header";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Carousel2 from "@/app/componentes/slider2";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Formaciones() {
  return (
    <div id="formaciones">
      <Header />
      <Carousel2 />
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:gap-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
              <div className="group flex flex-col rounded-lg bg-white dark:bg-gray-950 border border-gray-200 shadow-sm transition-all hover:shadow-lg dark:border-gray-800 dark:hover:bg-gray-800 p-6 min-h-full">
                <Image
                  src="/operador.webp"
                  width={500}
                  height={500}
                  alt="Operador de informática"
                  className="aspect-square object-scale-down rounded-lg mb-4"
                />
                <Accordion type="single" collapsible className="w-full mt-4">
                  <AccordionItem value="nombre">
                    <AccordionTrigger>Nombre</AccordionTrigger>
                    <AccordionContent>Operador de informática</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="descripcion">
                    <AccordionTrigger>Descripción</AccordionTrigger>
                    <AccordionContent>
                      Formación esencial en operación y gestión de sistemas
                      informáticos.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="modalidad">
                    <AccordionTrigger>Modalidad</AccordionTrigger>
                    <AccordionContent>Presencial</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="duracion">
                    <AccordionTrigger>Duración</AccordionTrigger>
                    <AccordionContent>10 meses</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="resolucion">
                    <AccordionTrigger>Disp. SPEPM</AccordionTrigger>
                    <AccordionContent>Resuelto en código real</AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="group flex flex-col rounded-lg bg-white dark:bg-gray-950 border border-gray-200 shadow-sm transition-all hover:shadow-lg dark:border-gray-800 dark:hover:bg-gray-800 p-6 min-h-full">
                <Image
                  src="/masajista.webp"
                  width={500}
                  height={500}
                  alt="Masajista Profesional"
                  className="aspect-square object-scale-down rounded-lg mb-4"
                />
                <Accordion type="single" collapsible className="w-full mt-4">
                  <AccordionItem value="nombre">
                    <AccordionTrigger>Nombre</AccordionTrigger>
                    <AccordionContent>Masajista Profesional</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="descripcion">
                    <AccordionTrigger>Descripción</AccordionTrigger>
                    <AccordionContent>
                      Entrenamiento especializado en técnicas avanzadas para
                      masajistas profesionales.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="modalidad">
                    <AccordionTrigger>Modalidad</AccordionTrigger>
                    <AccordionContent>Presencial</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="duracion">
                    <AccordionTrigger>Duración</AccordionTrigger>
                    <AccordionContent>12 meses</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="resolucion">
                    <AccordionTrigger>Disp. SPEPM</AccordionTrigger>
                    <AccordionContent>Resuelto en código real</AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="group flex flex-col rounded-lg bg-white dark:bg-gray-950 border border-gray-200 shadow-sm transition-all hover:shadow-lg dark:border-gray-800 dark:hover:bg-gray-800 p-6 min-h-full">
                <Image
                  src="/estilista.webp"
                  width={500}
                  height={500}
                  alt="Estilista Profesional"
                  className="aspect-square object-scale-down rounded-lg mb-4"
                />
                <Accordion type="single" collapsible className="w-full mt-4">
                  <AccordionItem value="nombre">
                    <AccordionTrigger>Nombre</AccordionTrigger>
                    <AccordionContent>Estilista Profesional</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="descripcion">
                    <AccordionTrigger>Descripción</AccordionTrigger>
                    <AccordionContent>
                      Formación integral en técnicas de estilismo para
                      aspirantes a profesionales.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="modalidad">
                    <AccordionTrigger>Modalidad</AccordionTrigger>
                    <AccordionContent>Presencial</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="duracion">
                    <AccordionTrigger>Duración</AccordionTrigger>
                    <AccordionContent>12 meses</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="resolucion">
                    <AccordionTrigger>Disp. SPEPM</AccordionTrigger>
                    <AccordionContent>Resuelto en código real</AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="group flex flex-col rounded-lg bg-white dark:bg-gray-950 border border-gray-200 shadow-sm transition-all hover:shadow-lg dark:border-gray-800 dark:hover:bg-gray-800 p-6 min-h-full">
                <Image
                  src="/contable.webp"
                  width={500}
                  height={500}
                  alt="Administrativo Contable"
                  className="aspect-square object-scale-down  rounded-lg mb-4"
                />
                <div className="flex-1">
                  <h3 className="mb-2 text-lg font-semibold"></h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400"></p>
                </div>
                <Accordion type="single" collapsible className="w-full mt-4">
                  <AccordionItem value="nombre">
                    <AccordionTrigger>Nombre</AccordionTrigger>
                    <AccordionContent>Administrativo Contable</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="descripcion">
                    <AccordionTrigger>Descripción</AccordionTrigger>
                    <AccordionContent>
                      Formación especializada en administración y contabilidad
                      empresarial.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="modalidad">
                    <AccordionTrigger>Modalidad</AccordionTrigger>
                    <AccordionContent>Presencial</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="duracion">
                    <AccordionTrigger>Duración</AccordionTrigger>
                    <AccordionContent>10 meses</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="resolucion">
                    <AccordionTrigger>Disp. SPEPM</AccordionTrigger>
                    <AccordionContent>007/15</AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="group flex flex-col rounded-lg bg-white dark:bg-gray-950 border border-gray-200 shadow-sm transition-all hover:shadow-lg dark:border-gray-800 dark:hover:bg-gray-800 p-6 min-h-full">
                <Image
                  src="/reparacion.webp"
                  width={500}
                  height={500}
                  alt="Armado y configuración de PC y notebook"
                  className="aspect-square object-scale-down  rounded-lg mb-4"
                />
                <Accordion type="single" collapsible className="w-full mt-4">
                  <AccordionItem value="nombre">
                    <AccordionTrigger>Nombre</AccordionTrigger>
                    <AccordionContent>
                      Armado y configuración de PC y notebook
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="descripcion">
                    <AccordionTrigger>Descripción</AccordionTrigger>
                    <AccordionContent>
                      Formación especializada en ensamblaje y configuración de
                      computadoras y notebooks.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="modalidad">
                    <AccordionTrigger>Modalidad</AccordionTrigger>
                    <AccordionContent>Presencial</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="duracion">
                    <AccordionTrigger>Duración</AccordionTrigger>
                    <AccordionContent>8 meses</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="resolucion">
                    <AccordionTrigger>Disp. SPEPM</AccordionTrigger>
                    <AccordionContent>010/12</AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="group flex flex-col rounded-lg bg-white dark:bg-gray-950 border border-gray-200 shadow-sm transition-all hover:shadow-lg dark:border-gray-800 dark:hover:bg-gray-800 p-6 min-h-full">
                <Image
                  src="/seguridad.webp"
                  width={500}
                  height={500}
                  alt="Instalación y reparación de sistemas electrónicos y de seguridad."
                  className="aspect-square object-scale-down  rounded-lg mb-4"
                />
                <Accordion type="single" collapsible className="w-full mt-4">
                  <AccordionItem value="nombre">
                    <AccordionTrigger>Nombre</AccordionTrigger>
                    <AccordionContent>
                      Instalación y reparación de sistemas electrónicos y de
                      seguridad
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="descripcion">
                    <AccordionTrigger>Descripción</AccordionTrigger>
                    <AccordionContent>
                      Formación avanzada en montaje y reparación de sistemas
                      electrónicos y seguridad.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="modalidad">
                    <AccordionTrigger>Modalidad</AccordionTrigger>
                    <AccordionContent>Presencial</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="duracion">
                    <AccordionTrigger>Duración</AccordionTrigger>
                    <AccordionContent>6 meses</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="resolucion">
                    <AccordionTrigger>Disp. SPEPM</AccordionTrigger>
                    <AccordionContent>036/18</AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="group flex flex-col rounded-lg bg-white dark:bg-gray-950 border border-gray-200 shadow-sm transition-all hover:shadow-lg dark:border-gray-800 dark:hover:bg-gray-800 p-6 min-h-full">
                <Image
                  src="/seguridad.webp"
                  width={500}
                  height={500}
                  alt="Instalación y reparación de sistemas electrónicos y de seguridad."
                  className="aspect-square object-scale-down  rounded-lg mb-4"
                />
                <Accordion type="single" collapsible className="w-full mt-4">
                  <AccordionItem value="nombre">
                    <AccordionTrigger>Nombre</AccordionTrigger>
                    <AccordionContent>Gestoría General</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="descripcion">
                    <AccordionTrigger>Descripción</AccordionTrigger>
                    <AccordionContent>
                      Orientada a capacitar a los participantes, con un enfoque
                      práctico y sencillo de aprender, en tareas relacionadas a
                      la Gestoría General, incluyendo los principales rubros:
                      Gestoría Inmobiliaria, Gestoría Previsional, Gestoría
                      Judicial y Gestoría Automotor.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="modalidad">
                    <AccordionTrigger>Modalidad</AccordionTrigger>
                    <AccordionContent>Presencial</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="duracion">
                    <AccordionTrigger>Duración</AccordionTrigger>
                    <AccordionContent>6 meses</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="resolucion">
                    <AccordionTrigger>Disp. SPEPM</AccordionTrigger>
                    <AccordionContent></AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="group flex flex-col rounded-lg bg-white dark:bg-gray-950 border border-gray-200 shadow-sm transition-all hover:shadow-lg dark:border-gray-800 dark:hover:bg-gray-800 p-6 min-h-full">
                <Image
                  src="/redes.webp"
                  width={500}
                  height={500}
                  alt="Configuración, administración e instalación de redes."
                  className="aspect-square object-scale-down  rounded-lg mb-4"
                />
                <Accordion type="single" collapsible className="w-full mt-4">
                  <AccordionItem value="nombre">
                    <AccordionTrigger>Nombre</AccordionTrigger>
                    <AccordionContent>
                      Configuración, administración e instalación de redes
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="descripcion">
                    <AccordionTrigger>Descripción</AccordionTrigger>
                    <AccordionContent>
                      Dominio integral en configuración, administración e
                      instalación avanzada de redes informáticas.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="modalidad">
                    <AccordionTrigger>Modalidad</AccordionTrigger>
                    <AccordionContent>Presencial</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="duracion">
                    <AccordionTrigger>Duración</AccordionTrigger>
                    <AccordionContent>10 meses</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="resolucion">
                    <AccordionTrigger>Disp. SPEPM</AccordionTrigger>
                    <AccordionContent>025/14</AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="group flex flex-col rounded-lg bg-white dark:bg-gray-950 border border-gray-200 shadow-sm transition-all hover:shadow-lg dark:border-gray-800 dark:hover:bg-gray-800 p-6 min-h-full">
                <Image
                  src="/estetica.webp"
                  width={500}
                  height={500}
                  alt="Estética Profesional"
                  className="aspect-square object-scale-down  rounded-lg mb-4"
                />
                <Accordion type="single" collapsible className="w-full mt-4">
                  <AccordionItem value="nombre">
                    <AccordionTrigger>Nombre</AccordionTrigger>
                    <AccordionContent>Estética Profesional</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="descripcion">
                    <AccordionTrigger>Descripción</AccordionTrigger>
                    <AccordionContent>
                      Perfeccionamiento en técnicas avanzadas de estética para
                      profesionales del cuidado personal.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="modalidad">
                    <AccordionTrigger>Modalidad</AccordionTrigger>
                    <AccordionContent>Presencial</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="duracion">
                    <AccordionTrigger>Duración</AccordionTrigger>
                    <AccordionContent>12 meses</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="resolucion">
                    <AccordionTrigger>Disp. SPEPM</AccordionTrigger>
                    <AccordionContent>007/15</AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="group flex flex-col rounded-lg bg-white dark:bg-gray-950 border border-gray-200 shadow-sm transition-all hover:shadow-lg dark:border-gray-800 dark:hover:bg-gray-800 p-6 min-h-full">
                <Image
                  src="/electricidad.webp"
                  width={500}
                  height={500}
                  alt="Montador Electricista"
                  className="aspect-square object-scale-down  rounded-lg mb-4"
                />
                <Accordion type="single" collapsible className="w-full mt-4">
                  <AccordionItem value="nombre">
                    <AccordionTrigger>Nombre</AccordionTrigger>
                    <AccordionContent>
                      Montador electricista domiciliario.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="descripcion">
                    <AccordionTrigger>Descripción</AccordionTrigger>
                    <AccordionContent>
                      Croquis de instalaciones, motores monofásicos, motores
                      trífasicos, computos y presupuestos, circuitos especiales,
                      instalaciones ed contadores y relés.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="modalidad">
                    <AccordionTrigger>Modalidad</AccordionTrigger>
                    <AccordionContent>Presencial</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="duracion">
                    <AccordionTrigger>Duración</AccordionTrigger>
                    <AccordionContent>12 meses</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="resolucion">
                    <AccordionTrigger>Disp. SPEPM</AccordionTrigger>
                    <AccordionContent>032/18</AccordionContent>
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
