'use client'

import { Divide as Hamburger } from 'hamburger-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import menuLinks from '../data/menuLinks.json'

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const mobileMenuVariants = {
    menuOpen: { opacity: 1, x: 0 },
    menuClose: { opacity: 0, x: '50%' },
  }

  function closeMenuGesture() {
    if (isOpen) {
      setIsOpen(false)
    }
  }

  return (
    <div className='md:hidden'>
      <button className='fixed right-4 top-8 z-50 rounded bg-slate-800'>
        <Hamburger
          toggled={isOpen}
          toggle={setIsOpen}
          label={`menu mobile ${isOpen ? 'aberto' : 'fechado'}`}
          color='#FFFFFF'
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className='fixed right-0 top-0 z-10 h-dvh w-3/4 bg-black/50'
            initial={{ opacity: 0, x: '50%' }}
            exit={{ opacity: 0, x: '50%' }}
            animate={isOpen ? 'menuOpen' : 'menuClose'}
            transition={{ ease: [0.17, 0.67, 0.83, 0.67] }}
            variants={mobileMenuVariants}
            onPanEnd={closeMenuGesture}
          >
            <nav className='mt-24 text-xl capitalize' aria-expanded={isOpen}>
              <ul className='flex flex-col gap-2 text-right text-gray-100'>
                {menuLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={`/#${link.href}`} className='inline-block w-full px-4 py-3 font-semibold'>
                      {link.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href='https://wa.me/5561983769634?text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+seus+servi%C3%A7os%21'
                    className='mr-4 mt-6 inline-block rounded bg-blue-700 px-4 py-2 font-bold text-white'
                    target='_blank'
                  >
                    Fale conosco
                  </Link>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
