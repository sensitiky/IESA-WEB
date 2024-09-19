import { Inter } from 'next/font/google';
import './globals.css';
import { Metadata } from 'next';
import { GoogleTagManager } from '@next/third-parties/google';
import WhatsAppWidget from '@/components/ui/wppWidget';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Inicio | IESA',
  description: 'Developer: Mario Correa',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body className={inter.className}>
        {children}
        <WhatsAppWidget
          phoneNumber="+543764760070"
          defaultMessage="Hola! Me gustaría recibir más información sobre *Ingresa tu consulta*. Muchas Gracias!"
        />
      </body>
      <GoogleTagManager gtmId="G-1EDZ57D5M8" />
    </html>
  );
}
