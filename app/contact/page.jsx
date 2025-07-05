'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  MessageSquare,
  Mail,
  Phone,
  MapPin,
  Send,
  Download,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { useTheme } from 'next-themes'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export default function Contact() {
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
                Contact Us
              </Badge>
              <h1 className='text-4xl md:text-5xl font-bold tracking-tight mb-6'>
                Get in{' '}
                <span className='bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-indigo-400'>
                  Touch
                </span>
              </h1>
              <p className='text-xl text-white/70 mb-8'>
                Have questions or feedback? We'd love to hear from you. Our team
                is here to help.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form */}
        <section className='py-16 md:py-24 relative'>
          <div className='absolute inset-0 z-0'>
            <div className='absolute top-1/2 right-1/3 w-[350px] h-[350px] rounded-full bg-indigo-700/10 blur-[100px]'></div>
          </div>

          <div className='container relative z-10 px-4 md:px-6 mx-auto'>
            <div className='grid gap-12 lg:grid-cols-2 items-start max-w-5xl mx-auto'>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className='space-y-8'>
                  <div>
                    <h2 className='text-2xl md:text-3xl font-bold mb-4'>
                      Contact Information
                    </h2>
                    <p className='text-white/70'>
                      Reach out to us through any of these channels and we'll
                      get back to you as soon as possible.
                    </p>
                  </div>

                  <div className='space-y-6'>
                    <div className='flex items-start gap-4'>
                      <div className='p-3 rounded-xl bg-gradient-to-br from-green-600/20 to-indigo-600/20 backdrop-blur-md'>
                        <div className='bg-gradient-to-r from-green-500 to-indigo-500 rounded-lg p-2 text-white'>
                          <Mail className='h-5 w-5' />
                        </div>
                      </div>
                      <div>
                        <h3 className='text-lg font-semibold mb-1'>Email</h3>
                        <p className='text-white/70'>contact@skybeen.com</p>
                      </div>
                    </div>

                    {/* <div className='flex items-start gap-4'>
                      <div className='p-3 rounded-xl bg-gradient-to-br from-green-600/20 to-indigo-600/20 backdrop-blur-md'>
                        <div className='bg-gradient-to-r from-green-500 to-indigo-500 rounded-lg p-2 text-white'>
                          <Phone className='h-5 w-5' />
                        </div>
                      </div>
                      <div>
                        <h3 className='text-lg font-semibold mb-1'>Phone</h3>
                        <p className='text-white/70'>+91 0000000000</p>
                      </div>
                    </div> */}

                    {/* <div className='flex items-start gap-4'>
                      <div className='p-3 rounded-xl bg-gradient-to-br from-green-600/20 to-indigo-600/20 backdrop-blur-md'>
                        <div className='bg-gradient-to-r from-green-500 to-indigo-500 rounded-lg p-2 text-white'>
                          <MapPin className='h-5 w-5' />
                        </div>
                      </div>
                      <div>
                        <h3 className='text-lg font-semibold mb-1'>Address</h3>
                        <p className='text-white/70'>
                          Skybeen Education Pvt. Ltd.
                        </p>
                        <p className='text-white/70'>123 Innovation Street</p>
                        <p className='text-white/70'>
                          Bangalore, Karnataka 560001
                        </p>
                        <p className='text-white/70'>India</p>
                      </div>
                    </div> */}
                  </div>

                  <div className='pt-6'>
                    <h3 className='text-lg font-semibold mb-3'>Follow Us</h3>
                    <div className='flex gap-4'>
                      <a
                        target='_blank'
                        href='#'
                        className='p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors'
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='20'
                          height='20'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          className='text-white/80'
                        >
                          <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z'></path>
                        </svg>
                      </a>
                      <a
                        target='_blank'
                        href='#'
                        className='p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors'
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='20'
                          height='20'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          className='text-white/80'
                        >
                          <path d='M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z'></path>
                        </svg>
                      </a>
                      <a
                        target='_blank'
                        href='https://www.instagram.com/skybeenofficial?igsh=MXhhd3h1d3Jyd2NmZQ=='
                        className='p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors'
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='20'
                          height='20'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          className='text-white/80'
                        >
                          <rect
                            width='20'
                            height='20'
                            x='2'
                            y='2'
                            rx='5'
                            ry='5'
                          ></rect>
                          <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z'></path>
                          <line x1='17.5' x2='17.51' y1='6.5' y2='6.5'></line>
                        </svg>
                      </a>
                      <a
                        target='_blank'
                        href='#'
                        className='p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors'
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='20'
                          height='20'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          className='text-white/80'
                        >
                          <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'></path>
                          <rect width='4' height='12' x='2' y='9'></rect>
                          <circle cx='4' cy='4' r='2'></circle>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className='relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8'>
                  <div className='absolute -inset-0.5 bg-gradient-to-r from-green-600/20 to-indigo-600/20 opacity-20 blur-xl'></div>
                  <div className='relative'>
                    <h2 className='text-2xl font-bold mb-6'>
                      Send Us a Message
                    </h2>
                    <form className='space-y-6'>
                      <div className='grid gap-6 md:grid-cols-2'>
                        <div className='space-y-2'>
                          <label
                            htmlFor='name'
                            className='text-sm font-medium text-white/70'
                          >
                            Name
                          </label>
                          <Input
                            id='name'
                            placeholder='Your name'
                            className='bg-white/5 border-white/10 text-white placeholder:text-white/50 focus:border-green-500'
                          />
                        </div>
                        <div className='space-y-2'>
                          <label
                            htmlFor='email'
                            className='text-sm font-medium text-white/70'
                          >
                            Email
                          </label>
                          <Input
                            id='email'
                            type='email'
                            placeholder='Your email'
                            className='bg-white/5 border-white/10 text-white placeholder:text-white/50 focus:border-green-500'
                          />
                        </div>
                      </div>
                      <div className='space-y-2'>
                        <label
                          htmlFor='subject'
                          className='text-sm font-medium text-white/70'
                        >
                          Subject
                        </label>
                        <Input
                          id='subject'
                          placeholder='How can we help you?'
                          className='bg-white/5 border-white/10 text-white placeholder:text-white/50 focus:border-green-500'
                        />
                      </div>
                      <div className='space-y-2'>
                        <label
                          htmlFor='message'
                          className='text-sm font-medium text-white/70'
                        >
                          Message
                        </label>
                        <Textarea
                          id='message'
                          placeholder='Your message'
                          rows={5}
                          className='bg-white/5 border-white/10 text-white placeholder:text-white/50 focus:border-green-500'
                        />
                      </div>
                      <Button className='w-full bg-gradient-to-r from-green-600 to-indigo-600 hover:from-green-700 hover:to-indigo-700 text-white border-0 rounded-full'>
                        <Send className='h-4 w-4 mr-2' />
                        Send Message
                      </Button>
                    </form>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
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
                    Ready to{' '}
                    <span className='bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-indigo-400'>
                      Transform
                    </span>{' '}
                    Your Learning Experience?
                  </h2>
                  <p className='text-white/80 mb-6'>
                    Download the Skybeen app today and join thousands of
                    students and teachers who are already revolutionizing their
                    education journey.
                  </p>
                  <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                    <Button
                      size='lg'
                      className='bg-gradient-to-r h-14 from-green-600 to-indigo-600 hover:from-green-700 hover:to-indigo-700 text-white border-0 rounded-full'
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

      <Footer />
    </div>
  )
}
