"use client"

import { useState } from "react"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ReviewsSection from "@/components/reviews-section"
import LegalServicesSection from "@/components/legal-services-section"
import ServicesSection from "@/components/services-section"
import DifferentialsSection from "@/components/differentials-section"
import FaqSection from "@/components/faq-section"
import FooterSection from "@/components/footer-section"
import Chatbot from "@/components/chatbot"
import MobileMenu from "@/components/mobile-menu"
import LoadingScreen from "@/components/loading-screen"

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen">
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}

      {!isLoading && (
        <>
          {/* Navigation */}
          <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-sm px-[30px]">
            <div className="container mx-auto px-4 py-4">
              <div className="flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center space-x-3">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-lFXgi8FV80WYpg36yE5VjIENqypvpf.jpeg"
                    alt="TR Logo"
                    className="w-12 h-12 rounded-lg"
                    loading="eager"
                  />
                  <span className="font-serif text-white text-xl font-normal">Roberto Terajima</span>
                </div>

                <div className="hidden lg:flex items-center space-x-8">
                  <a href="#inicio" className="font-sans text-white hover:text-[#3077D7] transition-colors">
                    Início
                  </a>
                  <a href="#sobre" className="font-sans text-white hover:text-[#3077D7] transition-colors">
                    Sobre mim
                  </a>
                  <a href="#avaliacoes" className="font-sans text-white hover:text-[#3077D7] transition-colors">
                    Avaliações
                  </a>
                  <a href="#atuacoes" className="font-sans text-white hover:text-[#3077D7] transition-colors">
                    Atuações
                  </a>
                  <a href="#diferenciais" className="font-sans text-white hover:text-[#3077D7] transition-colors">
                    Diferenciais
                  </a>
                </div>
              </div>
            </div>
          </nav>

          <MobileMenu />

          {/* All Sections */}
          <HeroSection />
          <LegalServicesSection />
          <AboutSection />
          <ReviewsSection />
          <ServicesSection />
          <DifferentialsSection />
          <FaqSection />
          <FooterSection />

          <Chatbot />
        </>
      )}

      {/* Custom Styles */}
      <style jsx global>{`
        /* Custom scrollbar styles */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #3077D7;
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #2563eb;
        }
        
        /* Firefox scrollbar */
        html {
          scrollbar-width: thin;
          scrollbar-color: #3077D7 transparent;
        }
      `}</style>
    </div>
  )
}
