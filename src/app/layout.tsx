import "./globals.css";
import type { Metadata } from "next";
import Header from "../components/header";
import Navigation from "../components/navigation";
import Gallery from "../app/gallery/page";
import { TagProvider } from "@/components/TagProvider";


import { IBM_Plex_Sans } from "next/font/google";

const ibm = IBM_Plex_Sans({
  weight: "400",
  style: "normal"
})

export const metadata: Metadata = {
  title: "claudio rojas",
  description: "a modest display of my work",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <TagProvider>
        <body className={`${ibm.className} flex h-screen antialiased`}>

          <div className="h-full w-1/6 fixed">
            <Navigation />
          </div>


          <div className="w-5/6 ml-auto">
            <div className="w-full flex justify-end pt-4">
              <Header />
            </div>

            <div>
              <Gallery/>
            </div>
          </div>

        </body>        
      </TagProvider>
    </html>
  );
}
