"use client"
import Image from "next/image"

export default function LegalServicesSection() {
  return (
    <div className="bg-[rgba(250,246,241,1)] py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-4xl mx-auto">
          {/* Card 1 - Disponibilidade Imediata */}
          <div
            className="group relative overflow-hidden transition-all duration-500 ease-in-out hover:scale-105 hover:z-10 hover:shadow-2xl"
            style={{ backgroundColor: "#0B1B33" }}
          >
            <div className="p-4 md:p-6 text-center text-white min-h-[280px] flex flex-col justify-center items-center relative">
              <div className="mb-6 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src="/images/disponibilidade-imediata.png"
                  alt="Disponibilidade Imediata"
                  width={60}
                  height={60}
                  className="mx-auto filter brightness-0 invert"
                />
              </div>
              <div className="space-y-3">
                <h3 className="text-lg md:text-xl font-semibold leading-tight">Disponibilidade Imediata:</h3>
                <p className="text-sm md:text-base leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                  A agilidade e conforto que você precisa em um só lugar.
                </p>
              </div>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Card 2 - Centenas de benefícios */}
          <div
            className="group relative overflow-hidden transition-all duration-500 ease-in-out hover:scale-105 hover:z-10 hover:shadow-2xl"
            style={{ backgroundColor: "#283D59" }}
          >
            <div className="p-4 md:p-6 text-center text-white min-h-[280px] flex flex-col justify-center items-center relative">
              <div className="mb-6 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src="/images/beneficios.png"
                  alt="Benefícios"
                  width={60}
                  height={60}
                  className="mx-auto filter brightness-0 invert"
                />
              </div>
              <div className="space-y-3">
                <h3 className="text-lg md:text-xl font-semibold leading-tight">
                  Centenas de benefícios conquistados!
                </h3>
                <p className="text-sm md:text-base leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                  Garantindo os direitos de nossos clientes.
                </p>
              </div>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Card 3 - Escritório reconhecido */}
          <div
            className="group relative overflow-hidden transition-all duration-500 ease-in-out hover:scale-105 hover:z-10 hover:shadow-2xl"
            style={{ backgroundColor: "#1A1919" }}
          >
            <div className="p-4 md:p-6 text-center text-white min-h-[280px] flex flex-col justify-center items-center relative">
              <div className="mb-6 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src="/images/merito-advocaticio.png"
                  alt="Mérito Advocatício"
                  width={60}
                  height={60}
                  className="mx-auto filter brightness-0 invert"
                />
              </div>
              <div className="space-y-3">
                <h3 className="text-lg md:text-xl font-semibold leading-tight">Escritório honrado publicamente com o título de Mérito Advocatício,</h3>
                <p className="text-sm md:text-base leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                  pela qualidade dos serviços jurídicos prestados.
                </p>
              </div>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
