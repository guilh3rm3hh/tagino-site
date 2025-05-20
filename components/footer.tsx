import Link from "next/link"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div>
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/images/tagino-new-logo.png"
                alt="Tagino Adventure Tour"
                width={160}
                height={80}
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-white/80 mb-6">
              Expedições guiadas em destinos incríveis para amantes da aventura. Conectando pessoas à natureza desde
              2015.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white/80 hover:text-accent transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-white/80 hover:text-accent transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-white/80 hover:text-accent transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-white/80 hover:text-accent transition-colors">
                <Youtube size={20} />
                <span className="sr-only">Youtube</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg mb-4 uppercase">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/80 hover:text-accent transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/expedicoes" className="text-white/80 hover:text-accent transition-colors">
                  Expedições
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-white/80 hover:text-accent transition-colors">
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link href="/destinos" className="text-white/80 hover:text-accent transition-colors">
                  Destinos
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white/80 hover:text-accent transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-white/80 hover:text-accent transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-lg mb-4 uppercase">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-accent shrink-0 mt-0.5" />
                <span className="text-white/80">Av. Paulista, 1000, São Paulo - SP, Brasil</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-accent" />
                <span className="text-white/80">+55 (11) 99999-9999</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-accent" />
                <span className="text-white/80">contato@tagino.com.br</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-heading text-lg mb-4 uppercase">Newsletter</h3>
            <p className="text-white/80 mb-4">
              Inscreva-se para receber novidades sobre expedições e dicas de aventura.
            </p>
            <div className="flex flex-col space-y-2">
              <Input
                type="email"
                placeholder="Seu e-mail"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
              <Button className="bg-accent hover:bg-accent/90 text-dark font-medium">Inscrever</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            &copy; {new Date().getFullYear()} Tagino Adventure Tour. Todos os direitos reservados.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/termos" className="text-white/60 text-sm hover:text-white transition-colors">
              Termos de Uso
            </Link>
            <Link href="/privacidade" className="text-white/60 text-sm hover:text-white transition-colors">
              Política de Privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
