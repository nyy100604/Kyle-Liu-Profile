import type { Metadata } from "next";
import { Noto_Sans_TC } from "next/font/google";
import "./globals.css";

//components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
// import StairTransition from "@/components/StairTransition";

const NotoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Kyle Liu Profile",
  description: "",
  icons: "/logo.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={NotoSansTC.className}>
        {" "}
        <Header />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
