"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface LoadingScreenProps {
  onLoadingComplete: () => void
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setIsVisible(false)
    }, 2500)

    const completeTimer = setTimeout(() => {
      onLoadingComplete()
    }, 3000)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(completeTimer)
    }
  }, [onLoadingComplete])

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ backgroundColor: "#0B1B33" }}
    >
      <div className="text-center">
        <div className="relative mb-4 flex justify-center">
          <div className="relative w-40 h-40 flex items-center justify-center">
            <Image src="/images/logo.png" alt="Roberto Terajima Logo" width={120} height={120} />
            <div className="orbital-spinner"></div>
          </div>
        </div>

        <div className="text-white">
          <h1 className="text-4xl font-semibold mb-2 tracking-wide" style={{ fontFamily: "var(--font-baskerville)" }}>
            Roberto Terajima
          </h1>
          <p className="text-sm opacity-80 tracking-widest font-raleway">Advocacia</p>
        </div>
      </div>

      <style jsx>{`
        .orbital-spinner {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border: 2px solid transparent;
          border-top: 2px solid #3077D7;
          border-radius: 50%;
          animation: spin 2s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}
