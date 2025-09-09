"use client"

import { useState } from "react"

export default function ServicesSection() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  const services = [
    {
      image: "/images/aposentadorias.png",
      title: "Aposentadorias",
      subtitle: "Aposentadoria por idade, tempo de contribuição, especial e por invalidez.",
    },
    {
      image: "/images/beneficio-ao-idoso.png",
      title: "Benefício ao Idoso",
      subtitle: "BPC/LOAS para idosos em situação de vulnerabilidade social.",
    },
    {
      image: "/images/planejamento-previdenciario.png",
      title: "Planejamento Previdenciário",
      subtitle: "Estratégias para maximizar seus benefícios previdenciários.",
    },
    {
      image: "/images/auxilio-acidente.png",
      title: "Auxílio Acidente",
      subtitle:
        "Benefício indenizatório pago ao segurado que, após consolidação de uma lesão por acidente, fica com sequelas permanentes que reduzem sua capacidade para o trabalho habitual.",
    },
    {
      image: "/images/incapacidade-permanente.png",
      title: "Benefício por Incapacidade Permanente",
      subtitle: "Para quem possua incapacidade total e irreversível para toda e qualquer função",
    },
    {
      image: "/images/assistencial-pessoas-pcd.png",
      title: "Benefício PcD",
      subtitle: "BPC/LOAS para pessoas com deficiência em vulnerabilidade.",
    },
    {
      image: "/images/salario-maternidade.png",
      title: "Salário Maternidade",
      subtitle: "Benefício para mães trabalhadoras durante a licença maternidade.",
    },
    {
      image: "/images/pensao-morte.png",
      title: "Pensão por Morte",
      subtitle: "Benefício para dependentes de segurados falecidos.",
    },
    {
      image: "/images/incapacidade-temporaria.png",
      title: "Benefício por Incapacidade Temporária",
      subtitle: "Auxílio-doença para trabalhadores temporariamente incapacitados.",
    },
  ]

  const handleCardClick = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index)
  }

  return (
    <section id="atuacoes" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <p className="font-sans text-sm lg:text-base text-[#283D59] uppercase tracking-wider mb-4">SERVIÇOS</p>
          <h2 className="font-serif text-3xl lg:text-5xl font-normal text-[#111111] leading-tight">Áreas de atuação</h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out cursor-pointer hover:-translate-y-2"
              onClick={() => handleCardClick(index)}
            >
              <div className="relative h-64 lg:h-72">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />

                <div className="absolute bottom-0 left-0 right-0">
                  <div className="bg-black/40 backdrop-blur-sm p-4 transition-all duration-300 group-hover:bg-black/60">
                    <h3 className="font-serif text-lg lg:text-xl font-semibold text-white mb-1">{service.title}</h3>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        expandedCard === index ? "max-h-32" : "max-h-0 group-hover:max-h-32"
                      }`}
                    >
                      <div className="w-8 h-0.5 bg-[#FFAC33] mb-2 transition-all duration-300"></div>
                      <p
                        className={`font-sans text-sm text-white/90 leading-relaxed transition-opacity duration-300 delay-100 ${
                          expandedCard === index ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                        }`}
                      >
                        {service.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
