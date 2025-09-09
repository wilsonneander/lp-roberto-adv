"use client"

import { useRef } from "react"

export default function DifferentialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  return (
    <section id="diferenciais" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl lg:text-5xl font-normal text-[#000000] leading-tight">
            Nossos Diferenciais
          </h2>
        </div>

        {/* Diferenciais Grid */}
        <div className="max-w-6xl mx-auto">
          {/* Desktop Layout - 3 rows with alternating pattern */}
          <div className="hidden lg:block space-y-6">
            {/* First Row: Square + Rectangle */}
            <div className="grid grid-cols-2 gap-6 h-64">
              <div
                className="differential-card rounded-2xl p-8 flex flex-col justify-center text-white shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
                style={{ background: "linear-gradient(135deg, #606060 0%, #283D59 100%)" }}
              >
                <h3 className="font-serif text-2xl font-bold mb-4">
                  Anos de Atuação Exclusivamente em Direito Previdenciário
                </h3>
                <p className="font-sans text-base leading-relaxed">
                  Com anos de experiência exclusiva no direito previdenciário, oferecemos aconselhamento especializado e
                  representação eficaz para garantir seus direitos.
                </p>
              </div>
              <div className="differential-card bg-[#FBF6F0] rounded-2xl p-8 flex flex-col justify-center text-black shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300">
                <h3 className="font-serif text-2xl font-bold mb-4 text-[#000000]">Comprometimento e Excelência</h3>
                <p className="font-sans text-base leading-relaxed text-[#000000]">
                  Nosso compromisso é proporcionar excelência em cada caso, trabalhando com dedicação, ética e
                  profissionalismo para obter os melhores resultados.
                </p>
              </div>
            </div>

            {/* Second Row: Rectangle + Square */}
            <div className="grid grid-cols-2 gap-6 h-64">
              <div className="differential-card bg-[#FBF6F0] rounded-2xl p-8 flex flex-col justify-center text-black shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300">
                <h3 className="font-serif text-2xl font-bold mb-4 text-[#000000]">Atendimento Online e Presencial</h3>
                <p className="font-sans text-base leading-relaxed text-[#000000]">
                  Oferecemos a conveniência do atendimento online e presencial, adaptando-nos às suas preferências e
                  necessidades para melhor atendê-lo.
                </p>
              </div>
              <div
                className="differential-card rounded-2xl p-8 flex flex-col justify-center text-white shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
                style={{ background: "linear-gradient(135deg, #606060 0%, #283D59 100%)" }}
              >
                <h3 className="font-serif text-2xl font-bold mb-4">Atendimento Internacional</h3>
                <p className="font-sans text-base leading-relaxed">
                  Atendemos clientes no exterior com questões previdenciárias no Brasil, proporcionando uma comunicação
                  eficiente e personalizada, onde quer que você esteja.
                </p>
              </div>
            </div>

            {/* Third Row: Square + Rectangle */}
            <div className="grid grid-cols-2 gap-6 h-64">
              <div
                className="differential-card rounded-2xl p-8 flex flex-col justify-center text-white shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
                style={{ background: "linear-gradient(135deg, #606060 0%, #283D59 100%)" }}
              >
                <h3 className="font-serif text-2xl font-bold mb-4">Especialista em Direito Previdenciário</h3>
                <p className="font-sans text-base leading-relaxed">
                  Nosso advogado é um especialista altamente qualificado em direito previdenciário, capaz de lidar com
                  os casos mais complexos com competência e habilidade.
                </p>
              </div>
              <div className="differential-card bg-[#FBF6F0] rounded-2xl p-8 flex flex-col justify-center text-black shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300">
                <h3 className="font-serif text-2xl font-bold mb-4 text-[#000000]">Integridade</h3>
                <p className="font-sans text-base leading-relaxed text-[#000000]">
                  Agimos com total transparência e honestidade, sempre colocando os interesses dos nossos clientes em
                  primeiro lugar, garantindo respeito e confidencialidade.
                </p>
              </div>
            </div>
          </div>

          {/* Mobile Layout - Single column with alternating colors */}
          <div className="lg:hidden space-y-6">
            <div
              className="differential-card rounded-2xl p-6 text-white shadow-lg"
              style={{ background: "linear-gradient(135deg, #606060 0%, #283D59 100%)" }}
            >
              <h3 className="font-serif text-xl font-bold mb-3">
                Anos de Atuação Exclusivamente em Direito Previdenciário
              </h3>
              <p className="font-sans text-sm leading-relaxed">
                Com anos de experiência exclusiva no direito previdenciário, oferecemos aconselhamento especializado e
                representação eficaz para garantir seus direitos.
              </p>
            </div>

            <div className="differential-card bg-[#FBF6F0] rounded-2xl p-6 text-black shadow-lg">
              <h3 className="font-serif text-xl font-bold mb-3 text-[#000000]">Comprometimento e Excelência</h3>
              <p className="font-sans text-sm leading-relaxed text-[#000000]">
                Nosso compromisso é proporcionar excelência em cada caso, trabalhando com dedicação, ética e
                profissionalismo para obter os melhores resultados.
              </p>
            </div>

            <div
              className="differential-card rounded-2xl p-6 text-white shadow-lg"
              style={{ background: "linear-gradient(135deg, #606060 0%, #283D59 100%)" }}
            >
              <h3 className="font-serif text-xl font-bold mb-3">Atendimento Online e Presencial</h3>
              <p className="font-sans text-sm leading-relaxed">
                Oferecemos a conveniência do atendimento online e presencial, adaptando-nos às suas preferências e
                necessidades para melhor atendê-lo.
              </p>
            </div>

            <div className="differential-card bg-[#FBF6F0] rounded-2xl p-6 text-black shadow-lg">
              <h3 className="font-serif text-xl font-bold mb-3 text-[#000000]">Atendimento Internacional</h3>
              <p className="font-sans text-sm leading-relaxed text-[#000000]">
                Atendemos clientes no exterior com questões previdenciárias no Brasil, proporcionando uma comunicação
                eficiente e personalizada, onde quer que você esteja.
              </p>
            </div>

            <div
              className="differential-card rounded-2xl p-6 text-white shadow-lg"
              style={{ background: "linear-gradient(135deg, #606060 0%, #283D59 100%)" }}
            >
              <h3 className="font-serif text-xl font-bold mb-3">Especialista em Direito Previdenciário</h3>
              <p className="font-sans text-sm leading-relaxed">
                Nosso advogado é um especialista altamente qualificado em direito previdenciário, capaz de lidar com os
                casos mais complexos com competência e habilidade.
              </p>
            </div>

            <div className="differential-card bg-[#FBF6F0] rounded-2xl p-6 text-black shadow-lg">
              <h3 className="font-serif text-xl font-bold mb-3 text-[#000000]">Integridade</h3>
              <p className="font-sans text-sm leading-relaxed text-[#000000]">
                Agimos com total transparência e honestidade, sempre colocando os interesses dos nossos clientes em
                primeiro lugar, garantindo respeito e confidencialidade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
