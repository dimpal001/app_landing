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
                  Acceptance and Agreement
                </h2>
                <p className='text-white/70'>
                  By accessing or using the Skybeen App, users agree to comply
                  with and be legally bound by the Terms and Conditions outlined
                  herein, as well as our Privacy Policy. This agreement applies
                  to all users, including students, educators, and institutions.
                  If you disagree with any part of these terms, you must
                  discontinue using the app immediately.
                </p>
              </div>

              <div>
                <h2 className='text-2xl md:text-3xl font-bold mb-4'>
                  User Eligibility and Conduct
                </h2>
                <p className='text-white/70'>
                  Skybeen is an educational platform designed for use by
                  individuals aged 6 years and older. Users below the age of 13
                  must access the app under parental or institutional
                  supervision. You agree not to misuse the app by engaging in
                  illegal activities, harassing others, uploading harmful or
                  inappropriate content, or attempting to gain unauthorized
                  access to our systems. Any such activity may result in
                  permanent account suspension and legal action if applicable.
                </p>
              </div>

              <div>
                <h2 className='text-2xl md:text-3xl font-bold mb-4'>
                  Automatic Exam Generation and AI-Supported Content
                </h2>
                <p className='text-white/70'>
                  Skybeen offers automated exam creation features that generate
                  mock tests, practice assignments, and quizzes tailored to a
                  user's class, subject, language preference, and exam goal.
                  While we strive for accuracy and relevance, Skybeen does not
                  guarantee that every AI-generated question or answer is free
                  from factual errors. Users are encouraged to report issues,
                  and teachers are responsible for verifying accuracy when using
                  shared content with students.
                </p>
              </div>

              <div>
                <h2 className='text-2xl md:text-3xl font-bold mb-4'>
                  Use of Third-Party AI Technologies
                </h2>
                <p className='text-white/70'>
                  To provide intelligent, personalized educational support,
                  Skybeen integrates third-party AI services, including but not
                  limited to OpenAI and Deepseek. These tools assist in
                  generating exam questions, answers, summaries, explanations,
                  and interactive features across various subjects and
                  languages. While we utilize these technologies to enhance user
                  experience, Skybeen does not claim ownership of the AI systems
                  themselves and is not responsible for their inherent
                  limitations. By using the platform, you acknowledge and agree
                  to the involvement of these external AI providers in content
                  generation.
                </p>
              </div>

              <div>
                <h2 className='text-2xl md:text-3xl font-bold mb-4'>
                  Multilingual and Regional Support
                </h2>
                <p className='text-white/70'>
                  Skybeen supports learning in multiple Indian languages to
                  promote inclusivity and regional accessibility. While every
                  effort is made to ensure the accuracy of translated
                  educational content, minor discrepancies may occur due to
                  linguistic variations or AI translation limitations. We
                  welcome community feedback to improve and correct any such
                  issues.
                </p>
              </div>

              <div>
                <h2 className='text-2xl md:text-3xl font-bold mb-4'>
                  Intellectual Property and Ownership
                </h2>
                <p className='text-white/70'>
                  All software, designs, logos, images, text, databases, exam
                  formats, and interactive features are the exclusive
                  intellectual property of Skybeen Education Pvt. Ltd. unless
                  otherwise stated. Unauthorized reproduction, distribution,
                  modification, or sale of any part of the app’s content or
                  features is strictly prohibited and may result in civil or
                  criminal penalties.
                </p>
              </div>

              <div>
                <h2 className='text-2xl md:text-3xl font-bold mb-4'>
                  User-Generated Content
                </h2>
                <p className='text-white/70'>
                  Teachers, students, and institutions may create and share
                  original content such as notes, questions, or assignments on
                  the platform. By submitting content, you grant Skybeen a
                  worldwide, non-exclusive, royalty-free license to use,
                  reproduce, modify, and publicly display the material for
                  educational purposes within the platform. You retain full
                  copyright over your original content, and Skybeen will not
                  resell it outside the app without your consent.
                </p>
              </div>

              <div>
                <h2 className='text-2xl md:text-3xl font-bold mb-4'>
                  Subscription, Payments, and Refund Policy
                </h2>
                <p className='text-white/70'>
                  Skybeen offers both free and paid features. Premium services
                  are available through subscription plans with clearly defined
                  pricing and benefits. All payments are processed securely
                  through approved third-party gateways. Subscriptions are
                  auto-renewed unless canceled before the renewal date. We do
                  not offer refunds for partial usage, user mistakes, or
                  dissatisfaction unless mandated by law or under exceptional
                  circumstances evaluated by our support team.
                </p>
              </div>

              <div>
                <h2 className='text-2xl md:text-3xl font-bold mb-4'>
                  Data Collection and Privacy
                </h2>
                <p className='text-white/70'>
                  Skybeen collects limited personal and academic data such as
                  names, classes, email IDs, device usage stats, and location
                  preferences solely to enhance user experience and offer
                  personalized learning tools. Data is stored securely and is
                  never sold to third parties. For more details, please refer to
                  our full{' '}
                  <a
                    href='/privacy-policy'
                    className='text-green-400 hover:underline'
                  >
                    Privacy Policy
                  </a>
                  . By using the app, you consent to this data usage.
                </p>
              </div>

              <div>
                <h2 className='text-2xl md:text-3xl font-bold mb-4'>
                  Limitations of Liability
                </h2>
                <p className='text-white/70'>
                  Skybeen is offered "as-is" and "as available." We do not
                  guarantee uninterrupted or error-free service, nor do we
                  ensure that all learning outcomes will be achieved. We are not
                  liable for any damages resulting from the use or inability to
                  use our platform, including but not limited to data loss, exam
                  performance, or compatibility with third-party devices and
                  software.
                </p>
              </div>

              <div>
                <h2 className='text-2xl md:text-3xl font-bold mb-4'>
                  Termination and Suspension
                </h2>
                <p className='text-white/70'>
                  We reserve the right to terminate or suspend any user account
                  that violates these terms or engages in behavior deemed
                  harmful to the community. You may request account deletion at
                  any time by contacting our support team. Termination does not
                  absolve you of any dues, and subscription fees are
                  non-refundable upon account closure unless otherwise agreed
                  upon.
                </p>
              </div>

              <div>
                <h2 className='text-2xl md:text-3xl font-bold mb-4'>
                  Modifications to Terms
                </h2>
                <p className='text-white/70'>
                  We may revise these Terms and Conditions from time to time to
                  reflect changes in legal requirements, platform functionality,
                  or user feedback. The updated version will be published on
                  this page with an effective date. Continued use of the app
                  after modifications constitutes your agreement to the revised
                  terms.
                </p>
              </div>

              <div>
                <h2 className='text-2xl md:text-3xl font-bold mb-4'>
                  Contact and Dispute Resolution
                </h2>
                <p className='text-white/70'>
                  For any questions, clarifications, or complaints, please
                  contact our legal team at{' '}
                  <a
                    href='mailto:contact@skybeen.com'
                    className='text-green-400 hover:underline'
                  >
                    contact@skybeen.com
                  </a>
                  . In case of disputes, both parties agree to attempt
                  resolution through negotiation or mediation before pursuing
                  legal remedies.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}
