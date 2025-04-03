import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Poppins({ 
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800', '900'],
});
 
export const metadata: Metadata = {
  title: 'Confidence Chukwudi | Creative Software Developer',
  description: 'Creative Software Developer with 3+ years of experience, specializing in web development, app development, robotics, cloud computing, and game development. Building scalable products with great user experiences.',
  keywords: ['Software Engineer', 'Web Development', 'App Development', 'Full Stack Developer', 'Confidence Chukwudi'],
  authors: [{ name: 'Confidence Chukwudi' }],
  creator: 'Confidence Chukwudi',
  publisher: 'Confidence Chukwudi',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/nz.jpg',
    shortcut: '/nz.jpg',
    apple: '/nz.jpg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'nz-portfolio-opal.vercel.app',
    siteName: 'Confidence Chukwudi Portfolio',
    title: 'Confidence Chukwudi | Creative Software Developer',
    description: 'Creative Software Engineer specializing in web development, app development. I enjoy crafting dependable and scalable products designed with user experience at the core.',
    images: [
      {
        url: '/nz.jpg',
        width: 1200,
        height: 630,
        alt: 'Confidence Chukwudi - Creative Software Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Confidence Chukwudi | Creative Software Developer',
    description: 'Creative Software Developer building scalable products with great user experiences.',
    creator: '@CodeByNZ',
    images: ['/nz.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
