import type { Metadata } from "next";
import { Space_Grotesk, Archivo } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dominik Modrzejewski | Frontend Developer",
  description:
    "Frontend developer with 4+ years of experience building scalable web applications serving millions of users. Specializing in Angular, TypeScript, and modern web technologies.",
  keywords: [
    "frontend developer",
    "web developer",
    "Angular",
    "TypeScript",
    "JavaScript",
    "React",
    "Next.js",
    "freelance developer",
    "Wrocław",
  ],
  authors: [{ name: "Dominik Modrzejewski" }],
  openGraph: {
    title: "Dominik Modrzejewski | Frontend Developer",
    description:
      "Frontend developer with 4+ years of experience building scalable web applications serving millions of users.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dominik Modrzejewski | Frontend Developer",
    description:
      "Frontend developer with 4+ years of experience building scalable web applications serving millions of users.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${archivo.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
