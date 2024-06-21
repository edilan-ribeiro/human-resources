import Link from 'next/link'
import { FaFacebookSquare, FaInstagramSquare, FaTiktok } from 'react-icons/fa'

export const Socials = () => {
  return (
    <nav >
      <ul className='flex gap-3 text-4xl'>
        <li>
          <Link href='https://www.facebook.com/'>
            <FaFacebookSquare />
          </Link>
        </li>
        <li>
          <Link href='https://www.instagram.com/'>
            <FaInstagramSquare />
          </Link>
        </li>
        <li>
          <Link href='https://www.tiktok.com/'>
            <FaTiktok />
          </Link>
        </li>
      </ul>
    </nav>
  )
}
