'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Brain,
  Book,
  FileText,
  Star,
  LineChart,
  MessageSquare,
  Calendar,
  Lightbulb,
  Users,
  Award,
  ArrowRight,
  Download,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { useTheme } from 'next-themes'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export default function Benefits() {
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
                <Award className='h-3.5 w-3.5 mr-1.5' />
                Benefits
              </Badge>
              <h1 className='text-4xl md:text-5xl font-bold tracking-tight mb-6'>
                Tailored for{' '}
                <span className='bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-indigo-400'>
                  Everyone
                </span>
              </h1>
              <p className='text-xl text-white/70 mb-8'>
                Whether you're a student looking to excel or a teacher wanting
                to innovate, Skybeen has you covered with specialized benefits.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Benefits Tabs */}
        <section className='py-16 md:py-24 relative'>
          <div className='absolute inset-0 z-0'>
            <div className='absolute top-1/2 left-1/3 w-[400px] h-[400px] rounded-full bg-indigo-700/10 blur-[100px]'></div>
          </div>

          <div className='container relative z-10 px-4 md:px-6 mx-auto'>
            <div className='max-w-5xl mx-auto'>
              <Tabs defaultValue='students' className='w-full'>
                <TabsList className='grid w-full grid-cols-2 mb-12 bg-white/5 p-1 h-full rounded-full border border-white/10'>
                  <TabsTrigger
                    value='students'
                    className='text-lg py-3 rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-600 data-[state=active]:to-indigo-600 data-[state=active]:text-white'
                  >
                    For Students
                  </TabsTrigger>
                  <TabsTrigger
                    value='teachers'
                    className='text-lg py-3 rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-600 data-[state=active]:to-indigo-600 data-[state=active]:text-white'
                  >
                    For Teachers
                  </TabsTrigger>
                </TabsList>

                <TabsContent value='students'>
                  <motion.div
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className='grid gap-6 md:grid-cols-2'
                  >
                    {[
                      {
                        icon: <Brain />,
                        title: 'AI-Powered Learning',
                        description:
                          'Get instant concept explanations and have your doubts solved through AI assistance.',
                      },
                      {
                        icon: <Book />,
                        title: 'Custom Study Plans',
                        description:
                          'Create and manage personal subjects, chapters, and exams tailored to your needs.',
                      },
                      {
                        icon: <FileText />,
                        title: 'Mock Question Papers',
                        description:
                          'Generate custom mock question papers based on topic, marks, and difficulty level.',
                      },
                      {
                        icon: <Star />,
                        title: 'Ready-Made Resources',
                        description:
                          'Access ready-made exams, quizzes, and stay updated with current affairs.',
                      },
                      {
                        icon: <LineChart />,
                        title: 'Progress Tracking',
                        description:
                          'Track your progress with smart analytics and comprehensive dashboards.',
                      },
                      {
                        icon: <MessageSquare />,
                        title: 'Personalized Updates',
                        description:
                          'Get personalized topic updates and confusion clearance based on your learning patterns.',
                      },
                    ].map((benefit, index) => (
                      <motion.div
                        key={index}
                        variants={featureItem}
                        className='flex gap-5 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300'
                      >
                        <div className='flex-shrink-0'>
                          <div className='p-3 rounded-xl bg-gradient-to-br from-green-600/20 to-indigo-600/20 backdrop-blur-md'>
                            <div className='bg-gradient-to-r from-green-500 to-indigo-500 rounded-lg p-2 text-white'>
                              {benefit.icon}
                            </div>
                          </div>
                        </div>
                        <div>
                          <h3 className='text-xl font-bold mb-2'>
                            {benefit.title}
                          </h3>
                          <p className='text-white/70'>{benefit.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className='mt-12 hidden p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-green-900/30 to-indigo-900/30 backdrop-blur-sm'
                  >
                    <div className='flex flex-col md:flex-row items-center gap-6'>
                      <div className='md:w-2/3'>
                        <h3 className='text-2xl font-bold mb-3'>
                          Student Success Story
                        </h3>
                        <p className='text-white/80 mb-4'>
                          "Skybeen has completely transformed how I prepare for
                          exams. The AI-generated practice questions are
                          incredibly relevant, and the personalized study plan
                          helped me improve my grades by 15% in just one
                          semester!"
                        </p>
                        <div className='flex items-center gap-3'>
                          <div className='w-10 h-10 rounded-full overflow-hidden border-2 border-green-500'>
                            <img
                              src='/placeholder.svg?height=40&width=40&text=AP'
                              alt='Arjun Patel'
                              className='w-full h-full object-cover'
                            />
                          </div>
                          <div>
                            <p className='font-semibold'>Arjun Patel</p>
                            <p className='text-sm text-white/60'>
                              Engineering Student, Bangalore
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className='md:w-1/3 w-full flex justify-center'>
                        <div className='relative w-full'>
                          <div className='absolute -inset-2 rounded-full bg-gradient-to-r from-green-600/30 to-indigo-600/30 opacity-75 blur-md'></div>
                          <Button
                            size='lg'
                            className='relative h-14 w-full bg-gradient-to-r from-green-600 to-indigo-600 hover:from-green-700 hover:to-indigo-700 text-white border-0 rounded-full'
                          >
                            <span>Start Learning Now</span>
                            <ArrowRight className='h-4 w-4 ml-2' />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </TabsContent>

                <TabsContent value='teachers'>
                  <motion.div
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className='grid gap-6 md:grid-cols-2'
                  >
                    {[
                      {
                        icon: <Calendar />,
                        title: 'Study Planning',
                        description:
                          'Create comprehensive study plans, teaching models, and schedules with ease.',
                      },
                      {
                        icon: <FileText />,
                        title: 'Question Generation',
                        description:
                          'Generate instant question papers and homework assignments tailored to your class.',
                      },
                      {
                        icon: <Calendar />,
                        title: 'Exam Scheduling',
                        description:
                          'Schedule exams with custom templates and automated grading systems.',
                      },
                      {
                        icon: <LineChart />,
                        title: 'Student Monitoring',
                        description:
                          'Monitor student progress and monetize your teaching materials and methods.',
                      },
                      {
                        icon: <Lightbulb />,
                        title: 'Creative Teaching',
                        description:
                          'Create unique learning methods and leverage AI-assisted tools for better teaching.',
                      },
                      {
                        icon: <Users />,
                        title: 'Collaborative Learning',
                        description:
                          'Foster collaborative learning environments and track group progress effectively.',
                      },
                    ].map((benefit, index) => (
                      <motion.div
                        key={index}
                        variants={featureItem}
                        className='flex gap-5 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300'
                      >
                        <div className='flex-shrink-0'>
                          <div className='p-3 rounded-xl bg-gradient-to-br from-green-600/20 to-indigo-600/20 backdrop-blur-md'>
                            <div className='bg-gradient-to-r from-green-500 to-indigo-500 rounded-lg p-2 text-white'>
                              {benefit.icon}
                            </div>
                          </div>
                        </div>
                        <div>
                          <h3 className='text-xl font-bold mb-2'>
                            {benefit.title}
                          </h3>
                          <p className='text-white/70'>{benefit.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className='mt-12 p-8 hidden rounded-2xl border border-white/10 bg-gradient-to-br from-green-900/30 to-indigo-900/30 backdrop-blur-sm'
                  >
                    <div className='flex flex-col md:flex-row items-center gap-6'>
                      <div className='md:w-2/3'>
                        <h3 className='text-2xl font-bold mb-3'>
                          Teacher Success Story
                        </h3>
                        <p className='text-white/80 mb-4'>
                          "As a teacher with over 15 years of experience, I've
                          never seen a tool as powerful as Skybeen. It has saved
                          me countless hours on creating question papers and
                          grading, allowing me to focus on what really matters -
                          connecting with my students."
                        </p>
                        <div className='flex items-center gap-3'>
                          <div className='w-10 h-10 rounded-full overflow-hidden border-2 border-green-500'>
                            <img
                              src='/placeholder.svg?height=40&width=40&text=SS'
                              alt='Sunita Sharma'
                              className='w-full h-full object-cover'
                            />
                          </div>
                          <div>
                            <p className='font-semibold'>Sunita Sharma</p>
                            <p className='text-sm text-white/60'>
                              Mathematics Teacher, Chennai
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className='md:w-1/3 flex justify-center w-full'>
                        <div className='relative w-full'>
                          <div className='absolute -inset-2 rounded-full bg-gradient-to-r from-green-600/30 to-indigo-600/30 opacity-75 blur-md'></div>
                          <Button
                            size='lg'
                            className='relative bg-gradient-to-r h-14 w-full from-green-600 to-indigo-600 hover:from-green-700 hover:to-indigo-700 text-white border-0 rounded-full'
                          >
                            <span>Empower Your Teaching</span>
                            <ArrowRight className='h-4 w-4 ml-2' />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </TabsContent>
              </Tabs>
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
                    Ready to Experience the{' '}
                    <span className='bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-indigo-400'>
                      Benefits?
                    </span>
                  </h2>
                  <p className='text-white/80 mb-6'>
                    Join thousands of students and teachers who are already
                    transforming their educational journey with Skybeen.
                  </p>
                  <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                    <Button
                      size='lg'
                      className='bg-gradient-to-r h-14 max-sm:w-full from-green-600 to-indigo-600 hover:from-green-700 hover:to-indigo-700 text-white border-0 rounded-full'
                    >
                      <Download className='h-5 w-5 mr-2' />
                      <span>Download App</span>
                    </Button>
                    {/* <Link href='/pricing'>
                      <Button
                        size='lg'
                        variant='outline'
                        className='border-white/20 h-14 w-full text-white hover:bg-white/10 rounded-full'
                      >
                        <span>View Pricing</span>
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

      <Footer />
    </div>
  )
}
