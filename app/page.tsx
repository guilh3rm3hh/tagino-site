import HeroSection from "@/components/hero-section"
import ExpedicoesSection from "@/components/expedicoes-section"
import SobreSection from "@/components/sobre-section"
import BeneficiosSection from "@/components/beneficios-section"
import DepoimentosSection from "@/components/depoimentos-section"
import BlogSection from "@/components/blog-section"
import CtaSection from "@/components/cta-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <ExpedicoesSection />
      <SobreSection />
      <BeneficiosSection />
      <DepoimentosSection />
      <BlogSection />
      <CtaSection />
    </>
  )
}
