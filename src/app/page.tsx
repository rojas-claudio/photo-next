import "./globals.css"
import Gallery from "../components/gallery/page";
import Sidebar from "../components/sidebar";
import { TagProvider } from "@/components/TagProvider";

import type { AppProps } from "next/app";
import { IBM_Plex_Sans } from "next/font/google";
import type { Metadata } from "next";

const ibm = IBM_Plex_Sans({
  weight: "400",
  style: "normal",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "claudio rojas"
};

export default function Home() {
  return (
      <html lang="en">
        <TagProvider>
          <body className={`${ibm.className} flex flex-col lg:flex-row h-screen antialiased`}>

            <div className="w-full lg:h-full lg:w-1/6 lg:fixed">
              <Sidebar />
            </div>

            <div className="w-full lg:w-5/6 lg:ml-auto">
              <div>
                <Gallery/>
              </div>
            </div>

          </body>        
        </TagProvider>
      </html>
  );
}
