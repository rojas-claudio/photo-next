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

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body className={`${ibm.className}`}>{children}</body>
      </html>
    )
  }