import type { Metadata } from "next";
import { Ubuntu, Ubuntu_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const ubuntuSans = Ubuntu_Sans({
  variable: "--font-ubuntu-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={cn(ubuntu.variable, ubuntuSans.variable)}>
        {children}
      </body>
    </html>
  );
}
