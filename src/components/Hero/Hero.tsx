import Image from 'next/image'

interface HeroProps {
  title: string
  subtitle?: string
  image: string
  imageAlt: string
}

export const Hero = ({ title, subtitle, image, imageAlt }: HeroProps) => {
  return (
    <section className='w-full mb-4'>
      <div className='relative flex h-[570px] justify-center text-center'>
        <div className='absolute inset-0 z-0 bg-black/30 shadow-[inset_0_0_49px_31px_rgba(0,0,0,0.50)]'></div>
        <Image
          className='z-[-1]'
          src={image}
          alt={imageAlt}
          fill
          style={{ objectFit: 'cover', objectPosition: 'top ' }}
        />

        <div className='max-w-desk relative z-[1] flex h-full flex-col items-center justify-center gap-6 text-gray-100'>
          <h1 className='text-4xl font-semibold uppercase tracking-tight md:text-5xl'>{title}</h1>
          <h2 className='text-xl tracking-wide md:text-2xl'>{subtitle}</h2>
        </div>
      </div>
    </section>
  )
}
