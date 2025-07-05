'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { useTheme } from 'next-themes'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

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
                  Information We Collect
                </h2>
                <p className='text-white/70'>
                  Skybeen collects both personal and non-personal information to
                  provide a seamless and personalized experience. Personal data
                  may include your name, email address, phone number, date of
                  birth, school or institution name, class level, and academic
                  interests. We also collect technical data such as IP address,
                  device type, device identifiers, browser type, operating
                  system, network information, and app usage behavior. If you
                  interact with AI features or generate exams, your input may
                  also be temporarily stored to improve response accuracy.
                </p>
              </div>

              <div className='space-y-4'>
                <h2 className='text-2xl md:text-3xl font-bold'>
                  How We Use Your Information
                </h2>
                <p className='text-white/70'>
                  The information we collect is used to operate, maintain, and
                  enhance the Skybeen App and its services. This includes
                  personalizing educational recommendations, generating AI-based
                  content, providing customer support, enforcing user
                  agreements, improving product performance, analyzing usage
                  trends, and communicating important updates or promotional
                  offers. Some data may be aggregated and anonymized for
                  research, academic reporting, or to enhance our AI systems.
                </p>
              </div>

              <div className='space-y-4'>
                <h2 className='text-2xl md:text-3xl font-bold'>
                  Sharing of Information
                </h2>
                <p className='text-white/70'>
                  We do not sell or rent your personal data. Information may be
                  shared with trusted third-party service providers such as
                  analytics platforms, cloud hosting providers, payment
                  gateways, and notification systems, strictly for the purposes
                  of running the platform. These partners are bound by
                  confidentiality and data protection agreements. We may also
                  disclose information to law enforcement or government
                  authorities when legally required, or if we believe such
                  disclosure is necessary to protect our rights, ensure user
                  safety, or comply with legal processes.
                </p>
              </div>

              <div className='space-y-4'>
                <h2 className='text-2xl md:text-3xl font-bold'>
                  Data Security
                </h2>
                <p className='text-white/70'>
                  We implement administrative, technical, and physical
                  safeguards to protect your information from unauthorized
                  access, disclosure, or misuse. This includes encrypted
                  communication, role-based access control, and secure data
                  storage practices. However, no system is entirely immune to
                  breaches, and by using Skybeen, you acknowledge that you use
                  our services at your own risk. If we detect a security
                  incident that affects your personal data, we will notify you
                  in accordance with applicable laws.
                </p>
              </div>

              <div className='space-y-4'>
                <h2 className='text-2xl md:text-3xl font-bold'>
                  Your Rights and Choices
                </h2>
                <p className='text-white/70'>
                  You have the right to access, correct, or delete your personal
                  information stored on Skybeen. You may request account
                  deletion at any time by contacting our support team. You also
                  have the right to opt out of non-essential communications such
                  as promotional emails. We honor user privacy preferences to
                  the extent legally and technically feasible, and we comply
                  with rights under applicable data protection laws.
                </p>
              </div>

              <div className='space-y-4'>
                <h2 className='text-2xl md:text-3xl font-bold'>
                  AI and Automated Systems
                </h2>
                <p className='text-white/70'>
                  Skybeen uses artificial intelligence and automation to
                  generate study materials, exams, and feedback. We currently
                  utilize AI models provided by third-party providers such as
                  OpenAI and DeepSeek to power these features. While user
                  interactions with AI tools may be temporarily stored for
                  performance monitoring, quality assurance, or to improve
                  future responses, this data is not used for profiling,
                  advertising, or automated decisions that significantly affect
                  user rights. We encourage users to critically review
                  AI-generated content and share feedback to help us ensure its
                  accuracy, relevance, and fairness.
                </p>
              </div>

              <div className='space-y-4'>
                <h2 className='text-2xl md:text-3xl font-bold'>
                  Children's Privacy
                </h2>
                <p className='text-white/70'>
                  Skybeen is designed for students aged 6 and above. We do not
                  knowingly collect personal information from children under 13
                  without verified parental or school administrator consent. If
                  we become aware that personal data of a child under 13 has
                  been collected without proper authorization, we will delete
                  such information promptly.
                </p>
              </div>

              <div className='space-y-4'>
                <h2 className='text-2xl md:text-3xl font-bold'>
                  Changes to This Privacy Policy
                </h2>
                <p className='text-white/70'>
                  Skybeen may update this Privacy Policy periodically to reflect
                  technological, legal, or operational changes. Users will be
                  notified of significant updates through app notifications or
                  email. Continued use of the app after updates constitutes your
                  acceptance of the revised policy. We encourage you to review
                  this page regularly to stay informed.
                </p>
              </div>

              <div className='space-y-4'>
                <h2 className='text-2xl md:text-3xl font-bold'>Contact Us</h2>
                <p className='text-white/70'>
                  For questions, concerns, or data-related requests, please
                  contact our privacy officer at{' '}
                  <a
                    href='mailto:privacy@skybeen.com'
                    className='text-green-400 hover:underline'
                  >
                    privacy@skybeen.com
                  </a>
                  . We are committed to addressing user concerns promptly and
                  transparently.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
