"use client";
import Link from "next/link";
import Carousel from "@/app/componentes/Slider";
import Footer from "@/app/componentes/footer";
import Header from "@/app/componentes/header";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Component() {
  return (
    <div>
      <Header />
      <Carousel />
      <div className="bg-gray-100 w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-6">
            <div className="group">
              <div className="grid gap-4 rounded-lg bg-white dark:bg-gray-950 border border-gray-200 shadow-sm transition-all hover:shadow-lg dark:border-gray-800 dark:hover:bg-gray-800 p-6 min-h-full flex flex-col">
                <Image
                  src="/Tecsistemas.webp"
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
              <div className="gap-4 rounded-lg bg-white dark:bg-gray-950 border border-gray-200 shadow-sm transition-all hover:shadow-lg dark:border-gray-800 dark:hover:bg-gray-800 p-6 min-h-full flex flex-col">
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
                    Tecnicatura Superior Gestión Impositiva, Previsional y
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
        </div>{" "}
      </div>{" "}
      <Footer />
    </div>
  );
}
