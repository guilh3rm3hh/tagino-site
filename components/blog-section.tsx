import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { CalendarIcon } from "lucide-react"

const posts = [
  {
    id: 1,
    title: "As 10 trilhas mais impressionantes do Brasil",
    excerpt: "Descubra os caminhos que todo aventureiro deveria percorrer pelo menos uma vez na vida.",
    image: "/images/trilha-1.png",
    date: "15 Mai 2025",
  },
  {
    id: 2,
    title: "Guia completo para trekking na Chapada Diamantina",
    excerpt: "Tudo o que você precisa saber antes de se aventurar por este paraíso natural.",
    image: "/images/trilha-2.png",
    date: "02 Mai 2025",
  },
  {
    id: 3,
    title: "Ecoturismo responsável: como viajar sem impactar a natureza",
    excerpt: "Dicas práticas para minimizar seu impacto ambiental durante suas aventuras.",
    image: "/images/trilha-3.png",
    date: "28 Abr 2025",
  },
]

export default function BlogSection() {
  return (
    <section className="section-padding">
      <div className="container">
        <h2 className="section-title text-primary">Últimas Aventuras</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {posts.map((post) => (
            <Link href={`/blog/${post.id}`} key={post.id}>
              <Card className="overflow-hidden card-hover h-full">
                <div className="relative h-48 w-full">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-foreground/70 mb-2">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <h3 className="font-heading text-xl text-primary mb-2">{post.title}</h3>
                  <p className="text-foreground/80">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <span className="text-primary font-medium hover:underline">Ler mais</span>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/blog">
            <button className="btn-primary">Ver todos os posts</button>
          </Link>
        </div>
      </div>
    </section>
  )
}
