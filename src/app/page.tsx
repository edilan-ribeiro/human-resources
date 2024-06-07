import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'
import { MobileMenu } from '@/components/Header/MobileMenu/MobileMenu'
import { Hero } from '@/components/Hero/Hero'

export default function Home() {
  return (
    <div className='w-vw flex flex-col justify-center overflow-x-hidden'>
      <Header />

      <main>
        <Hero
          title='Seu Guia no Mercado de Trabalho'
          subtitle='Serviços Personalizados para Profissionais e Empresas'
          image='/img/home/people-working.png'
          imageAlt='pessoas trabalhando'
        />
      </main>
      {/* <Footer/> */}
    </div>
  )
}
