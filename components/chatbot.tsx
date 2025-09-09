"use client"

import { useState } from "react"
import { MessageCircle, X } from "lucide-react"
import Image from "next/image"

const services = [
  { name: "Aposentadorias", emoji: "📋" },
  { name: "Benefício ao Idoso", emoji: "👴🏼" },
  { name: "Planejamento Previdenciário", emoji: "📝" },
  { name: "Auxílio Acidente", emoji: "💰" },
  { name: "Incapacidade Permanente", emoji: "😷" },
  { name: "Benefícios PCD", emoji: "👩🏼‍🦽" },
  { name: "Pensão por Morte", emoji: "✝" },
  { name: "Salário Maternidade", emoji: "🍼" },
  { name: "Incapacidade Temporária", emoji: "🤕" },
]

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)

  const handleServiceClick = (service: string) => {
    const message = `Olá, tenho interesse no serviço ${service} e gostaria de mais informações.`
    const whatsappUrl = `https://wa.me/5541984195205?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="chat-button-waves bg-[#3077D7] hover:bg-[#2563eb] text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-[#3077D7] text-white p-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-1">
                <Image
                  src="/images/logo.png"
                  alt="Roberto Terajima Logo"
                  width={32}
                  height={32}
                  className="object-contain rounded-full"
                />
              </div>
              <div>
                <h3 className="font-semibold text-sm">Roberto Terajima</h3>
                <p className="text-xs opacity-90">Online agora</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="p-4 max-h-96 overflow-y-auto">
            {/* Welcome Message */}
            <div className="mb-4">
              <div className="bg-gray-100 rounded-lg p-3 text-sm">
                <p className="font-medium mb-2">Direito Previdenciário!</p>
                <p className="text-gray-700 mb-3">
                  Olá! Sou o advogado Roberto Terajima, especialista em diversas áreas do direito previdenciário. Como
                  posso te ajudar hoje?
                </p>
                <p className="text-gray-600 text-xs">Como posso te ajudar hoje? Escolha uma das opções abaixo:</p>
              </div>
            </div>

            {/* Service Options */}
            <div className="space-y-2">
              {services.map((service, index) => (
                <button
                  key={index}
                  onClick={() => handleServiceClick(service.name)}
                  className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200 text-sm border border-gray-200"
                >
                  <span className="text-gray-700">
                    {service.emoji} {service.name}
                  </span>
                </button>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-4 pt-3 border-t border-gray-200">
              <p className="text-xs text-gray-500 text-center">Powered by Roberto Terajima Advocacia</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
