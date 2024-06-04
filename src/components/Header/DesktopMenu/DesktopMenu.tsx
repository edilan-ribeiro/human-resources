import Link from 'next/link'
import menuLinks from '../data/menuLinks.json'

export const DesktopMenu = () => {
  return (
    <nav className='hidden md:block pr-2'>
      <ul className='flex items-center justify-around gap-4'>
        {menuLinks.map((link) => (
          <li key={link.name}>
            <Link href={`#${link.href}`} className='p-1 font-semibold capitalize'>
              {link.name}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href='https://wa.me/5561983769634?text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+seus+servi%C3%A7os%21'
            className='inline-block rounded bg-blue-700 px-4 py-2 font-bold text-white'
            target='_blank'
          >
            Fale conosco
          </Link>
        </li>
      </ul>
    </nav>
  )
}
