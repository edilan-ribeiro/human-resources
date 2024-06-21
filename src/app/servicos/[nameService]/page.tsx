import { Hero } from '@/components/Hero/Hero'
import { SectionTitle } from '@/components/SectionTitle/SectionTitle'
import services from '@/data/ServicesData/services.json'
import Link from 'next/link'

interface Params {
  nameService: string
}

export async function generateMetadata({ params }: { params: Params }) {
  const { nameService } = params
  const servico = services.find((service) => service.link === nameService)

  if (!servico) {
    return {
      title: 'Serviço não encontrado',
    }
  }

  return {
    title: servico.nome,
  }
}

export default function ServicePage({ params }: { params: Params }) {
  const { nameService } = params

  const servico = services.find((service) => service.link === nameService)

  if (!servico) {
    return (
      <div className='flex w-full justify-center text-3xl'>
        <p>Serviço não encontrado</p>
      </div>
    )
  }

  return (
    <section className='mt-12 flex w-full flex-col items-center justify-center'>
      <Hero title={servico.nome} image={`/img/servicos/${servico.img}`} imageAlt={servico.nome} />

      <SectionTitle title="Como Funciona" />

      <div className='flex max-w-desk flex-col items-center justify-center gap-10 px-12'>
        <p>{servico.detalhes}</p>
        <div>
          <Link
            href='https://wa.me/5561983769634?text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+seus+servi%C3%A7os%21'
            className='inline-block rounded bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            target='_blank'
          >
            Solicite agora
          </Link>
        </div>
      </div>
    </section>
  )
}
