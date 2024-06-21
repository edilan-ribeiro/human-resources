import Link from 'next/link'
import services from '@/data/ServicesData/services.json'

export const ServicesList = () => {
  return (
    <nav>
      <ul>
        {services.map((service) => (
          <li key={service.nome} className='py-[2px]'>
            <Link href={`/${service.link}`}>{service.nome}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
