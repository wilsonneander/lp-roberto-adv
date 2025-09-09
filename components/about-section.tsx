"use client"

import WhatsAppButton from "@/components/whatsapp-button"

export default function AboutSection() {
  return (
    <section id="sobre" className="bg-[#FBF6F0] py-0">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-6 lg:order-1 order-1">
              <h2 className="font-serif text-2xl lg:text-2xl font-normal text-[#0B1B33] text-center lg:text-left">
                Sobre o fundador
              </h2>
              <h3 className="font-serif text-3xl lg:text-4xl font-normal text-[#111111] text-center lg:text-left">
                Roberto Tokugi Terajima Junior
              </h3>
              <div className="space-y-4 text-[#283D59] font-sans text-base lg:text-lg leading-relaxed text-center lg:text-left">
                <p>
                  Escritório destacado com <strong>Mérito Advocatício</strong> pelo excelente trabalho jurídico
                  desenvolvido no município de Pinhais/PR.
                </p>
                <p>
                  Advogado especialista em Direito Previdenciário, graduado pela FAE – Centro Universitário e pós-
                  graduado em Processo Administrativo e Judicial Previdenciário pela Escola da Magistratura Federal
                  (ESMAFEPR).
                </p>
                <p>
                  Possui experiência profissional na Justiça Federal e anos de atuação exclusiva no direito
                  previdenciário. Além disso, realizou diversos cursos de aperfeiçoamento nas áreas previdenciária e de
                  processo civil.
                </p>
              </div>
            </div>

            {/* Mobile Video */}
            <div className="lg:hidden order-3 flex justify-center">
              <div className="relative w-64 h-[456px] rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
                <iframe
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  src="https://www.youtube.com/embed/96a-wrdOpic?autoplay=1&mute=1&loop=1&playlist=96a-wrdOpic&controls=0&modestbranding=1&rel=0"
                  frameBorder="0"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </div>

            {/* WhatsApp Button */}
            <div className="w-full flex justify-center scale-75 md:scale-90 lg:scale-90 lg:origin-left lg:justify-start lg:order-2 order-4">
              <WhatsAppButton />
            </div>
          </div>

          {/* Right Column - Video with Background Elements (Desktop only) */}
          <div className="relative justify-center lg:justify-end hidden lg:flex">
            {/* Background floating squares */}
            <div className="absolute inset-0 z-0">
              
              <div
                className="absolute bottom-0 right-0 w-20 h-20 rounded-2xl opacity-60"
                style={{
                  background: "linear-gradient(135deg, #606060 0%, #283D59 100%)",
                  animation: "float 8s ease-in-out infinite reverse",
                  animationDelay: "3s",
                }}
              />
            </div>

            {/* Desktop Video */}
            <div className="relative w-64 h-[456px] rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
              <iframe
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="https://www.youtube.com/embed/96a-wrdOpic?autoplay=1&mute=1&loop=1&playlist=96a-wrdOpic&controls=0&modestbranding=1&rel=0"
                frameBorder="0"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(2deg);
          }
        }
      `}</style>
    </section>
  )
}
