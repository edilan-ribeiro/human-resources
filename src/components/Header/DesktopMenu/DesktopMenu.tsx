import Link from 'next/link'
import menuLinks from '../data/menuLinks.json'

export const DesktopMenu = () => {
  return (
    <nav className='hidden pr-2 md:block'>
      <ul className='flex items-center justify-around gap-4'>
        {menuLinks.map((link) => (
          <li key={link.name}>
            <Link href={`/#${link.href}`} className='p-1 font-semibold capitalize'>
              {link.name}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href='https://wa.me/5561983769634?text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+seus+servi%C3%A7os%21'
            className='inline-block rounded bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            target='_blank'
          >
            Fale conosco
          </Link>
        </li>
      </ul>
    </nav>
  )
}
