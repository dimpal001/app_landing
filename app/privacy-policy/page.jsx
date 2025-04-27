'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { useTheme } from 'next-themes'
import Navbar from '@/components/navbar'

export default function PrivacyPolicy() {
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
                <ShieldCheck className='h-3.5 w-3.5 mr-1.5' />
                Privacy Policy
              </Badge>
              <h1 className='text-4xl md:text-5xl font-bold tracking-tight mb-6'>
                Your{' '}
                <span className='bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-indigo-400'>
                  Privacy Matters
                </span>
              </h1>
              <p className='text-xl text-white/70 mb-8'>
                We are committed to protecting your information and being
                transparent about how we use it.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Privacy Content */}
        <section className='py-16 md:py-24 relative'>
          <div className='absolute inset-0 z-0'>
            <div className='absolute top-1/2 right-1/3 w-[350px] h-[350px] rounded-full bg-indigo-700/10 blur-[100px]'></div>
          </div>

          <div className='container relative z-10 px-4 md:px-6 mx-auto'>
            <motion.div
              initial='hidden'
              animate='visible'
              variants={fadeInUp}
              className='max-w-4xl mx-auto space-y-12'
            >
              <div className='space-y-4'>
                <h2 className='text-2xl md:text-3xl font-bold'>
                  1. Information We Collect
                </h2>
                <p className='text-white/70'>
                  We collect personal information you provide such as your name,
                  email address, and any other details you choose to share when
                  you use Skybeenapp. We may also collect technical data like
                  your IP address, device type, and usage information.
                </p>
              </div>

              <div className='space-y-4'>
                <h2 className='text-2xl md:text-3xl font-bold'>
                  2. How We Use Your Information
                </h2>
                <p className='text-white/70'>
                  We use your information to provide, maintain, and improve our
                  services, communicate with you, personalize your experience,
                  and ensure the security of our platform. We may also use data
                  for analytics and research purposes.
                </p>
              </div>

              <div className='space-y-4'>
                <h2 className='text-2xl md:text-3xl font-bold'>
                  3. Sharing of Information
                </h2>
                <p className='text-white/70'>
                  We do not sell or rent your personal information. We may share
                  information with trusted service providers who assist us in
                  operating our platform, under strict confidentiality
                  agreements. We may also share information if required by law
                  or to protect our rights.
                </p>
              </div>

              <div className='space-y-4'>
                <h2 className='text-2xl md:text-3xl font-bold'>
                  4. Data Security
                </h2>
                <p className='text-white/70'>
                  We implement strong security measures to protect your
                  information. However, no system can guarantee 100% security,
                  and you use our platform at your own risk.
                </p>
              </div>

              <div className='space-y-4'>
                <h2 className='text-2xl md:text-3xl font-bold'>
                  5. Your Rights
                </h2>
                <p className='text-white/70'>
                  You have the right to access, update, or delete your personal
                  information. You may also opt out of certain communications by
                  following the unsubscribe link provided in our emails.
                </p>
              </div>

              <div className='space-y-4'>
                <h2 className='text-2xl md:text-3xl font-bold'>
                  6. Changes to This Policy
                </h2>
                <p className='text-white/70'>
                  We may update this Privacy Policy from time to time. We
                  encourage you to review it periodically. Continued use of our
                  services after changes means you accept the updated policy.
                </p>
              </div>

              <div className='space-y-4'>
                <h2 className='text-2xl md:text-3xl font-bold'>
                  7. Contact Us
                </h2>
                <p className='text-white/70'>
                  If you have any questions about our Privacy Policy, please
                  contact us at{' '}
                  <a
                    href='mailto:privacy@skybeenapp.com'
                    className='text-green-400 hover:underline'
                  >
                    privacy@skybeenapp.com
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
