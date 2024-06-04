import Image from 'next/image'
import Link from 'next/link'
import { DesktopMenu } from './DesktopMenu/DesktopMenu'
import { MobileMenu } from './MobileMenu/MobileMenu'

export const Header = () => {
  return (
    <header className='flex w-full justify-center'>
      <div className='w-[1440px] shrink'>
        <div className='flex w-full items-center justify-between p-3'>
          <div className='px-2'>
            <Link href='/'>
              <Image src='/logo.png' alt='[COPMANY] logo' width={100} height={100} />
            </Link>
          </div>

          <DesktopMenu />

          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
