export default function FooterSection() {
  return (
    <footer id="contato" className="bg-black text-white py-16 mx-0 px-[30px]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Logo and Brand */}
          <div className="lg:col-span-1 text-center lg:text-left">
            <div className="flex flex-col lg:flex-row items-center lg:items-center space-y-4 lg:space-y-0 lg:space-x-4 mb-4">
              <img src="/images/logo-white.png" alt="TR Logo" className="w-16 h-16 rounded-lg" />
              <div className="text-center lg:text-left">
                <h3 className="font-serif text-2xl font-normal text-white">Roberto Terajima</h3>
                <p className="font-sans text-base text-gray-300">Advocacia</p>
              </div>
            </div>
          </div>

          {/* Navigation Menu */}
          <div className="lg:col-span-1 text-center lg:text-left">
            <nav className="space-y-3">
              <a href="#inicio" className="block font-sans text-white hover:text-blue-400 transition-colors">
                Início
              </a>
              <a href="#sobre" className="block font-sans text-white hover:text-blue-400 transition-colors">
                Sobre mim
              </a>
              <a href="#avaliacoes" className="block font-sans text-white hover:text-blue-400 transition-colors">
                Avaliações
              </a>
              <a href="#atuacoes" className="block font-sans text-white hover:text-blue-400 transition-colors">
                Atuações
              </a>
              <a href="#diferenciais" className="block font-sans text-white hover:text-blue-400 transition-colors">
                Diferenciais
              </a>
            </nav>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-4 text-center lg:text-left">
            <div className="flex items-center space-x-3 justify-center lg:justify-start">
              <div className="w-5 h-5 text-white">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </div>
              <span className="font-sans text-sm text-white">(41) 98419-5205</span>
            </div>

            <div className="flex items-center space-x-3 justify-center lg:justify-start">
              <img src="/images/gmail-icon.png" alt="Gmail" className="w-5 h-5" />
              <span className="font-sans text-sm text-white">robertoterajimaadv@gmail.com</span>
            </div>

            <div className="flex items-center space-x-3 justify-center lg:justify-start">
              <img src="/images/localizacao.png" alt="Localização" className="w-5 h-5" />
              <span className="font-sans text-sm text-white">Rod. Dep. João Leopoldo Jacomel, 11045 - Sala 3</span>
            </div>

            <div className="flex items-center space-x-3 mt-6 pt-4 border-t border-gray-700 justify-center lg:justify-start">
              <div className="w-5 h-5 text-green-400">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <span className="font-sans text-sm text-white font-medium">Atendimento Online em todo Brasil</span>
            </div>
          </div>

          {/* Instagram Section */}
          <div className="lg:col-span-1 flex flex-col items-center lg:items-end">
            <div className="flex items-center space-x-3 mb-4 w-full">
              <div className="flex items-center justify-center space-x-2 mb-4 w-full">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6 text-white"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
  </svg>
  <h4 className="font-sans text-lg font-semibold text-white">INSTAGRAM</h4>
</div>
            </div>
            <div className="grid grid-cols-3 gap-1 max-w-48">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <a
                  key={num}
                  href="https://www.instagram.com/robertoterajimaadv/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="aspect-square relative overflow-hidden rounded-sm group hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src={`/images/instagram/post-${num}.${num === 2 || num === 5 ? "png" : "jpg"}`}
                    alt={`Instagram post ${num}`}
                    className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.689-.07-4.948 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-center font-sans text-sm text-gray-400">
            Copyright © - Roberto Terajima - Todos os direitos reservados. 2025
          </p>
        </div>
      </div>
    </footer>
  )
}
