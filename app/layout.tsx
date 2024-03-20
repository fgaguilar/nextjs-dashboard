import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <h1 className='text-5xl text-center'>Bienvenido a ACME</h1>
        {children}
      </body>
    </html>
  );
}
