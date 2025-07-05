'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useIsMobile } from '@/hooks/use-mobile'
import { Menu, X } from 'lucide-react'
import Logo from '../assets/skybeen_logo.png'
import Image from 'next/image'

export default function Navbar() {
  const isMobile = useIsMobile()
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Terms & Conditions', path: '/terms-and-conditions' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
    // { name: 'Features', path: '/features' },
    // { name: 'Benefits', path: '/benefits' },
    // { name: 'Pricing', path: '/pricing' },
    // { name: 'Testimonials', path: '/testimonials' },
    // { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ]

  const isActive = (path) => pathname === path

  return (
    <header className='fixed top-0 left-0 right-0 z-40 border-b border-white/5 bg-black'>
      <div className='container mx-auto px-4 md:px-6 flex h-16 items-center justify-between'>
        <div className='flex items-center gap-2'>
          <Link href='/'>
            <div className='flex gap-2 items-center'>
              <Image
                height={10}
                width={10}
                src={Logo}
                className='sm:w-10 sm:h-10 w-8 h-8'
              />
              <span className=' text-white font-bold text-xl'>Skybeen</span>
            </div>
          </Link>
        </div>

        <nav className='hidden md:flex items-center gap-6'>
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`text-sm transition-colors hover:text-white ${
                isActive(item.path)
                  ? 'text-white font-semibold'
                  : 'text-gray-400'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile menu toggle */}
        {isMobile && (
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className='md:hidden text-white'
          >
            {mobileMenuOpen ? (
              <X className='w-6 h-6' />
            ) : (
              <Menu className='w-6 h-6' />
            )}
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && isMobile && (
        <div className='md:hidden bg-black/90 backdrop-blur-md px-4 py-4'>
          <div className='flex flex-col gap-4'>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base ${
                  isActive(item.path)
                    ? 'text-white font-semibold'
                    : 'text-gray-300'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
