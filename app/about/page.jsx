'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Brain, Lightbulb, Download, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useTheme } from 'next-themes'
import Navbar from '@/components/navbar'

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
                  From a Simple Idea to an{' '}
                  <span className='bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-indigo-400'>
                    Educational Revolution
                  </span>
                </h2>
                <p className='text-white/70 text-lg'>
                  Skybeen was born from a simple observation: despite India's
                  rich educational heritage, many students struggle with
                  outdated learning methods that don't adapt to their individual
                  needs.
                </p>
                <p className='text-white/70 text-lg'>
                  Our founders, a team of educators and AI specialists, came
                  together in 2021 with a mission to democratize quality
                  education and make it accessible to every student in India,
                  regardless of their location or background.
                </p>
                <p className='text-white/70 text-lg'>
                  What started as a small project has now grown into a
                  comprehensive learning platform that serves thousands of
                  students and teachers across the country, combining the power
                  of artificial intelligence with human creativity to create a
                  truly transformative educational experience.
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
                    We envision a world where students become smarter, not lazy,
                    and teachers work smarter, not creatively limited. Our AI
                    tools are designed to enhance human potential, not replace
                    it.
                  </p>
                  <p className='text-white/70 text-lg'>
                    At Skybeen, we believe that technology should serve as a
                    catalyst for human growth and development, especially in
                    education.
                  </p>

                  <div className='pt-4'>
                    <Button className='bg-gradient-to-r from-green-600 to-indigo-600 hover:from-green-700 hover:to-indigo-700 text-white border-0 rounded-full'>
                      Learn More
                      <ArrowRight className='h-4 w-4 ml-2' />
                    </Button>
                  </div>
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
                      Accessible
                    </span>{' '}
                    Intelligence
                  </h2>
                  <p className='text-white/70 text-lg'>
                    To make high-quality education accessible and intelligent,
                    helping students learn efficiently and enabling teachers to
                    focus more on mentoring and innovation.
                  </p>
                  <p className='text-white/70 text-lg'>
                    We're committed to continuous improvement—we'll never stop
                    evolving our platform to meet the changing needs of
                    education in India and beyond.
                  </p>

                  <div className='pt-4'>
                    <Button
                      variant='outline'
                      className='border-white/10 text-white hover:bg-white/10 rounded-full'
                    >
                      Our Approach
                      <ArrowRight className='h-4 w-4 ml-2' />
                    </Button>
                  </div>
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
                  title: 'Student-Centered Innovation',
                  description:
                    "We put students' needs at the center of everything we build, ensuring our technology serves their educational journey.",
                },
                {
                  title: 'Ethical AI Development',
                  description:
                    'We develop AI that enhances human potential rather than replacing it, with transparency and fairness as guiding principles.',
                },
                {
                  title: 'Inclusive Education',
                  description:
                    "We're committed to making quality education accessible to all students, regardless of location, background, or resources.",
                },
                {
                  title: 'Teacher Empowerment',
                  description:
                    'We build tools that free teachers from administrative burdens so they can focus on what they do best: inspiring students.',
                },
                {
                  title: 'Continuous Improvement',
                  description:
                    "We're never satisfied with the status quo, constantly evolving our platform based on research and user feedback.",
                },
                {
                  title: 'Data Privacy & Security',
                  description:
                    'We treat user data with the utmost respect, implementing rigorous security measures and transparent privacy practices.',
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

        {/* Team */}
        <section className='py-16 md:py-24 relative'>
          <div className='absolute inset-0 z-0'>
            <div className='absolute top-0 left-0 right-0 h-[200px] bg-gradient-to-b from-black to-transparent'></div>
            <div className='absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-black to-transparent'></div>
            <div className='absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-green-700/10 blur-[100px]'></div>
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
                Meet Our{' '}
                <span className='bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-indigo-400'>
                  Team
                </span>
              </h2>
              <p className='text-white/70 text-lg mt-4'>
                The passionate individuals behind Skybeen who are dedicated to
                transforming education in India.
              </p>
            </motion.div>

            <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto'>
              {[
                {
                  name: 'Rajiv Sharma',
                  role: 'Founder & CEO',
                  image: '/placeholder.svg?height=300&width=300&text=RS',
                },
                {
                  name: 'Priya Patel',
                  role: 'Chief Technology Officer',
                  image: '/placeholder.svg?height=300&width=300&text=PP',
                },
                {
                  name: 'Amit Kumar',
                  role: 'Head of AI Research',
                  image: '/placeholder.svg?height=300&width=300&text=AK',
                },
                {
                  name: 'Neha Singh',
                  role: 'Chief Education Officer',
                  image: '/placeholder.svg?height=300&width=300&text=NS',
                },
                {
                  name: 'Vikram Reddy',
                  role: 'Product Director',
                  image: '/placeholder.svg?height=300&width=300&text=VR',
                },
                {
                  name: 'Ananya Desai',
                  role: 'UX Design Lead',
                  image: '/placeholder.svg?height=300&width=300&text=AD',
                },
                {
                  name: 'Sanjay Mehta',
                  role: 'Marketing Director',
                  image: '/placeholder.svg?height=300&width=300&text=SM',
                },
                {
                  name: 'Leela Krishnan',
                  role: 'Customer Success Lead',
                  image: '/placeholder.svg?height=300&width=300&text=LK',
                },
              ].map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className='group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300'
                >
                  <div className='relative'>
                    <img
                      src={member.image || '/placeholder.svg'}
                      alt={member.name}
                      className='w-full h-auto'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end'>
                      <div className='p-4'>
                        <div className='flex gap-2'>
                          <a
                            href='#'
                            className='text-white/80 hover:text-white transition-colors'
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
                            >
                              <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'></path>
                              <rect width='4' height='12' x='2' y='9'></rect>
                              <circle cx='4' cy='4' r='2'></circle>
                            </svg>
                          </a>
                          <a
                            href='#'
                            className='text-white/80 hover:text-white transition-colors'
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
                            >
                              <path d='M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z'></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='p-4'>
                    <h3 className='text-lg font-bold'>{member.name}</h3>
                    <p className='text-white/70'>{member.role}</p>
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
                      className='bg-gradient-to-r from-green-600 to-indigo-600 hover:from-green-700 hover:to-indigo-700 text-white border-0 rounded-full'
                    >
                      <Download className='h-5 w-5 mr-2' />
                      <span>Download App</span>
                    </Button>
                    <Link href='/contact'>
                      <Button
                        size='lg'
                        variant='outline'
                        className='border-white/20 text-white hover:bg-white/10 rounded-full'
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
    </div>
  )
}
