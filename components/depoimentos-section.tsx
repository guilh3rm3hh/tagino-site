"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const depoimentos = [
  {
    id: 1,
    name: "Ana Silva",
    destination: "Chapada Diamantina",
    image: "/placeholder.svg?height=100&width=100",
    text: "Uma experiência incrível! Os guias são extremamente profissionais e atenciosos. Conheci lugares que jamais imaginei existir no Brasil.",
  },
  {
    id: 2,
    name: "Carlos Mendes",
    destination: "Expedição Amazônia",
    image: "/placeholder.svg?height=100&width=100",
    text: "A organização da Tagino é impecável. Tudo foi pensado nos mínimos detalhes, desde o equipamento até a alimentação. Superou todas as minhas expectativas!",
  },
  {
    id: 3,
    name: "Juliana Costa",
    destination: "Lençóis Maranhenses",
    image: "/placeholder.svg?height=100&width=100",
    text: "Viagem perfeita! Os guias são muito conhecedores e apaixonados pelo que fazem. Já estou planejando minha próxima aventura com a Tagino.",
  },
  {
    id: 4,
    name: "Roberto Almeida",
    destination: "Jalapão",
    image: "/placeholder.svg?height=100&width=100",
    text: "Segurança e aventura na medida certa. A equipe da Tagino sabe como proporcionar momentos inesquecíveis sem comprometer a segurança do grupo.",
  },
]

export default function DepoimentosSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === depoimentos.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? depoimentos.length - 1 : prevIndex - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide()
      }, 5000)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isAutoPlaying])

  return (
    <section className="section-padding bg-light relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
        }}
      ></div>

      <div className="container relative">
        <h2 className="section-title text-primary">O que nossos aventureiros dizem</h2>

        <div className="mt-12 relative">
          <div className="flex items-center justify-center">
            <button
              onClick={prevSlide}
              className="absolute left-0 z-10 p-2 rounded-full bg-white/80 shadow-md hover:bg-white transition-all"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="h-6 w-6 text-primary" />
            </button>

            <div className="max-w-3xl mx-auto px-4">
              <div className="text-center">
                <div className="relative w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={depoimentos[currentIndex].image || "/placeholder.svg"}
                    alt={depoimentos[currentIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-foreground text-lg md:text-xl italic mb-6">"{depoimentos[currentIndex].text}"</p>
                <h3 className="font-bold text-primary">{depoimentos[currentIndex].name}</h3>
                <p className="text-foreground/70">{depoimentos[currentIndex].destination}</p>
              </div>
            </div>

            <button
              onClick={nextSlide}
              className="absolute right-0 z-10 p-2 rounded-full bg-white/80 shadow-md hover:bg-white transition-all"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="h-6 w-6 text-primary" />
            </button>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {depoimentos.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? "bg-primary scale-125" : "bg-primary/30"
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
