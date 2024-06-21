import Link from 'next/link'
import { FaPhone, FaWhatsapp } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { LuMailOpen } from 'react-icons/lu'

export const Contacts = () => {
  return (
    <div>
      <nav>
        <ul className='flex flex-col gap-3'>
          <li>
            <Link href='https://wa.me/8534234465?text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+seus+servi%C3%A7os%21'>
              <div className='flex items-center gap-2'>
                <FaWhatsapp size={22} /> <p>(85) 3423-4465</p>
              </div>
            </Link>
          </li>
          <li>
            <Link href='tel:+8534234465'>
              <div className='flex items-center gap-2'>
                <FaPhone size={22} /> <p>(85) 3423-4465</p>
              </div>
            </Link>
          </li>
          <li>
            <Link href='mailto:emailDoRh@provedorRH.com.br'>
              <div className='flex items-center gap-2'>
                <LuMailOpen size={22} /> <p>emailDoRh@provedorRH.com.br</p>
              </div>
            </Link>
          </li>
          <li>
            <Link href='https://maps.app.goo.gl/RZQpRnEzjis8CFVv8'>
              <div className='flex items-center gap-2'>
                <FaLocationDot size={22} />
                <div>
                  <p className='max-w-72'>R. do DF, lote 99 - Asa Sul</p>
                  <p>CEP: 70610-635 Brasília - DF</p>
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
