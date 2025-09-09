"use client"

import WhatsAppButton from "@/components/whatsapp-button"

export default function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capa%20%20Advogado-lKJgWBE43ltF9dEtwiF4Ume8XYJ6c5.png')`,
        }}
      />

      {/* Dark overlay for text contrast */}
      <div className="absolute inset-0 bg-black/80" />

     

      <div className="relative z-10 container mx-auto px-8 lg:px-16 xl:px-24 py-20 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[80vh] pt-0">
          <div className="space-y-6 lg:space-y-8 lg:order-1 order-1">
            <div className="space-y-4 lg:space-y-6">
              <h1 className="font-serif text-4xl lg:text-6xl font-normal text-white leading-tight text-center lg:text-left">
                Buscando um
                <br />
                Especialista em <span className="text-[#3077D7]">Direito Previdenciário</span>?
              </h1>

              <p className="font-sans text-lg lg:text-xl text-[#FBF6F0] max-w-lg leading-relaxed text-center lg:text-left mx-auto lg:mx-0">
                Oferecemos atendimento personalizado. Nacional e Internacional.
              </p>
            </div>

            <div className="flex justify-center lg:justify-start">
              <div className="scale-90 lg:scale-75 lg:origin-left">
                <WhatsAppButton />
              </div>
            </div>
          </div>

          <div className="relative justify-center lg:justify-end hidden lg:flex lg:order-2">
            <div className="relative z-20">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capa%20%20Advogado%20%283%29-irBPlEUnwkTOEA003rn6ULEmKT8ZDs.png"
                alt="Roberto Terajima - Advogado Especialista em Direito Previdenciário"
                className="w-80 lg:w-[24rem] xl:w-[28rem] h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
