import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const expedicoes = [
  {
    id: 1,
    title: "Trilhas da Chapada Diamantina",
    description: "Explore as cachoeiras e montanhas deste paraíso natural",
    image: "/images/Chapada Expedição.png",
    duration: "7 dias",
    difficulty: "Moderado",
    price: 3500,
  },
  {
    id: 2,
    title: "Expedição Amazônia",
    description: "Aventure-se pela maior floresta tropical do mundo",
    image: "/images/Amazonia Expedição.png",
    duration: "10 dias",
    difficulty: "Desafiador",
    price: 5200,
  },
  {
    id: 3,
    title: "Trekking Patagônia",
    description: "Caminhe entre geleiras e montanhas impressionantes",
    image: "/images/Trekking Patagônia .png",
    duration: "12 dias",
    difficulty: "Difícil",
    price: 7800,
  },
  {
    id: 4,
    title: "Lençóis Maranhenses",
    description: "Descubra as dunas e lagoas cristalinas deste cenário único",
    image: "/images/Maranhao.png",
    duration: "5 dias",
    difficulty: "Fácil",
    price: 2900,
  },
  {
    id: 5,
    title: "Jalapão Selvagem",
    description: "Conheça o deserto brasileiro com suas dunas douradas",
    image: "/images/Jalapao 2.png",
    duration: "8 dias",
    difficulty: "Moderado",
    price: 4100,
  },
  {
    id: 6,
    title: "Ilha do Mel",
    description: "Trilhas costeiras e praias paradisíacas no litoral paranaense",
    image: "/images/ilha do mel.png",
    duration: "4 dias",
    difficulty: "Fácil",
    price: 1800,
  },
]

export default function ExpedicoesSection() {
  return (
    <section className="section-padding bg-light">
      <div className="container">
        <h2 className="section-title text-primary">Nossas Expedições</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {expedicoes.map((expedicao) => (
            <Link href={`/expedicoes/${expedicao.id}`} key={expedicao.id}>
              <Card className="overflow-hidden card-hover h-full">
                <div className="relative h-48 w-full">
                  <Image
                    src={expedicao.image || "/placeholder.svg"}
                    alt={expedicao.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl text-primary mb-2">{expedicao.title}</h3>
                  <p className="text-foreground/80 mb-4">{expedicao.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      <Badge variant="outline" className="bg-white">
                        {expedicao.duration}
                      </Badge>
                      <Badge variant="outline" className="bg-white">
                        {expedicao.difficulty}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex justify-between items-center">
                  <p className="font-bold text-primary">A partir de R$ {expedicao.price}</p>
                  <span className="text-sm text-primary underline">Saiba mais</span>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/expedicoes">
            <button className="btn-primary">Ver todas as expedições</button>
          </Link>
        </div>
      </div>
    </section>
  )
}
