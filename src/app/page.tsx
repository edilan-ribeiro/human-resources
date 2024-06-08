import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'
import { Hero } from '@/components/Hero/Hero'
import { About } from '@/components/About/About'
import { ServicesSection } from '@/components/ServicesSection/ServicesSection'

export default function Home() {
  return (
    <div className='w-vw flex flex-col justify-center overflow-clip	'>
      <Header />

      <main>
        <Hero
          title='Seu Guia no Mercado de Trabalho'
          subtitle='Serviços Personalizados para Profissionais e Empresas'
          image='/img/home/people-working.png'
          imageAlt='pessoas trabalhando'
        />

        <About />
        <ServicesSection/>
      </main>
      {/* <Footer/> */}
    </div>
  )
}
