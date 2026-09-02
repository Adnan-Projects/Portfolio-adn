import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adnan Narimukkil — Software Developer & Web Designer",
  description:
    "Portfolio of Adnan Narimukkil, a software developer and web designer building modern web applications, software solutions and exploring artificial intelligence.",
  keywords: [
    "Adnan Narimukkil",
    "Software Developer",
    "Web Designer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "MERN Stack",
    "AI Developer",
    "Portfolio",
  ],
  authors: [{ name: "Adnan Narimukkil" }],
  creator: "Adnan Narimukkil",
  openGraph: {
    title: "Adnan Narimukkil — Software Developer & Web Designer",
    description:
      "Portfolio of Adnan Narimukkil, a software developer and web designer building modern web applications, software solutions and exploring artificial intelligence.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adnan Narimukkil — Software Developer & Web Designer",
    description:
      "Portfolio of Adnan Narimukkil, a software developer and web designer building modern web applications, software solutions and exploring artificial intelligence.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className={`${spaceGrotesk.className} antialiased`}>{children}</body>
    </html>
  );
}
