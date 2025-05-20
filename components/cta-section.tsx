import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CtaSection() {
  return (
    <section className="relative py-20 md:py-32">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/images/aventura.png')",
        }}
      >
        <div className="absolute inset-0 bg-dark/70 z-10"></div>
      </div>

      {/* Content */}
      <div className="container relative z-20 text-center px-4">
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white uppercase mb-4 tracking-wider">
          Pronto para sua próxima aventura?
        </h2>
        <p className="text-white text-xl max-w-2xl mx-auto mb-8">
          Entre em contato conosco e planeje sua expedição personalizada
        </p>
        <Link href="/contato">
          <Button className="btn-primary text-lg">Fale Conosco</Button>
        </Link>
      </div>
    </section>
  )
}
