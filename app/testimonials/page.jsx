'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Star, Download, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useTheme } from 'next-themes'
import Navbar from '@/components/navbar'

export default function Testimonials() {
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

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const featureItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
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
                <Star className='h-3.5 w-3.5 mr-1.5' />
                Testimonials
              </Badge>
              <h1 className='text-4xl md:text-5xl font-bold tracking-tight mb-6'>
                What Our{' '}
                <span className='bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-indigo-400'>
                  Users
                </span>{' '}
                Say
              </h1>
              <p className='text-xl text-white/70 mb-8'>
                Hear from students and teachers who have transformed their
                learning experience with Skybeen.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Testimonial */}
        <section className='py-8 md:py-16 relative'>
          <div className='absolute inset-0 z-0'>
            <div className='absolute top-1/2 right-1/3 w-[350px] h-[350px] rounded-full bg-indigo-700/10 blur-[100px]'></div>
          </div>

          <div className='container relative z-10 px-4 md:px-6 mx-auto'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className='relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-green-900/30 to-indigo-900/30 backdrop-blur-xl p-8 md:p-12 max-w-5xl mx-auto'
            >
              <div className='absolute -top-10 -left-10 text-green-500 opacity-20'>
                <svg
                  width='120'
                  height='120'
                  viewBox='0 0 40 40'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M12.5 20H7.5C6.83696 20 6.20107 19.7366 5.73223 19.2678C5.26339 18.7989 5 18.163 5 17.5V12.5C5 11.837 5.26339 11.2011 5.73223 10.7322C6.20107 10.2634 6.83696 10 7.5 10H12.5C13.163 10 13.7989 10.2634 14.2678 10.7322C14.7366 11.2011 15 11.837 15 12.5V27.5M35 20H30C29.337 20 28.7011 19.7366 28.2322 19.2678C27.7634 18.7989 27.5 18.163 27.5 17.5V12.5C27.5 11.837 27.7634 11.2011 28.2322 10.7322C28.7011 10.2634 29.337 10 30 10H35C35.663 10 36.2989 10.2634 36.7678 10.7322C37.2366 11.2011 37.5 11.837 37.5 12.5V27.5'
                    stroke='currentColor'
                    strokeWidth='4'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>

              <div className='md:flex items-center gap-8'>
                <div className='md:w-1/3 mb-6 md:mb-0'>
                  <div className='relative'>
                    <div className='absolute -inset-2 rounded-full bg-gradient-to-r from-green-600/30 to-indigo-600/30 opacity-75 blur-md'></div>
                    <div className='relative rounded-2xl overflow-hidden border-2 border-white/10'>
                      <img
                        src='/placeholder.svg?height=300&width=300&text=Dr.+VS'
                        alt='Dr. Vikram Singh'
                        className='w-full h-auto'
                      />
                    </div>
                  </div>
                </div>
                <div className='md:w-2/3'>
                  <blockquote className='text-xl md:text-2xl italic text-white/90 mb-6'>
                    "Skybeen has made it possible for me to provide quality
                    education to students in remote areas. The technology is
                    truly revolutionary and has transformed how I teach complex
                    subjects. My students' engagement and performance have
                    improved dramatically since we started using Skybeen."
                  </blockquote>
                  <div>
                    <p className='text-xl font-bold'>Dr. Vikram Singh</p>
                    <p className='text-white/70'>College Professor, Pune</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Testimonial Grid */}
        <section className='py-16 md:py-24 relative'>
          <div className='absolute inset-0 z-0'>
            <div className='absolute top-1/2 left-1/3 w-[400px] h-[400px] rounded-full bg-green-700/10 blur-[100px]'></div>
          </div>

          <div className='container relative z-10 px-4 md:px-6 mx-auto'>
            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              variants={staggerContainer}
              className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'
            >
              {[
                {
                  quote:
                    'Skybeen has completely transformed how I study for exams. The AI-generated question papers are spot on!',
                  name: 'Priya S.',
                  role: 'Class 12 Student, Delhi',
                  image: '/placeholder.svg?height=80&width=80&text=PS',
                },
                {
                  quote:
                    "As a teacher, I've saved countless hours on creating question papers and study materials. Now I can focus more on actual teaching.",
                  name: 'Rajesh Kumar',
                  role: 'Science Teacher, Mumbai',
                  image: '/placeholder.svg?height=80&width=80&text=RK',
                },
                {
                  quote:
                    'The personalized study plans have helped me improve my grades significantly. I love how the app adapts to my learning style.',
                  name: 'Arjun Patel',
                  role: 'Engineering Student, Bangalore',
                  image: '/placeholder.svg?height=80&width=80&text=AP',
                },
                {
                  quote:
                    "I've been able to monetize my teaching materials through Skybeen, creating a new revenue stream while helping more students.",
                  name: 'Sunita Sharma',
                  role: 'Mathematics Teacher, Chennai',
                  image: '/placeholder.svg?height=80&width=80&text=SS',
                },
                {
                  quote:
                    "The chat-based doubt solving feature is like having a personal tutor available 24/7. It's been a game-changer for me.",
                  name: 'Aisha Khan',
                  role: 'Class 10 Student, Hyderabad',
                  image: '/placeholder.svg?height=80&width=80&text=AK',
                },
                {
                  quote:
                    "My parents were skeptical at first, but after seeing my improved grades, they're now recommending Skybeen to all our family friends.",
                  name: 'Rahul Mehta',
                  role: 'Class 11 Student, Jaipur',
                  image: '/placeholder.svg?height=80&width=80&text=RM',
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={featureItem}
                  className='rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 hover:bg-white/10 transition-all duration-300'
                >
                  <div className='space-y-6'>
                    <div className='relative'>
                      <div className='absolute -top-3 -left-3 text-green-500 opacity-30'>
                        <svg
                          width='40'
                          height='40'
                          viewBox='0 0 40 40'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M12.5 20H7.5C6.83696 20 6.20107 19.7366 5.73223 19.2678C5.26339 18.7989 5 18.163 5 17.5V12.5C5 11.837 5.26339 11.2011 5.73223 10.7322C6.20107 10.2634 6.83696 10 7.5 10H12.5C13.163 10 13.7989 10.2634 14.2678 10.7322C14.7366 11.2011 15 11.837 15 12.5V27.5M35 20H30C29.337 20 28.7011 19.7366 28.2322 19.2678C27.7634 18.7989 27.5 18.163 27.5 17.5V12.5C27.5 11.837 27.7634 11.2011 28.2322 10.7322C28.7011 10.2634 29.337 10 30 10H35C35.663 10 36.2989 10.2634 36.7678 10.7322C37.2366 11.2011 37.5 11.837 37.5 12.5V27.5'
                            stroke='currentColor'
                            strokeWidth='4'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </div>
                      <blockquote className='text-lg italic text-white/80 relative z-10 pl-4'>
                        "{testimonial.quote}"
                      </blockquote>
                    </div>

                    <div className='flex items-center gap-4'>
                      <div className='w-12 h-12 rounded-full overflow-hidden border-2 border-green-500'>
                        <img
                          src={testimonial.image || '/placeholder.svg'}
                          alt={testimonial.name}
                          className='w-full h-full object-cover'
                        />
                      </div>
                      <div>
                        <p className='font-semibold'>{testimonial.name}</p>
                        <p className='text-sm text-white/60'>
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Video Testimonials */}
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
                Watch{' '}
                <span className='bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-indigo-400'>
                  Success Stories
                </span>
              </h2>
              <p className='text-white/70 text-lg mt-4'>
                See how Skybeen has transformed the educational journey of
                students and teachers across India.
              </p>
            </motion.div>

            <div className='grid gap-8 md:grid-cols-2 max-w-5xl mx-auto'>
              {[
                {
                  title: 'From Struggling to Succeeding',
                  person: "Arjun's Journey with Skybeen",
                  thumbnail:
                    '/placeholder.svg?height=300&width=500&text=Video+Thumbnail',
                },
                {
                  title: 'Revolutionizing Teaching Methods',
                  person: 'How Sunita Transformed Her Classroom',
                  thumbnail:
                    '/placeholder.svg?height=300&width=500&text=Video+Thumbnail',
                },
              ].map((video, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className='relative group'
                >
                  <div className='absolute -inset-2 rounded-3xl bg-gradient-to-r from-green-600/30 to-indigo-600/30 opacity-0 group-hover:opacity-75 blur-xl transition-opacity duration-300'></div>
                  <div className='relative rounded-2xl overflow-hidden border border-white/10'>
                    <div className='relative'>
                      <img
                        src={video.thumbnail || '/placeholder.svg'}
                        alt={video.title}
                        className='w-full h-auto'
                      />
                      <div className='absolute inset-0 bg-black/50 flex items-center justify-center'>
                        <div className='w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-all duration-300'>
                          <div className='w-12 h-12 rounded-full bg-gradient-to-r from-green-600 to-indigo-600 flex items-center justify-center'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='24'
                              height='24'
                              viewBox='0 0 24 24'
                              fill='none'
                              stroke='currentColor'
                              strokeWidth='2'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              className='text-white'
                            >
                              <polygon points='5 3 19 12 5 21 5 3'></polygon>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='p-4'>
                      <h3 className='text-xl font-bold'>{video.title}</h3>
                      <p className='text-white/70'>{video.person}</p>
                    </div>
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
                    Join Our{' '}
                    <span className='bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-indigo-400'>
                      Success Story
                    </span>
                  </h2>
                  <p className='text-white/80 mb-6'>
                    Experience the transformation that thousands of students and
                    teachers are already enjoying with Skybeen.
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
                        <span>Share Your Story</span>
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
