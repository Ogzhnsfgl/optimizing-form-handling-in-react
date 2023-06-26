import Link from 'next/link';
import { Open_Sans } from 'next/font/google';
import { Footer } from './components/footer';
import { Header } from './components/header';
import './globals.css';

const inter = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

export const metadata = {
  title: 'Optimizing Form Handling in React: Maximizing Performance',
  description:
    'Optimizing Form Handling in React: Maximizing Performance - by @ogzhnsfgl',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='app-container'>
          <Header />
          <div className='container'>{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
