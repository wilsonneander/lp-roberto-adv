import type React from "react"
import type { Metadata } from "next"
import { Libre_Baskerville as Baskerville } from "next/font/google"
import { Raleway } from "next/font/google"
import "./globals.css"

const baskerville = Baskerville({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-baskerville",
  weight: ["400"],
})

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
})

export const metadata: Metadata = {
  title: "Roberto Terajima - Advogado Especialista em Direito Previdenciário",
  description: "Advogado especialista em Direito Previdenciário. Atendimento personalizado, nacional e internacional.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${baskerville.variable} ${raleway.variable} antialiased`}>
      <body>{children}</body>
    </html>
  )
}
