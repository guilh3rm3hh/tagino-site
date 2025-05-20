import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/images/hero-chapada.png')",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-dark/40 z-10"></div>
      </div>

      {/* Content */}
      <div className="container relative z-20 text-center px-4">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white uppercase mb-4 tracking-wider">
          Aventuras Inesquecíveis na Natureza
        </h1>
        <p className="text-white text-xl md:text-2xl max-w-3xl mx-auto mb-8">
          Expedições guiadas em destinos incríveis para amantes da aventura
        </p>
        <Link href="/expedicoes">
          <Button className="btn-primary text-lg">Conheça nossas expedições</Button>
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 5V19M12 19L5 12M12 19L19 12"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  )
}
