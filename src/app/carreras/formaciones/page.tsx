"use client";
import Link from "next/link";
import Footer from "@/app/componentes/footer";
import Header from "@/app/componentes/header";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Carousel2 from "@/app/componentes/slider2";

export default function Formaciones(){
    return (
            <div id="formaciones">
                <Header />
                <Carousel2 />
            <section className="w-full py-12 md:py-24 lg:py-32">
              <div className="container px-4 md:px-6">
                <div className="grid gap-6 md:gap-8">
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
                        src="/estetica prof.jpeg"
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
            <Footer/>
          </div>
        )
    }