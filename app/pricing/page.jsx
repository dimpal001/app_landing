'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { CheckCircle2, Zap, Download, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useTheme } from 'next-themes'
import Navbar from '@/components/navbar'

export default function Pricing() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [billingCycle, setBillingCycle] = useState('monthly')

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
            <div className='absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-indigo-900/20 to-transparent'></div>
            <div className='absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full bg-indigo-700/10 blur-[100px]'></div>
            <div className='absolute bottom-1/3 right-1/4 w-[250px] h-[250px] rounded-full bg-indigo-700/10 blur-[100px]'></div>
          </div>

          <div className='container relative z-10 px-4 md:px-6 mx-auto'>
            <motion.div
              initial='hidden'
              animate='visible'
              variants={fadeInUp}
              className='max-w-3xl mx-auto text-center'
            >
              <Badge className='mb-4 bg-white/10 text-white hover:bg-white/20 border-0 backdrop-blur-sm px-3 py-1'>
                <Zap className='h-3.5 w-3.5 mr-1.5' />
                Pricing
              </Badge>
              <h1 className='text-4xl md:text-5xl font-bold tracking-tight mb-6'>
                Simple,{' '}
                <span className='bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-indigo-400'>
                  Transparent
                </span>{' '}
                Pricing
              </h1>
              <p className='text-xl text-white/70 mb-8'>
                Choose the plan that works best for you. No hidden fees, no
                surprises.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className='py-8 md:py-16 relative'>
          <div className='absolute inset-0 z-0'>
            <div className='absolute top-1/2 right-1/3 w-[350px] h-[350px] rounded-full bg-indigo-700/10 blur-[100px]'></div>
          </div>

          <div className='container relative z-10 px-4 md:px-6 mx-auto'>
            <div className='grid gap-8 md:grid-cols-2 lg:gap-12 max-w-5xl mx-auto'>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className='h-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 hover:bg-white/10 transition-all duration-300'>
                  <div className='flex flex-col h-full'>
                    <div className='mb-6'>
                      <h3 className='text-2xl font-bold mb-2'>Free Plan</h3>
                      <p className='text-white/70'>
                        Perfect for students just getting started.
                      </p>
                    </div>

                    <div className='mb-8'>
                      <div className='flex items-baseline'>
                        <span className='text-5xl font-bold'>₹0</span>
                        <span className='ml-2 text-xl text-white/70'>
                          /month
                        </span>
                      </div>
                    </div>

                    <div className='flex-grow mb-8'>
                      <ul className='space-y-4'>
                        {[
                          'Basic AI concept explanations',
                          'Limited question paper generation',
                          'Access to public study materials',
                          'Basic progress tracking',
                          'Community support',
                        ].map((feature, i) => (
                          <li key={i} className='flex items-start'>
                            <CheckCircle2 className='h-5 w-5 text-indigo-400 mr-3 mt-0.5 flex-shrink-0' />
                            <span className='text-white/80'>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      variant='outline'
                      className='w-full border-white/10 text-white hover:bg-white/10 rounded-full py-6'
                    >
                      Get Started Free
                    </Button>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className='h-full rounded-3xl relative overflow-hidden border-2 border-indigo-500 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm p-8 hover:from-white/15 hover:to-white/10 transition-all duration-300'>
                  <div className='absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-indigo-600 opacity-20 blur-xl'></div>

                  <div className='absolute -top-6 -right-6'>
                    <div className='relative'>
                      <div className='absolute inset-0 bg-gradient-to-r from-indigo-600 to-indigo-600 blur-md opacity-80 rounded-full'></div>
                      <div className='relative bg-black/50 backdrop-blur-sm text-white px-4 py-1 rounded-full border border-white/20 text-sm font-medium'>
                        POPULAR
                      </div>
                    </div>
                  </div>

                  <div className='relative z-10 flex flex-col h-full'>
                    <div className='mb-6'>
                      <h3 className='text-2xl font-bold mb-2'>Premium Plan</h3>
                      <p className='text-white/70'>
                        For serious students and teachers.
                      </p>
                    </div>

                    <div className='mb-8'>
                      <div className='flex items-baseline'>
                        <span className='text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-indigo-400'>
                          ₹299
                        </span>
                        <span className='ml-2 text-xl text-white/70'>
                          /month
                        </span>
                      </div>
                    </div>

                    <div className='flex-grow mb-8'>
                      <ul className='space-y-4'>
                        {[
                          'Advanced AI-powered learning tools',
                          'Unlimited question paper generation',
                          'Custom study plans and schedules',
                          'Comprehensive analytics dashboard',
                          'Priority support',
                          'Teacher dashboard and tools',
                          'Monetization options for teachers',
                          'Offline access to materials',
                        ].map((feature, i) => (
                          <li key={i} className='flex items-start'>
                            <CheckCircle2 className='h-5 w-5 text-indigo-400 mr-3 mt-0.5 flex-shrink-0' />
                            <span className='text-white/80'>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button className='w-full bg-gradient-to-r from-indigo-600 to-indigo-600 hover:from-indigo-700 hover:to-indigo-700 text-white border-0 rounded-full py-6'>
                      Upgrade Now
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className='py-16 md:py-24 relative'>
          <div className='absolute inset-0 z-0'>
            <div className='absolute top-0 left-0 right-0 h-[200px] bg-gradient-to-b from-black to-transparent'></div>
            <div className='absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-black to-transparent'></div>
            <div className='absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full bg-indigo-700/10 blur-[100px]'></div>
          </div>

          <div className='container relative z-10 px-4 md:px-6 mx-auto'>
            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              variants={fadeInUp}
              className='max-w-3xl mx-auto'
            >
              <h2 className='text-2xl md:text-3xl font-bold text-center mb-8'>
                Frequently Asked{' '}
                <span className='bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-indigo-400'>
                  Questions
                </span>
              </h2>

              <div className='space-y-6'>
                {[
                  {
                    question: 'How does the subscription work?',
                    answer:
                      'We offer both free and premium plans. The free plan gives you access to basic features, while the premium plan unlocks all features including unlimited question paper generation, advanced analytics, and teacher tools.',
                  },
                  {
                    question: 'Can I cancel my subscription anytime?',
                    answer:
                      "Yes, you can cancel your subscription at any time. If you cancel, you'll still have access to premium features until the end of your current billing period.",
                  },
                  {
                    question:
                      'Is there a discount for educational institutions?',
                    answer:
                      'Yes, we offer special pricing for schools, colleges, and educational institutions. Please contact our sales team for more information on bulk licensing and institutional pricing.',
                  },
                  {
                    question: 'Can teachers monetize their content on Skybeen?',
                    answer:
                      'Yes, teachers on the Premium plan can create and share their study materials, question papers, and teaching methodologies on our platform and earn revenue when students access their premium content.',
                  },
                ].map((faq, index) => (
                  <div
                    key={index}
                    className='p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300'
                  >
                    <h3 className='text-xl font-bold mb-3'>{faq.question}</h3>
                    <p className='text-white/70'>{faq.answer}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-16 md:py-24 relative'>
          <div className='absolute inset-0 z-0'>
            <div className='absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-indigo-900/20'></div>
          </div>

          <div className='container relative z-10 px-4 md:px-6 mx-auto'>
            <div className='relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-900/40 to-indigo-900/40 backdrop-blur-xl p-8 md:p-12'>
              <div className='absolute inset-0 overflow-hidden'>
                <div className='absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent'></div>
                <div className='absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent'></div>
                <div className='absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-transparent via-indigo-500 to-transparent'></div>
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
                    Ready to Transform Your{' '}
                    <span className='bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-indigo-400'>
                      Learning Experience?
                    </span>
                  </h2>
                  <p className='text-white/80 mb-6'>
                    Join thousands of students and teachers who are already
                    using Skybeen to revolutionize their education journey.
                  </p>
                  <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                    <Button
                      size='lg'
                      className='bg-gradient-to-r h-14 w-full from-indigo-600 to-indigo-600 hover:from-indigo-700 hover:to-indigo-700 text-white border-0 rounded-full'
                    >
                      <Download className='h-5 w-5 mr-2' />
                      <span>Download App</span>
                    </Button>
                    {/* <Link href='/contact'>
                      <Button
                        size='lg'
                        variant='outline'
                        className='border-white/20 h-14 w-full text-white hover:bg-white/10 rounded-full'
                      >
                        <span>Contact Sales</span>
                        <ArrowRight className='h-4 w-4 ml-2' />
                      </Button>
                    </Link> */}
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
