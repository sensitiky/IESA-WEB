import Link from 'next/link';
import Image from 'next/image';
import { FC, JSX, SVGProps } from 'react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

const Header: FC = () => {
  return (
    <header className="bg-white text-customColor-iesa py-4 px-6 md:px-12 flex items-center justify-between shadow-lg">
      <Link href="/" className="flex items-center gap-2" prefetch={false}>
        <Image src="/logo.jpeg" alt="Logo IESA" className="h-8 w-8" width={32} height={32} />
        <span className="text-xl font-bold">IESA</span>
      </Link>
      <nav className="hidden md:flex items-center gap-6">
        <Link href="/" className="relative group text-customColor-iesa hover:text-black transition-colors" prefetch={false}>
          Inicio
          <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </Link>
        <Link href="/instituto" className="relative group text-customColor-iesa hover:text-black transition-colors" prefetch={false}>
          Institucional
          <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </Link>
        <Link href="/carreras" className="relative group text-customColor-iesa hover:text-black transition-colors" prefetch={false}>
          Carreras
          <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </Link>
        <Link href="/contacto" className="relative group text-customColor-iesa hover:text-black transition-colors" prefetch={false}>
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
        <SheetContent side="left">
          <div className="grid gap-4 p-6">
            <Link href="/" className="text-lg font-medium hover:underline" prefetch={false}>
              Inicio
            </Link>
            <Link href="/instituto" className="text-lg font-medium hover:underline" prefetch={false}>
              Institucional
            </Link>
            <Link href="/carreras" className="text-lg font-medium hover:underline" prefetch={false}>
              Carreras
            </Link>
            <Link href="/contacto" className="text-lg font-medium hover:underline" prefetch={false}>
              Contacto
            </Link>
            <Link href="/formulario">
            <Button className="w-full bg-customColor-iesa hover:bg-gray-500">Pre-Inscribirse</Button>
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
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
      </svg>
    );
  }