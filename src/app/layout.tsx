import "./globals.css";
import type { Metadata } from "next";
import {Reem_Kufi_Ink} from 'next/font/google'
import { Layout, Navbar } from "@/components";

const reem=Reem_Kufi_Ink({
  subsets:['latin'],
  weight:"400",
  display:"swap",
  variable:"--font-reem"
})


export const metadata: Metadata = {
  title: "Wafy-Wafiyya",
  description:
    "Introducing Tailwind Course Landing Page, a versatile and engaging landing page template designed using Tailwind CSS and Material Tailwind.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <script
          defer
          data-site="YOUR_DOMAIN_HERE"
          src="#"
        ></script>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Amiri+Quran&family=Katibeh&family=Mirza:wght@400;500;600;700&family=Reem+Kufi+Ink&display=swap" rel="stylesheet"></link>
      </head>
      <body className={`${reem.variable}`}>
        <Layout>
          <Navbar />
          {children}
          
        </Layout>
      </body>
    </html>
  );
}
