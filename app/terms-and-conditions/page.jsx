'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import Navbar from '@/components/navbar'
import { ScrollText } from 'lucide-react'
import { useTheme } from 'next-themes'

export default function TermsAndConditions() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setTheme('dark')
  }, [setTheme])

  if (!mounted) return null

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <div className='min-h-screen bg-[#0A0A0F] text-white'>
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className='relative pt-24 pb-16 overflow-hidden'>
          <div className='absolute inset-0 z-0'>
            <div className='absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-green-900/20 to-transparent'></div>
            <div className='absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-green-700/10 blur-[100px]'></div>
            <div className='absolute bottom-1/3 left-1/4 w-[250px] h-[250px] rounded-full bg-indigo-700/10 blur-[100px]'></div>
          </div>

          <div className='container relative z-10 px-4 md:px-6 mx-auto'>
            <motion.div
              initial='hidden'
              animate='visible'
              variants={fadeInUp}
              className='max-w-3xl mx-auto text-center'
            >
              <Badge className='mb-4 bg-white/10 text-white hover:bg-white/20 border-0 backdrop-blur-sm px-3 py-1'>
                <ScrollText className='h-3.5 w-3.5 mr-1.5' />
                Terms & Conditions
              </Badge>
              <h1 className='text-4xl md:text-5xl font-bold tracking-tight mb-6'>
                Our{' '}
                <span className='bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-indigo-400'>
                  Policies
                </span>
              </h1>
              <p className='text-xl text-white/70 mb-8'>
                Please read our terms carefully before using Skybeen App.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Terms Content Section */}
        <section className='py-16 md:py-24 relative'>
          <div className='absolute inset-0 z-0'>
            <div className='absolute top-1/2 right-1/3 w-[350px] h-[350px] rounded-full bg-indigo-700/10 blur-[100px]'></div>
          </div>

          <div className='container relative z-10 px-4 md:px-6 mx-auto'>
            <motion.div
              initial='hidden'
              animate='visible'
              variants={fadeInUp}
              className='max-w-4xl mx-auto space-y-10'
            >
              <div>
                <h2 className='text-2xl md:text-3xl font-bold mb-4'>
                  1. Acceptance of Terms
                </h2>
                <p className='text-white/70'>
                  By accessing or using Skybeen App, you agree to be bound by
                  these Terms and Conditions and our Privacy Policy. If you do
                  not agree, please do not use our services.
                </p>
              </div>

              <div>
                <h2 className='text-2xl md:text-3xl font-bold mb-4'>
                  2. User Responsibilities
                </h2>
                <p className='text-white/70'>
                  You agree to use our platform for lawful purposes only.
                  Misuse, unauthorized access, or disruption of the service is
                  strictly prohibited.
                </p>
              </div>

              <div>
                <h2 className='text-2xl md:text-3xl font-bold mb-4'>
                  3. Intellectual Property
                </h2>
                <p className='text-white/70'>
                  All content, logos, graphics, and materials on Skybeen App are
                  the intellectual property of Skybeen Education Pvt. Ltd. and
                  are protected by copyright laws.
                </p>
              </div>

              <div>
                <h2 className='text-2xl md:text-3xl font-bold mb-4'>
                  4. Limitation of Liability
                </h2>
                <p className='text-white/70'>
                  Skybeen App is provided "as is." We do not guarantee that the
                  service will be uninterrupted, secure, or error-free. We are
                  not liable for any losses or damages arising from your use of
                  our services.
                </p>
              </div>

              <div>
                <h2 className='text-2xl md:text-3xl font-bold mb-4'>
                  5. Changes to Terms
                </h2>
                <p className='text-white/70'>
                  We may update our Terms & Conditions from time to time. Any
                  changes will be posted on this page with an updated effective
                  date. Your continued use of Skybeen App constitutes acceptance
                  of the new terms.
                </p>
              </div>

              <div>
                <h2 className='text-2xl md:text-3xl font-bold mb-4'>
                  6. Contact Us
                </h2>
                <p className='text-white/70'>
                  If you have any questions about these Terms, please contact us
                  at{' '}
                  <a
                    href='mailto:contact@Skybeenapp.com'
                    className='text-green-400 hover:underline'
                  >
                    contact@Skybeenapp.com
                  </a>
                  .
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}
