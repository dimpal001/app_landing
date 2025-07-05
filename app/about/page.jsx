'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Brain, Lightbulb, Download, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useTheme } from 'next-themes'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export default function About() {
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
                <Brain className='h-3.5 w-3.5 mr-1.5' />
                About Us
              </Badge>
              <h1 className='text-4xl md:text-5xl font-bold tracking-tight mb-6'>
                Our{' '}
                <span className='bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-indigo-400'>
                  Story
                </span>
              </h1>
              <p className='text-xl text-white/70 mb-8'>
                Learn about our journey to transform education in India through
                the power of AI and human creativity.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Story */}
        <section className='py-16 md:py-24 relative'>
          <div className='absolute inset-0 z-0'>
            <div className='absolute top-1/2 right-1/3 w-[350px] h-[350px] rounded-full bg-indigo-700/10 blur-[100px]'></div>
          </div>

          <div className='container relative z-10 px-4 md:px-6 mx-auto'>
            <div className='grid gap-12 lg:grid-cols-2 items-center max-w-5xl mx-auto'>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className='relative'
              >
                <div className='absolute -inset-4 rounded-3xl bg-gradient-to-r from-green-600/30 to-indigo-600/30 opacity-75 blur-xl'></div>
                <div className='relative rounded-3xl overflow-hidden border border-white/10'>
                  <img
                    src='/placeholder.svg?height=400&width=600&text=Our+Journey'
                    alt='Skybeen Team'
                    className='w-full h-auto'
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className='space-y-6'
              >
                <h2 className='text-3xl font-bold'>
                  From Struggle to{' '}
                  <span className='bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-indigo-400'>
                    Smarter Learning
                  </span>
                </h2>

                <p className='text-white/70 text-lg'>
                  Skybeen started in 2024 as my personal mission — built from
                  scratch to make learning smarter, smoother, and more
                  accessible for every student in India.
                </p>

                <p className='text-white/70 text-lg'>
                  I realized that even young students are always on their phones
                  — and instead of stopping them, why not guide them to use it
                  for something valuable? That's where Skybeen comes in —
                  turning screen time into learning time.
                </p>

                <p className='text-white/70 text-lg'>
                  With AI-powered tools and practical content, Skybeen isn’t
                  just another app — it’s a smart companion for students and
                  teachers who want better results without outdated methods.
                </p>

                <p className='text-white/70 text-lg'>
                  I believe smart tools should be used for smart growth — and
                  that’s exactly what Skybeen offers.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className='py-16 md:py-24 relative'>
          <div className='absolute inset-0 z-0'>
            <div className='absolute top-0 left-0 right-0 h-[200px] bg-gradient-to-b from-black to-transparent'></div>
            <div className='absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-black to-transparent'></div>
            <div className='absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full bg-green-700/10 blur-[100px]'></div>
          </div>

          <div className='container relative z-10 px-4 md:px-6 mx-auto'>
            <div className='grid gap-12 lg:grid-cols-2 lg:gap-16 items-center'>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className='space-y-6'>
                  <Badge className='mb-4 bg-white/10 text-white hover:bg-white/20 border-0 backdrop-blur-sm px-3 py-1'>
                    Our Vision
                  </Badge>
                  <h2 className='text-3xl font-bold tracking-tight'>
                    Empowering the{' '}
                    <span className='bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-indigo-400'>
                      Next Generation
                    </span>
                  </h2>
                  <p className='text-white/70 text-lg'>
                    At Skybeen, we envision a world where students learn
                    smarter, not harder — and teachers save time while
                    delivering more impact.
                  </p>
                  <p className='text-white/70 text-lg'>
                    Our AI-powered tools assist teachers by reducing repetitive
                    tasks like paper checking, content preparation, and test
                    creation, freeing them to do what truly matters — mentoring
                    and inspiring.
                  </p>
                  <p className='text-white/70 text-lg'>
                    We don’t replace teachers — we support them. Technology
                    should enhance creativity, not limit it.
                  </p>

                  {/* <div className='pt-4'>
                    <Button className='bg-gradient-to-r from-green-600 to-indigo-600 hover:from-green-700 hover:to-indigo-700 text-white border-0 rounded-full'>
                      Learn More
                      <ArrowRight className='h-4 w-4 ml-2' />
                    </Button>
                  </div> */}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className='space-y-6'>
                  <Badge className='mb-4 bg-white/10 text-white hover:bg-white/20 border-0 backdrop-blur-sm px-3 py-1'>
                    Our Mission
                  </Badge>
                  <h2 className='text-3xl font-bold tracking-tight'>
                    <span className='bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-indigo-400'>
                      Smarter
                    </span>{' '}
                    Education for All
                  </h2>
                  <p className='text-white/70 text-lg'>
                    Our mission is to build a learning platform that’s
                    intelligent, inclusive, and truly helpful. We make smart
                    education tools available to everyone — whether you're in a
                    city or a village.
                  </p>
                  <p className='text-white/70 text-lg'>
                    Skybeen is built for real-world impact — where students grow
                    independently, and teachers get more time to guide,
                    innovate, and inspire.
                  </p>
                  <p className='text-white/70 text-lg'>
                    We're not chasing trends — we're solving real problems in
                    education, one smart feature at a time.
                  </p>

                  {/* <div className='pt-4'>
                    <Button
                      variant='outline'
                      className='border-white/10 text-white hover:bg-white/10 rounded-full'
                    >
                      Our Approach
                      <ArrowRight className='h-4 w-4 ml-2' />
                    </Button>
                  </div> */}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className='py-16 md:py-24 relative'>
          <div className='absolute inset-0 z-0'>
            <div className='absolute top-1/2 left-1/3 w-[400px] h-[400px] rounded-full bg-green-700/10 blur-[100px]'></div>
          </div>

          <div className='container relative z-10 px-4 md:px-6 mx-auto'>
            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              variants={fadeInUp}
              className='max-w-3xl mx-auto text-center mb-16'
            >
              <Badge className='mb-4 bg-white/10 text-white hover:bg-white/20 border-0 backdrop-blur-sm px-3 py-1'>
                <Lightbulb className='h-3.5 w-3.5 mr-1.5' />
                Our Values
              </Badge>
              <h2 className='text-3xl md:text-4xl font-bold tracking-tight'>
                Principles That{' '}
                <span className='bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-indigo-400'>
                  Guide Us
                </span>
              </h2>
              <p className='text-white/70 text-lg mt-4'>
                These core values shape everything we do at Skybeen, from
                product development to customer support.
              </p>
            </motion.div>

            <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto'>
              {[
                {
                  title: 'Built Around Students',
                  description:
                    'Everything we create is designed to help students learn smarter, faster, and with less stress — not just digital tools, but real learning aids.',
                },
                {
                  title: 'Smart Use of AI',
                  description:
                    'We smartly use AI technologies to make learning more intuitive, efficient, and personalized for everyone.',
                },
                {
                  title: 'Simple. Powerful. Accessible.',
                  description:
                    'Our platform turns complex tech into easy, meaningful learning — so every student, no matter their background, can benefit from it.',
                },
                {
                  title: 'Helping Teachers, Not Replacing Them',
                  description:
                    'We create tools that reduce repetitive tasks, letting teachers focus on what truly matters: mentoring and motivating students.',
                },
                {
                  title: 'Always Getting Better',
                  description:
                    'We listen, learn, and improve. Our platform evolves with user feedback and educational needs — not trends.',
                },
                {
                  title: 'Privacy First',
                  description:
                    'User trust matters. We handle all data responsibly, with full respect for privacy and transparency — always.',
                },
              ].map((value, index) => (
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
                    <h3 className='text-xl font-bold mb-3'>{value.title}</h3>
                    <p className='text-white/70'>{value.description}</p>
                  </div>
                </motion.div>
              ))}
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
                    Join Us in{' '}
                    <span className='bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-indigo-400'>
                      Transforming Education
                    </span>
                  </h2>
                  <p className='text-white/80 mb-6'>
                    Be part of our mission to revolutionize learning and
                    teaching across India.
                  </p>
                  <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                    <Button
                      size='lg'
                      className='bg-gradient-to-r h-14 from-green-600 to-indigo-600 hover:from-green-700 hover:to-indigo-700 text-white border-0 rounded-full'
                    >
                      <Download className='h-5 w-5 mr-2' />
                      <span>Download App</span>
                    </Button>
                    <Link href='/contact'>
                      <Button
                        size='lg'
                        variant='outline'
                        className='border-white/20 h-14 text-white hover:bg-white/10 rounded-full'
                      >
                        <span>Contact Us</span>
                        <ArrowRight className='h-4 w-4 ml-2' />
                      </Button>
                    </Link>
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
