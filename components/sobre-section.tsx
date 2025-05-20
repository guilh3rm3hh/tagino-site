import Image from "next/image"

export default function SobreSection() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl text-primary uppercase mb-6">Quem Somos</h2>
            <p className="text-foreground mb-6">
              A Tagino Adventure Tour nasceu da paixão por aventuras e do desejo de compartilhar experiências únicas em
              contato com a natureza. Há mais de 10 anos, organizamos expedições que combinam adrenalina, descoberta e
              respeito pelo meio ambiente.
            </p>
            <p className="text-foreground mb-6">
              Nossa equipe é formada por guias experientes e apaixonados, especialistas em ecoturismo e aventura,
              comprometidos em proporcionar experiências seguras e inesquecíveis para nossos clientes.
            </p>
            <p className="text-foreground mb-6">
              Acreditamos que viajar é muito mais do que conhecer lugares novos - é conectar-se com a natureza, com
              diferentes culturas e, principalmente, consigo mesmo.
            </p>

            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center">
                <p className="text-4xl font-bold text-primary">10+</p>
                <p className="text-sm text-foreground/80">Anos de experiência</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-primary">500+</p>
                <p className="text-sm text-foreground/80">Expedições realizadas</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-primary">5000+</p>
                <p className="text-sm text-foreground/80">Aventureiros satisfeitos</p>
              </div>
            </div>
          </div>

          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/images/sobre nos.png"
              alt="Equipe Tagino Adventure"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
