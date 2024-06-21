import Link from 'next/link'
import { SectionTitle } from '../SectionTitle/SectionTitle'
import services from '@/data/ServicesData/services.json'
import Image from 'next/image'

export const ServicesSection = () => {
  return (
    <section className='mt-12 flex w-full flex-col items-center justify-center' id='servicos'>
      <div className='max-w-desk w-full'>
        <SectionTitle title='Serviços'/>

        <ul className='grid grid-cols-mobile sm:grid-cols-desktop gap-3 text-center mt-6 lg:px-12 px-8'>
          {services.map((service) => (
            <li key={service.nome}>
              <div className='h-full rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800 '>
                <Link href={`/${service.link}`} target='_blank'>
                  <div className='relative aspect-video'>
                    <Image
                      className='rounded-t-lg'
                      src={`/img/servicos/${service.img}`}
                      alt={service.nome}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </Link>

                <div className='p-5'>
                  <Link href={`/${service.link}`} target='_blank'>
                    <h3 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                      {service.nome}
                    </h3>
                  </Link>

                  <p className='mb-3 font-normal text-gray-700 dark:text-gray-400 max-h-24'>
                    {service.descricao}
                  </p>

                  <div className='flex justify-center pt-3'>
                    <Link
                      href={`/${service.link}`}
                      target='_blank'
                      className='inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                    >
                      Saiba mais
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
