import Link from 'next/link'
import { Contacts } from './FooterComponents/Contacts/Contacts'
import { ServicesList } from './FooterComponents/ServicesList/ServicesList'
import { Socials } from './FooterComponents/Socials/Socials'
import { FooterCredit } from './FooterComponents/FooterCredit/FooterCredit'

export const Footer = () => {
  return (
    <footer className='mt-12 flex w-full flex-col items-center justify-center bg-sky-900 pt-6 text-white'>
      <div className='mx-auto md:w-full max-w-desk justify-center'>
        <div className='flex w-full max-w-desk justify-between px-8 lg:px-12 flex-col md:flex-row gap-10'>
          <div>
            <h4 className='mb-4 text-xl font-bold font-neutral-200'>Siga-nos</h4>

            <Socials />
          </div>

          <div>
            <h4 className='mb-4 text-xl font-bold'>Serviços</h4>

            <ServicesList />
          </div>

          <div>
            <h4 className='mb-4 text-xl font-bold'>Contato</h4>

            <div>
              <Contacts />
            </div>
          </div>
        </div>
      </div>
      <FooterCredit/>
    </footer>
  )
}
