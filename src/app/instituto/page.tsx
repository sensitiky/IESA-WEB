"use client";
import React, { useEffect, useState } from "react";
import { JSX, SVGProps } from "react";
import Footer from "@/app/componentes/footer";
import Header from "@/app/componentes/header";
import Link from "next/link";
import Image from "next/image";

export default function Instituto() {
  const images = [
    "/iesa2.jpeg",
    "/iesa3.jpeg",
    "/iesa4.jpeg",
    "/iesa5.jpeg",
    "/iesa6.jpeg",
    "/iesa7.jpeg",
  ];

  function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((currentIndex + 1) % images.length);
      }, 2500);
      return () => clearInterval(interval);
    }, [currentIndex]);

    return (
      <div className="relative">
        <Image
          src={images[currentIndex]}
          width="1920"
          height="1080"
          alt="Logo instituto"
          className="w-full rounded-xl object-cover aspect-[2/1] lg:h-[500px] lg:w-[900px]"
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1 grid md:grid-cols-[1fr_700px] gap-8 px-4 lg:px-2 py-12 md:py-16">
        <Carousel />
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold">
              Instituto de Estudios Superiores Argentino
            </h2>
            <p className="mt-2 text-gray-500 dark:text-gray-400">
              El IESA es un instituto privado de gestión pública fundado en 2003
              en Posadas, Misiones. Hemos dedicado años a brindar formación
              profesional exitosa a lo largo de nuestra historia. Nuestro
              compromiso es con la excelencia educativa y la formación integral
              de nuestros estudiantes, preparándolos para enfrentar los desafíos
              del mundo laboral actual.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">Misión</h3>
            <ul className="mt-2 space-y-2 text-gray-500 dark:text-gray-400">
              <li>
                <ChevronRightIcon className="w-4 h-4 inline-block mr-2" />
                Nuestra visión es hacer que el trabajo sea inspirador y
                gratificante.
              </li>
              <li>
                <ChevronRightIcon className="w-4 h-4 inline-block mr-2" />
                Formar líderes.
              </li>
              <li>
                <ChevronRightIcon className="w-4 h-4 inline-block mr-2" />
                Excelencia y ética.
              </li>
              <li>
                <ChevronRightIcon className="w-4 h-4 inline-block mr-2" />
                Comunidad inclusiva.
              </li>
              <li>
                <ChevronRightIcon className="w-4 h-4 inline-block mr-2" />
                Vanguardia educativa.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold">Ofertas Académicas</h3>
            <ul className="mt-2 space-y-2 text-gray-500 dark:text-gray-400">
              <li className="hover:text-black">
                {" "}
                <Link href="/carreras">
                  <ChevronRightIcon className="w-4 h-4 inline-block mr-2 hover:text-black" />
                  Tecnicaturas Superiores
                </Link>
              </li>
              <li className="hover:text-black">
                {" "}
                <Link href="/carreras">
                  <ChevronRightIcon className="w-4 h-4 inline-block mr-2 hover:text-black" />
                  Formaciones Profesionales
                </Link>
              </li>
              <li className="hover:text-black">
                <Link href="/carreras">
                  <ChevronRightIcon className="w-4 h-4 inline-block mr-2 hover:text-black" />
                  Cursos
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function ChevronRightIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
