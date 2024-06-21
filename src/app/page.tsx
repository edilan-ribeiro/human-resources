import { Hero } from '@/components/Hero/Hero'
import { About } from '@/components/About/About'
import { ServicesSection } from '@/components/ServicesSection/ServicesSection'

export default function Home() {
  return (
    <main>
      <Hero
        title='Seu Guia no Mercado de Trabalho'
        subtitle='Serviços Personalizados para Profissionais e Empresas'
        image='/img/home/people-working.png'
        imageAlt='pessoas trabalhando'
      />

      <About />
      <ServicesSection />
    </main>
  )
}
