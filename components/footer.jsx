'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Mail,
  Send,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    // Handle newsletter subscription logic here
    setEmail('')
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <footer className='relative bg-[#0A0A0F] border-t border-white/10 pt-16 pb-8'>
      <div className='absolute inset-0 z-0'>
        <div className='absolute top-0 left-0 right-0 h-[150px] bg-gradient-to-b from-green-900/15 to-transparent'></div>
        <div className='absolute top-1/3 right-1/3 w-[180px] h-[180px] rounded-full bg-green-700/10 blur-[70px]'></div>
      </div>

      <div className='container relative z-10 px-4 md:px-6 mx-auto'>
        <div className='grid gap-12 md:grid-cols-4'>
          {/* Company Info */}
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={fadeInUp}
            className='space-y-4'
          >
            <h3 className='text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-indigo-400'>
              Skybeen
            </h3>
            <p className='text-white/80 text-sm leading-relaxed max-w-xs'>
              Transforming education with cutting-edge AI solutions, empowering
              students and educators worldwide.
            </p>
            <div className='flex gap-3'>
              <a
                href='https://www.instagram.com/skybeenofficial?igsh=MXhhd3h1d3Jyd2NmZQ=='
                target='_blank'
                rel='noopener noreferrer'
                className='p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors duration-300'
                aria-label='Instagram'
              >
                <Instagram className='h-4 w-4 text-white/80' />
              </a>
              <a
                href='#'
                target='_blank'
                rel='noopener noreferrer'
                className='p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors duration-300'
                aria-label='Facebook'
              >
                <Facebook className='h-4 w-4 text-white/80' />
              </a>
              <a
                href='#'
                target='_blank'
                rel='noopener noreferrer'
                className='p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors duration-300'
                aria-label='Twitter'
              >
                <Twitter className='h-4 w-4 text-white/80' />
              </a>
              <a
                href='#'
                target='_blank'
                rel='noopener noreferrer'
                className='p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors duration-300'
                aria-label='LinkedIn'
              >
                <Linkedin className='h-4 w-4 text-white/80' />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={fadeInUp}
            className='space-y-4'
          >
            <h3 className='text-lg font-semibold text-white'>Explore</h3>
            <ul className='space-y-3 text-white/80 text-sm'>
              <li>
                <a
                  href='/about'
                  className='hover:text-green-400 transition-colors duration-200'
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href='/features'
                  className='hover:text-green-400 transition-colors duration-200'
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href='/contact'
                  className='hover:text-green-400 transition-colors duration-200'
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={fadeInUp}
            className='space-y-4'
          >
            <h3 className='text-lg font-semibold text-white'>Get in Touch</h3>
            <div className='flex items-center gap-2 text-white/80 text-sm'>
              <Mail className='h-4 w-4 text-green-400' />
              <a
                href='mailto:contact@skybeen.com'
                className='hover:text-green-400 transition-colors duration-200'
              >
                contact@skybeen.com
              </a>
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={fadeInUp}
            className='space-y-4'
          >
            <h3 className='text-lg font-semibold text-white'>Stay Updated</h3>
            <p className='text-white/80 text-sm max-w-xs'>
              Subscribe for the latest updates, educational insights, and
              exclusive offers.
            </p>
            <form onSubmit={handleNewsletterSubmit} className='space-y-3'>
              <Input
                type='email'
                placeholder='Your email address'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='bg-white/5 border-white/10 text-white placeholder:text-white/50 focus:border-green-500 rounded-full'
              />
              <Button
                type='submit'
                className='w-full bg-gradient-to-r from-green-600 to-indigo-600 hover:from-green-700 hover:to-indigo-700 text-white border-0 rounded-full font-medium'
              >
                <Send className='h-4 w-4 mr-2' />
                Subscribe
              </Button>
            </form>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className='mt-12 pt-6 border-t border-white/10 text-center'>
          <p className='text-white/70 text-sm'>
            © {new Date().getFullYear()} Skybeen Technologies. All rights
            reserved.
          </p>
          <div className='mt-3 flex justify-center gap-6 text-white/80 text-sm'>
            <a
              href='/privacy'
              className='hover:text-green-400 transition-colors duration-200'
            >
              Privacy Policy
            </a>
            <a
              href='/terms'
              className='hover:text-green-400 transition-colors duration-200'
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
