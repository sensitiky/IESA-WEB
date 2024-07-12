"use client";
import Link from "next/link";
import Image from "next/image";
import { FC, JSX, SVGProps, useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

const Header: FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSheetDropdownOpen, setIsSheetDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const sheetDropdownRef = useRef<HTMLDivElement>(null);
  let timeout: NodeJS.Timeout;

  const handleMouseEnter = () => {
    clearTimeout(timeout);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeout = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 300);
  };

  const handleSheetMouseEnter = () => {
    clearTimeout(timeout);
    setIsSheetDropdownOpen(true);
  };

  const handleSheetMouseLeave = () => {
    timeout = setTimeout(() => {
      setIsSheetDropdownOpen(false);
    }, 300);
  };

  useEffect(() => {
    if (dropdownRef.current) {
      dropdownRef.current.addEventListener("mouseenter", handleMouseEnter);
      dropdownRef.current.addEventListener("mouseleave", handleMouseLeave);
    }

    if (sheetDropdownRef.current) {
      sheetDropdownRef.current.addEventListener(
        "mouseenter",
        handleSheetMouseEnter
      );
      sheetDropdownRef.current.addEventListener(
        "mouseleave",
        handleSheetMouseLeave
      );
    }

    return () => {
      if (dropdownRef.current) {
        dropdownRef.current.removeEventListener("mouseenter", handleMouseEnter);
        dropdownRef.current.removeEventListener("mouseleave", handleMouseLeave);
      }

      if (sheetDropdownRef.current) {
        sheetDropdownRef.current.removeEventListener(
          "mouseenter",
          handleSheetMouseEnter
        );
        sheetDropdownRef.current.removeEventListener(
          "mouseleave",
          handleSheetMouseLeave
        );
      }
    };
  }, []);

  return (
    <header className="bg-white text-customColor-iesa py-4 px-6 md:px-12 flex items-center justify-between shadow-lg z-50 relative">
      <Link href="/" className="flex items-center gap-2" prefetch={false}>
        <div className="p-2 rounded-lg">
          <Image
            src="/logofinal.png"
            alt="Logo IESA"
            className="rounded-lg"
            width={100}
            height={100}
          />
        </div>
      </Link>
      <nav className="hidden md:flex items-center gap-6">
        <Link
          href="/"
          className="relative group text-customColor-iesa hover:text-black transition-colors"
          prefetch={false}
        >
          Inicio
          <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </Link>
        <Link
          href="/instituto"
          className="relative group text-customColor-iesa hover:text-black transition-colors"
          prefetch={false}
        >
          Institucional
          <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </Link>
        <div
          className="relative group"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          ref={dropdownRef}
        >
          <Link
            href="/carreras"
            className="relative text-customColor-iesa hover:text-black transition-colors"
            prefetch={false}
          >
            Oferta Académica
            <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
          </Link>
          {isDropdownOpen && (
            <div className="absolute left-0 top-full mt-2 bg-white shadow-lg z-50">
              <ul className="flex flex-col">
                <li>
                  <Link
                    href="/carreras/tecnicaturas"
                    className="block px-4 py-2 text-customColor-iesa hover:bg-gray-200"
                  >
                    Tecnicaturas Superiores
                  </Link>
                </li>
                <li>
                  <Link
                    href="/carreras/formaciones"
                    className="block px-4 py-2 text-customColor-iesa hover:bg-gray-200"
                  >
                    Formaciones Profesionales
                  </Link>
                </li>
                <li>
                  <Link
                    href="/carreras/cursos"
                    className="block px-4 py-2 text-customColor-iesa hover:bg-gray-200"
                  >
                    Cursos
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
        <Link
          href="/contacto"
          className="relative group text-customColor-iesa hover:text-black transition-colors"
          prefetch={false}
        >
          Contacto
          <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </Link>
      </nav>
      <Button className="relative group bg-customColor-iesa hover:bg-slate-500 hidden md:inline-flex">
        <Link className="relative group text-white" href="/formulario">
          Pre-Inscribirse
          <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </Link>
      </Button>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <div className="grid gap-4 p-6">
            <Link
              href="/"
              className="text-lg font-medium hover:underline"
              prefetch={false}
            >
              Inicio
            </Link>
            <Link
              href="/instituto"
              className="text-lg font-medium hover:underline"
              prefetch={false}
            >
              Institucional
            </Link>
            <div
              className="relative group"
              onMouseEnter={handleSheetMouseEnter}
              onMouseLeave={handleSheetMouseLeave}
              ref={sheetDropdownRef}
            >
              
                Oferta Académica
                <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
              
              {isSheetDropdownOpen && (
                <div className="absolute left-0 top-full mt-2 bg-white shadow-lg z-50">
                  <ul className="flex flex-col">
                    <li>
                      <Link
                        href="/carreras/tecnicaturas"
                        className="block px-4 py-2 text-customColor-iesa hover:bg-gray-200"
                      >
                        Tecnicaturas Superiores
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/carreras/formaciones"
                        className="block px-4 py-2 text-customColor-iesa hover:bg-gray-200"
                      >
                        Formaciones Profesionales
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/carreras/cursos"
                        className="block px-4 py-2 text-customColor-iesa hover:bg-gray-200"
                      >
                        Cursos
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <Link
              href="/contacto"
              className="text-lg font-medium hover:underline"
              prefetch={false}
            >
              Contacto
            </Link>
            <Link href="/formulario">
              <Button className="w-full bg-customColor-iesa hover:bg-gray-500">
                Pre-Inscribirse
              </Button>
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <line x1="4" y1="6" x2="20" y2="6" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="18" x2="20" y2="18" />
    </svg>
  );
}
