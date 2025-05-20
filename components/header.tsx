"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-primary shadow-md py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="z-50">
          <div className="flex items-center">
            <Image
              src="/images/tagino-new-logo.png"
              alt="Tagino Adventure Tour"
              width={160}
              height={80}
              className="h-16 w-auto"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <Link href="/" className="text-white hover:text-accent transition-colors">
            Início
          </Link>
          <Link href="/expedicoes" className="text-white hover:text-accent transition-colors">
            Expedições
          </Link>
          <Link href="/sobre" className="text-white hover:text-accent transition-colors">
            Sobre nós
          </Link>
          <Link href="/destinos" className="text-white hover:text-accent transition-colors">
            Destinos
          </Link>
          <Link href="/blog" className="text-white hover:text-accent transition-colors">
            Blog
          </Link>
          <Link href="/contato" className="text-white hover:text-accent transition-colors">
            Contato
          </Link>
        </nav>

        <Button className="hidden lg:flex bg-accent hover:bg-accent/90 text-dark font-bold">
          Reserve sua aventura
        </Button>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-white z-50" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        <div
          className={`
          fixed inset-0 bg-primary flex flex-col justify-center items-center
          transition-all duration-300 ease-in-out lg:hidden
          ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
        >
          <nav className="flex flex-col items-center space-y-6">
            <Link
              href="/"
              className="text-white text-2xl hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Início
            </Link>
            <Link
              href="/expedicoes"
              className="text-white text-2xl hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Expedições
            </Link>
            <Link
              href="/sobre"
              className="text-white text-2xl hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Sobre nós
            </Link>
            <Link
              href="/destinos"
              className="text-white text-2xl hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Destinos
            </Link>
            <Link
              href="/blog"
              className="text-white text-2xl hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contato"
              className="text-white text-2xl hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contato
            </Link>
            <Button className="mt-4 bg-accent hover:bg-accent/90 text-dark font-bold" onClick={() => setIsOpen(false)}>
              Reserve sua aventura
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
