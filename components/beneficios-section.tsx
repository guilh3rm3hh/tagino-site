import { Compass, Shield, Users, Award } from "lucide-react"

const beneficios = [
  {
    icon: <Compass className="h-12 w-12 text-accent" />,
    title: "Guias Experientes",
    description: "Profissionais certificados com amplo conhecimento das regiões visitadas.",
  },
  {
    icon: <Shield className="h-12 w-12 text-accent" />,
    title: "Segurança em Primeiro Lugar",
    description: "Equipamentos de qualidade e protocolos rigorosos para sua tranquilidade.",
  },
  {
    icon: <Users className="h-12 w-12 text-accent" />,
    title: "Pequenos Grupos",
    description: "Experiências mais personalizadas e menor impacto ambiental.",
  },
  {
    icon: <Award className="h-12 w-12 text-accent" />,
    title: "Roteiros Exclusivos",
    description: "Destinos cuidadosamente selecionados para experiências únicas.",
  },
]

export default function BeneficiosSection() {
  return (
    <section className="section-padding bg-primary text-white">
      <div className="container">
        <h2 className="section-title text-white">Por que escolher a Tagino</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {beneficios.map((beneficio, index) => (
            <div key={index} className="text-center p-6 bg-primary-dark/20 rounded-lg">
              <div className="flex justify-center mb-4">{beneficio.icon}</div>
              <h3 className="font-heading text-xl mb-3">{beneficio.title}</h3>
              <p className="text-white/80">{beneficio.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
