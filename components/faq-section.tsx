"use client"

import { useState } from "react"

export default function FaqSection() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)

  const handleFAQClick = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index)
  }

  const faqData = [
    {
      question: "O atendimento é presencial ou online?",
      answer:
        "Atendemos de forma presencial em nosso escritório em Pinhais/PR e também 100% online para clientes de qualquer lugar do Brasil. No atendimento online, todo o processo é feito de forma segura, prática e com a mesma atenção e cuidado que no presencial.",
    },
    {
      question: "O que fazer se meu pedido de aposentadoria ou benefício for negado?",
      answer:
        "Se o INSS negou seu pedido, é possível recorrer administrativamente ou entrar com ação judicial. O importante é não desistir sem uma análise detalhada do seu caso — muitas negativas acontecem por falta de documentos ou erros de análise. Nosso escritório revisa todo o processo e orienta sobre o caminho mais rápido para reverter a decisão.",
    },
    {
      question: "Quais documentos preciso levar para o primeiro atendimento?",
      answer:
        "Para que possamos fazer uma análise precisa, é importante trazer:\n\n• Documento de identidade (RG ou CNH)\n• CPF\n• Comprovante de residência\n• Carteira de Trabalho\n• Extrato do CNIS\n• Carnês ou guias de recolhimento (se houver)\n• Senha do gov.br\n• Documentos médicos (em casos de benefícios por incapacidade)\n\nSe não tiver todos os documentos, não se preocupe: no primeiro atendimento já indicamos como conseguir o que falta.",
    },
    {
      question: "Quando posso me aposentar e qual será o valor do meu benefício?",
      answer:
        "A resposta depende do seu tempo de contribuição, idade, regras de transição e histórico de trabalho. Nosso escritório faz um cálculo previdenciário completo, simulando todas as regras para descobrir o momento ideal para se aposentar e o valor mais vantajoso do benefício.",
    },
    {
      question: "Já sou aposentado, posso aumentar o valor do meu benefício?",
      answer:
        "Sim, em alguns casos é possível revisar o valor do benefício, como quando o INSS deixou de considerar períodos de trabalho, contribuições ou valores corretos na época do cálculo. Fazemos uma análise gratuita para verificar se você tem direito a uma revisão e qual pode ser o impacto no valor da sua aposentadoria.",
    },
  ]

  return (
    <section className="py-20 bg-[#283D59]">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl lg:text-5xl font-normal text-white leading-tight">
            Perguntas Frequentes (FAQ)
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out"
            >
              <button
                onClick={() => handleFAQClick(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="font-sans text-base lg:text-lg font-semibold text-[#000000] pr-4">{faq.question}</h3>
                <div
                  className={`flex-shrink-0 w-6 h-6 transition-transform duration-300 ${
                    expandedFAQ === index ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <svg className="w-full h-full text-[#283D59]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  expandedFAQ === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-5">
                  <div className="w-full h-px bg-gray-200 mb-4"></div>
                  <p className="font-sans text-sm lg:text-base text-[#333333] leading-relaxed whitespace-pre-line">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
