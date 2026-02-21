
import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Juan Dev Studio | Páginas Web de Alto Impacto',
  description: 'Desarrollo web premium especializado en conversión y velocidad.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased selection:bg-primary/20">{children}</body>
    </html>
  );
}
