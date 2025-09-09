"use client"

export default function ReviewsSection() {
  return (
    <section
      id="avaliacoes"
      className="py-20 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #606060 0%, #283D59 100%)",
      }}
    >
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl lg:text-4xl font-normal text-white leading-tight max-w-4xl mx-auto">
            Histórias variadas, mas o mesmo destino: Garantir{" "}
            <span className="text-[#FFAC33]">direitos previdenciários</span>.
          </h2>
        </div>

        {/* Reviews Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Left Column - Review Cards */}
          <div className="lg:col-span-2 space-y-6 lg:order-1 order-2">
            {/* Review Card 1 - Álvaro */}
            <div className="review-card bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <img src="/images/alvaro.png" alt="Alvaro" className="w-12 h-12 rounded-full object-cover" />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-sans font-semibold text-[#111111]">Álvaro Santos</h4>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-[#FFAC33] fill-current" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-[#111111] font-sans text-sm leading-relaxed mb-4">
                "Tive o prazer em conhecer o Dr. RobertoTerajima o qual foi super atencioso e prestou uma excelente
                assessoria demonstrando total conhecimento sobre assuntos previdenciários. Eu realmente obtive os
                esclarecimentos que necessitava sobre o assunto. Muito obrigado pelo seu trabalho Dr. RobertoTerajima."
              </p>
              <div className="flex items-center justify-between">
                <span className="text-gray-500 text-xs font-sans">há 3 semanas</span>
                <img src="/images/google-logo.png" alt="Google" className="w-8 h-8" />
              </div>
            </div>

            {/* Review Card 2 - Silvana */}
            <div className="review-card bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <img src="/images/silvana.png" alt="Silvana" className="w-12 h-12 rounded-full object-cover" />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-sans font-semibold text-[#111111]">Silvana Costa</h4>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-[#FFAC33] fill-current" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-[#111111] font-sans text-sm leading-relaxed mb-4">
                "Dr. Roberto é um advogado excepcional. Conseguiu reverter o indeferimento do meu auxílio-doença.
                Processo rápido e transparente. Muito grata pelo profissionalismo!"
              </p>
              <div className="flex items-center justify-between">
                <span className="text-gray-500 text-xs font-sans">há 1 mês</span>
                <img src="/images/google-logo.png" alt="Google" className="w-8 h-8" />
              </div>
            </div>
          </div>

          {/* Right Column - Rating Highlight and Vitor Review */}
          <div className="space-y-8 lg:order-2 order-1">
            {/* Vitor Review for Mobile */}
            <div className="lg:hidden review-card bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <img src="/images/vitor.png" alt="Vitor" className="w-12 h-12 rounded-full object-cover" />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-sans font-semibold text-[#111111]">Vitor Silva</h4>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-[#FFAC33] fill-current" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-[#111111] font-sans text-sm leading-relaxed mb-4 text-center lg:text-left">
                "Excelente profissional! Me ajudou a conseguir minha aposentadoria por invalidez após anos de
                tentativas. Atendimento humanizado e muito competente. Recomendo de olhos fechados!"
              </p>
              <div className="flex items-center justify-between">
                <span className="text-gray-500 text-xs font-sans">há 2 meses</span>
                <img src="/images/google-logo.png" alt="Google" className="w-8 h-8" />
              </div>
            </div>

            {/* Rating Highlight */}
            <div className="review-card text-center transition-all duration-1000 ease-out">
              <div className="text-6xl lg:text-7xl font-bold text-[#FFAC33] mb-2">+5.0 ⭐</div>
              <p className="text-white font-sans text-lg">
                Atendimento em todo o Brasil.
                <br />
                Sede em Pinhais/PR
              </p>
            </div>

            {/* Vitor Review for Desktop */}
            <div className="hidden lg:block review-card bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <img src="/images/vitor.png" alt="Vitor" className="w-12 h-12 rounded-full object-cover" />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-sans font-semibold text-[#111111]">Vitor Silva</h4>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-[#FFAC33] fill-current" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-[#111111] font-sans text-sm leading-relaxed mb-4">
                "Excelente profissional! Me ajudou a conseguir minha aposentadoria por invalidez após anos de
                tentativas. Atendimento humanizado e muito competente. Recomendo de olhos fechados!"
              </p>
              <div className="flex items-center justify-between">
                <span className="text-gray-500 text-xs font-sans">há 2 meses</span>
                <img src="/images/google-logo.png" alt="Google" className="w-8 h-8" />
              </div>
            </div>
          </div>
        </div>

        {/* Google Logo Footer */}
        <div className="text-center mt-16">
          <img src="/images/google-outline.png" alt="Google" className="w-48 lg:w-56 h-auto mx-auto opacity-80" />
        </div>
      </div>
    </section>
  )
}
