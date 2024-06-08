import Image from 'next/image'
import { SectionTitle } from '../SectionTitle/SectionTitle'

export const About = () => {
  return (
    <section className='mt-12 flex w-full flex-col items-center justify-center' id='sobre'>
      <SectionTitle title="sobre nós" />

      <div className='flex max-w-desk flex-col items-center justify-center gap-10 px-12 lg:flex-row'>
        
        <div className='flex min-w-72 flex-col gap-5 text-center lg:w-3/5 lg:text-left lg:pb-5'>

          <div className='flex flex-col gap-5 text-xl tracking-wide'>
            <p className='first-letter:uppercase'>
              somos uma equipe dedicada e apaixonada por transformar a maneira como as empresas gerenciam seus recursos
              humanos.
            </p>
            <p className='first-letter:uppercase'>
              Com anos de experiência em RH, focamos em fornecer soluções inovadoras que não só simplificam processos
              complexos, mas também empoderam líderes de RH a tomar decisões estratégicas baseadas em dados precisos.
            </p>
            <p className='first-letter:uppercase'>
              Nosso compromisso é com a excelência e a satisfação dos clientes, sempre buscando novas formas de integrar
              tecnologia e gestão de pessoas para promover ambientes de trabalho produtivos e inclusivos.
            </p>
          </div>
        </div>

        <div className='relative mx-5 aspect-[1.1] w-full overflow-hidden lg:max-w-lg'>
          <Image
            src='/img/home/about.png'
            alt='pessoa trabalhando'
            fill
            objectFit='cover'
            className='rounded-2xl object-center'
          />
        </div>
      </div>
    </section>
  )
}
