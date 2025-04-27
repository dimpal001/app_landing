'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { MessageSquare, Download, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { useTheme } from 'next-themes'
import Navbar from '@/components/navbar'

export default function FAQ() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Set theme to dark by default
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
                <MessageSquare className='h-3.5 w-3.5 mr-1.5' />
                FAQ
              </Badge>
              <h1 className='text-4xl md:text-5xl font-bold tracking-tight mb-6'>
                Frequently Asked{' '}
                <span className='bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-indigo-400'>
                  Questions
                </span>
              </h1>
              <p className='text-xl text-white/70 mb-8'>
                Find answers to common questions about Skybeen and how it can
                transform your educational journey.
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className='py-16 md:py-24 relative'>
          <div className='absolute inset-0 z-0'>
            <div className='absolute top-1/2 right-1/3 w-[350px] h-[350px] rounded-full bg-indigo-700/10 blur-[100px]'></div>
          </div>

          <div className='container relative z-10 px-4 md:px-6 mx-auto'>
            <div className='max-w-3xl mx-auto'>
              <Accordion type='single' collapsible className='w-full'>
                {[
                  {
                    question:
                      'How accurate are the AI-generated question papers?',
                    answer:
                      'Our AI-generated question papers are designed to closely match the curriculum and exam patterns. They are regularly reviewed and updated based on feedback from educators to ensure high accuracy and relevance.',
                  },
                  {
                    question: 'Is Skybeen suitable for all subjects?',
                    answer:
                      'Yes, Skybeen supports all major subjects taught in Indian schools and colleges. Our AI is trained on diverse educational content to provide comprehensive support across disciplines.',
                  },
                  {
                    question: 'How does the subscription work?',
                    answer:
                      'We offer both free and premium plans. The free plan gives you access to basic features, while the premium plan unlocks all features including unlimited question paper generation, advanced analytics, and teacher tools.',
                  },
                  {
                    question: 'Can teachers monetize their content on Skybeen?',
                    answer:
                      'Teachers can create and share their study materials, question papers, and teaching methodologies on our platform and earn revenue when students access their premium content.',
                  },
                  {
                    question: 'Is my data secure on Skybeen?',
                    answer:
                      'We take data security very seriously. All user data is encrypted and stored securely. We do not sell personal information to third parties and comply with all relevant data protection regulations.',
                  },
                  {
                    question: 'How does Skybeen use AI ethically?',
                    answer:
                      'We use AI to enhance learning, not replace real teaching. Our AI tools are designed to be transparent, with no manipulative suggestions or unwanted influence. We regularly review our AI systems to ensure they align with ethical standards in education.',
                  },
                  {
                    question: 'Can I access Skybeen offline?',
                    answer:
                      'Yes, premium users can download study materials, question papers, and other resources for offline access. This is especially useful for students in areas with limited internet connectivity.',
                  },
                  {
                    question: 'Is Skybeen available in multiple languages?',
                    answer:
                      'Currently, Skybeen is available in English and Hindi, with plans to add more Indian languages soon. Our goal is to make quality education accessible to students across all regions of India.',
                  },
                  {
                    question:
                      'How does the AI tutor adapt to my learning style?',
                    answer:
                      'Our AI tutor analyzes your interactions, performance, and preferences to create a personalized learning profile. It then adjusts its teaching methods, explanations, and question difficulty to match your unique learning style and pace.',
                  },
                  {
                    question: 'Can educational institutions get bulk licenses?',
                    answer:
                      'Yes, we offer special pricing and custom features for schools, colleges, and educational institutions. Please contact our sales team for more information on bulk licensing and institutional partnerships.',
                  },
                ].map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className='border-b border-white/10 last:border-0'
                  >
                    <AccordionTrigger className='text-left text-lg font-medium py-6 hover:no-underline hover:text-green-400 transition-colors'>
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className='text-white/70 pb-6'>
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className='py-16 md:py-24 relative'>
          <div className='absolute inset-0 z-0'>
            <div className='absolute top-0 left-0 right-0 h-[200px] bg-gradient-to-b from-black to-transparent'></div>
            <div className='absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-black to-transparent'></div>
            <div className='absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full bg-green-700/10 blur-[100px]'></div>
          </div>

          <div className='container relative z-10 px-4 md:px-6 mx-auto'>
            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              variants={fadeInUp}
              className='max-w-3xl mx-auto text-center mb-16'
            >
              <h2 className='text-3xl md:text-4xl font-bold tracking-tight'>
                Browse by{' '}
                <span className='bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-indigo-400'>
                  Category
                </span>
              </h2>
              <p className='text-white/70 text-lg mt-4'>
                Find answers to specific questions related to different aspects
                of Skybeen.
              </p>
            </motion.div>

            <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto'>
              {[
                {
                  title: 'For Students',
                  description:
                    'Questions about study plans, exams, and learning features',
                  link: '/faq/students',
                },
                {
                  title: 'For Teachers',
                  description:
                    'Questions about teaching tools, content creation, and monetization',
                  link: '/faq/teachers',
                },
                {
                  title: 'Technical Support',
                  description:
                    'Questions about app usage, troubleshooting, and device compatibility',
                  link: '/faq/technical',
                },
                {
                  title: 'Billing & Subscriptions',
                  description:
                    'Questions about pricing, payment methods, and subscription management',
                  link: '/faq/billing',
                },
                {
                  title: 'Privacy & Security',
                  description:
                    'Questions about data protection, privacy policies, and security measures',
                  link: '/faq/privacy',
                },
                {
                  title: 'Partnerships',
                  description:
                    'Questions about institutional partnerships and collaboration opportunities',
                  link: '/faq/partnerships',
                },
              ].map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className='group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:bg-white/10 transition-all duration-300'
                >
                  <div className='absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br from-green-600/20 to-indigo-600/20 rounded-full blur-2xl group-hover:opacity-100 opacity-0 transition-opacity duration-500'></div>

                  <div className='relative z-10'>
                    <h3 className='text-xl font-bold mb-2'>{category.title}</h3>
                    <p className='text-white/70 mb-4'>{category.description}</p>

                    <Link
                      href={category.link}
                      className='inline-flex items-center text-green-400 font-medium'
                    >
                      <span>View questions</span>
                      <ArrowRight className='h-4 w-4 ml-2 transition-transform group-hover:translate-x-1' />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Still Have Questions */}
        <section className='py-16 md:py-24 relative'>
          <div className='absolute inset-0 z-0'>
            <div className='absolute inset-0 bg-gradient-to-br from-green-900/20 to-indigo-900/20'></div>
          </div>

          <div className='container relative z-10 px-4 md:px-6 mx-auto'>
            <div className='relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-green-900/40 to-indigo-900/40 backdrop-blur-xl p-8 md:p-12'>
              <div className='absolute inset-0 overflow-hidden'>
                <div className='absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent'></div>
                <div className='absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent'></div>
                <div className='absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-transparent via-green-500 to-transparent'></div>
                <div className='absolute top-0 bottom-0 right-0 w-px bg-gradient-to-b from-transparent via-indigo-500 to-transparent'></div>
              </div>

              <div className='relative z-10 max-w-3xl mx-auto text-center'>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className='text-2xl md:text-3xl font-bold tracking-tight mb-4'>
                    Still Have{' '}
                    <span className='bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-indigo-400'>
                      Questions?
                    </span>
                  </h2>
                  <p className='text-white/80 mb-6'>
                    Our support team is here to help. Reach out to us and we'll
                    get back to you as soon as possible.
                  </p>
                  <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                    <Link href='/contact'>
                      <Button
                        size='lg'
                        className='bg-gradient-to-r from-green-600 to-indigo-600 hover:from-green-700 hover:to-indigo-700 text-white border-0 rounded-full'
                      >
                        <MessageSquare className='h-5 w-5 mr-2' />
                        <span>Contact Support</span>
                      </Button>
                    </Link>
                    <Button
                      size='lg'
                      variant='outline'
                      className='border-white/20 text-white hover:bg-white/10 rounded-full'
                    >
                      <Download className='h-5 w-5 mr-2' />
                      <span>Download App</span>
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
