'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Brain,
  FileText,
  MessageSquare,
  BarChart3,
  Cpu,
  ArrowRight,
  Sparkles,
  Zap,
  BookOpen,
  Lightbulb,
  Download,
  Shield,
  Rocket,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useTheme } from 'next-themes'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

// New Highlight Card Component
const FeatureHighlightCard = ({ icon, title, description, color }) => (
  <motion.div
    whileHover={{ scale: 1.05, rotate: 1 }}
    className='relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md p-8 shadow-lg'
  >
    <div className='absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-green-600/30 to-indigo-600/30 rounded-full blur-3xl opacity-70'></div>
    <div className='relative z-10'>
      <div className={`p-4 rounded-full ${color} w-fit mb-6 mx-auto`}>
        <div className='bg-gradient-to-r from-green-500 to-indigo-500 rounded-full p-3 text-white'>
          {icon}
        </div>
      </div>
      <h3 className='text-2xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-indigo-400'>
        {title}
      </h3>
      <p className='text-white/80 text-center'>{description}</p>
    </div>
  </motion.div>
)

export default function Features() {
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
            <div className='absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-b from-green-900/30 to-transparent'></div>
            <div className='absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-green-700/20 blur-[120px]'></div>
            <div className='absolute bottom-1/3 left-1/4 w-[350px] h-[350px] rounded-full bg-indigo-700/20 blur-[120px]'></div>
          </div>

          <div className='container relative z-10 px-4 md:px-6 mx-auto'>
            <motion.div
              initial='hidden'
              animate='visible'
              variants={fadeInUp}
              className='max-w-4xl mx-auto text-center'
            >
              <Badge className='mb-6 bg-white/10 text-white hover:bg-white/20 border-0 backdrop-blur-sm px-4 py-1.5 text-sm'>
                <Cpu className='h-4 w-4 mr-2' />
                Next-Gen Features
              </Badge>
              <h1 className='text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight'>
                <span className='bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-indigo-400 to-blue-400'>
                  Unleash Your Potential
                </span>{' '}
                with AI
              </h1>
              <p className='text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto'>
                Explore cutting-edge AI tools designed to supercharge learning
                for students and educators across India.
              </p>
              <Button
                size='lg'
                className='bg-gradient-to-r from-green-600 to-indigo-600 hover:from-green-700 hover:to-indigo-700 text-white border-0 rounded-full px-8 py-3'
              >
                <Rocket className='h-5 w-5 mr-2' />
                Get Started Now
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Highlight Features */}
        <section className='py-20 relative'>
          <div className='absolute inset-0 z-0'>
            <div className='absolute top-1/2 right-1/4 w-[450px] h-[450px] rounded-full bg-indigo-700/15 blur-[130px]'></div>
          </div>

          <div className='container relative z-10 px-4 md:px-6 mx-auto'>
            <motion.h2
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              variants={fadeInUp}
              className='text-4xl md:text-5xl font-bold text-center mb-16'
            >
              Why <span className='text-green-400'>Skybeen</span> Stands Out
            </motion.h2>

            <div className='grid gap-8 md:grid-cols-3'>
              <FeatureHighlightCard
                icon={<Brain className='h-12 w-12' />}
                title='AI-Powered Tutoring'
                description='Personalized, 24/7 guidance that adapts to your unique learning style.'
                color='bg-green-500/20'
              />
              <FeatureHighlightCard
                icon={<BarChart3 className='h-12 w-12' />}
                title='Advanced Analytics'
                description='Real-time insights to track progress and optimize performance.'
                color='bg-indigo-500/20'
              />
              <FeatureHighlightCard
                icon={<BookOpen className='h-12 w-12' />}
                title='Smart Learning Paths'
                description='Customized study plans tailored to your goals and pace.'
                color='bg-blue-500/20'
              />
            </div>
          </div>
        </section>

        {/* Main Features */}
        <section className='py-20 relative'>
          <div className='absolute inset-0 z-0'>
            <div className='absolute top-0 left-0 right-0 h-[300px] bg-gradient-to-b from-green-950 to-transparent'></div>
            <div className='absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-t from-green-950 to-transparent'></div>
          </div>

          <div className='container relative z-10 px-4 md:px-6 mx-auto'>
            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, margin: '-100px' }}
              variants={staggerContainer}
              className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'
            >
              {[
                {
                  icon: <FileText className='h-10 w-10' />,
                  title: 'AI-Generated Exams ',
                  description:
                    'Custom exams tailored to your curriculum with adaptive difficulty.',
                },
                {
                  icon: <Brain className='h-10 w-10' />,
                  title: 'Intelligent Tutoring',
                  description:
                    'Personalized explanations that evolve with your progress.',
                },
                {
                  icon: <BarChart3 className='h-10 w-10' />,
                  title: 'Performance Analytics',
                  description:
                    'Detailed insights to pinpoint strengths and areas to improve.',
                },

                {
                  icon: <MessageSquare className='h-10 w-10' />,
                  title: '24/7 Doubt Solving',
                  description:
                    'Instant answers to your questions, anytime, anywhere.',
                },
                {
                  icon: <Lightbulb className='h-10 w-10' />,
                  title: 'Concept Visualization',
                  description:
                    'Interactive visuals to simplify complex topics.',
                },

                {
                  icon: <Shield className='h-10 w-10' />,
                  title: 'Secure & Private',
                  description: 'Your data stays safe with top-tier encryption.',
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={featureItem}
                  className='group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 hover:bg-white/10 transition-all duration-300'
                >
                  <div className='absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br from-green-600/20 to-indigo-600/20 rounded-full blur-2xl group-hover:opacity-100 opacity-0 transition-opacity duration-500'></div>

                  <div className='relative z-10'>
                    <div className='p-3 rounded-xl bg-gradient-to-br from-green-600/20 to-indigo-600/20 backdrop-blur-md w-fit mb-6'>
                      <div className='bg-gradient-to-r from-green-500 to-indigo-500 rounded-lg p-2 text-white'>
                        {feature.icon}
                      </div>
                    </div>

                    <h3 className='text-xl font-bold mb-3'>{feature.title}</h3>
                    <p className='text-white/70'>{feature.description}</p>

                    {/* <div className='mt-6 flex items-center text-green-400 font-medium'>
                      <span>Learn More</span>
                      <ArrowRight className='h-4 w-4 ml-2 transition-transform group-hover:translate-x-1' />
                    </div> */}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* How It Works */}
        <section className='py-20 relative'>
          <div className='absolute inset-0 z-0'>
            <div className='absolute top-0 left-0 right-0 h-[200px] bg-gradient-to-b from-black to-transparent'></div>
            <div className='absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-black to-transparent'></div>
            <div className='absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-green-700/15 blur-[120px]'></div>
          </div>

          <div className='container relative z-10 px-4 md:px-6 mx-auto'>
            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInUp}
              className='max-w-3xl mx-auto text-center mb-16'
            >
              <Badge className='mb-4 bg-white/10 text-white hover:bg-white/20 border-0 backdrop-blur-sm px-4 py-1.5'>
                <Sparkles className='h-4 w-4 mr-2' />
                How It Works
              </Badge>
              <h2 className='text-4xl md:text-5xl font-bold tracking-tight'>
                The Science Behind{' '}
                <span className='bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-indigo-400'>
                  Skybeen’s AI
                </span>
              </h2>
              <p className='text-white/80 text-lg mt-6 max-w-2xl mx-auto'>
                Powered by advanced machine learning and educational expertise,
                Skybeen delivers a transformative learning experience.
              </p>
            </motion.div>

            <div className='grid gap-12 lg:grid-cols-2 items-center'>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className='relative'
              >
                <div className='absolute -inset-6 rounded-3xl bg-gradient-to-r from-green-600/40 to-indigo-600/40 opacity-75 blur-xl'></div>
                <div className='relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl'>
                  <img
                    src='/placeholder.svg?height=450&width=650&text=AI+Technology+Visualization'
                    alt='AI Technology Visualization'
                    className='w-full h-auto'
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className='space-y-8'
              >
                {[
                  {
                    step: 1,
                    title: 'Personalized Learning Profiles',
                    description:
                      'Our AI builds a dynamic profile based on your interactions and progress.',
                  },
                  {
                    step: 2,
                    title: 'Adaptive Content Generation',
                    description:
                      'Tailored materials and questions evolve with your learning needs.',
                  },
                  {
                    step: 3,
                    title: 'Real-Time Feedback Loop',
                    description:
                      'Instant insights refine your path for maximum growth.',
                  },
                  {
                    step: 4,
                    title: 'Collaborative Intelligence',
                    description:
                      'Blends AI precision with human expertise for a balanced approach.',
                  },
                ].map((item) => (
                  <div key={item.step} className='space-y-2'>
                    <div className='flex items-center gap-4'>
                      <div className='flex items-center justify-center w-10 h-10 rounded-full bg-green-500/20 text-green-400 font-bold'>
                        {item.step}
                      </div>
                      <h3 className='text-2xl font-bold'>{item.title}</h3>
                    </div>
                    <p className='text-white/70 pl-14'>{item.description}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-20 relative'>
          <div className='absolute inset-0 z-0'>
            <div className='absolute inset-0 bg-gradient-to-br from-green-900/30 to-indigo-900/30'></div>
            <div className='absolute top-1/4 left-1/3 w-[300px] h-[300px] rounded-full bg-green-700/20 blur-[100px]'></div>
          </div>

          <div className='container relative z-10 px-4 md:px-6 mx-auto'>
            <div className='relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-green-900/50 to-indigo-900/50 backdrop-blur-xl p-10 md:p-14'>
              <div className='absolute inset-0 overflow-hidden'>
                <div className='absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent'></div>
                <div className='absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent'></div>
                <div className='absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-transparent via-green-500 to-transparent'></div>
                <div className='absolute top-0 bottom-0 right-0 w-px bg-gradient-to-b from-transparent via-indigo-500 to-transparent'></div>

                {/* Animated particles */}
                {Array.from({ length: 15 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className='absolute w-1.5 h-1.5 rounded-full bg-white'
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      opacity: Math.random() * 0.6 + 0.2,
                    }}
                    animate={{
                      opacity: [0.2, 0.8, 0.2],
                      scale: [1, 1.8, 1],
                    }}
                    transition={{
                      duration: Math.random() * 4 + 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                ))}
              </div>

              <div className='relative z-10 max-w-4xl mx-auto text-center'>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className='text-3xl md:text-4xl font-bold tracking-tight mb-6'>
                    Ready to Revolutionize Your{' '}
                    <span className='bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-indigo-400'>
                      Learning Journey?
                    </span>
                  </h2>
                  <p className='text-white/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto'>
                    Join thousands of learners and educators already
                    transforming education with Skybeen’s AI-powered tools.
                  </p>
                  <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                    <Button
                      size='lg'
                      className='bg-gradient-to-r from-green-600 to-indigo-600 hover:from-green-700 hover:to-indigo-700 text-white border-0 rounded-full px-8 py-3'
                    >
                      <Download className='h-5 w-5 mr-2' />
                      Download Now
                    </Button>
                    <Link href='/benefits'>
                      <Button
                        size='lg'
                        variant='outline'
                        className='border-white/20 w-full text-white hover:bg-white/10 rounded-full px-8 py-3'
                      >
                        <Zap className='h-5 w-5 mr-2' />
                        See Benefits
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
