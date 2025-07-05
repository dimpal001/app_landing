'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import {
  Brain,
  Download,
  Sparkles,
  Cpu,
  FileText,
  LineChart,
  Layers,
  ShieldCheck,
  Target,
  TrendingUp,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useTheme } from 'next-themes'
import { useIsMobile } from '@/hooks/use-mobile'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Features from './features/page'

// New Quick Stats Card Component
const QuickStatsCard = ({ icon, value, label }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className='relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 text-center'
  >
    <div className='absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-br from-green-600/20 to-indigo-600/20 rounded-full blur-2xl'></div>
    <div className='relative z-10'>
      <div className='flex justify-center mb-2'>{icon}</div>
      <h3 className='text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-indigo-400'>
        {value}
      </h3>
      <p className='text-white/80 text-sm'>{label}</p>
    </div>
  </motion.div>
)

export default function Home() {
  const { theme, setTheme } = useTheme()
  const isMobile = useIsMobile()
  const [mounted, setMounted] = useState(false)
  const heroRef = useRef(null)

  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 500], [0, -150])
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.3])

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

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
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
    <div className='min-h-screen bg-[#0A0A0F] text-white overflow-hidden'>
      <Navbar />

      <main>
        {/* Hero Section */}
        <section
          id='hero'
          ref={heroRef}
          className='relative min-h-screen flex items-center pt-20 overflow-hidden'
        >
          {/* Background elements */}
          <div className='absolute inset-0 z-0'>
            <div className='absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-b from-green-900/30 to-transparent'></div>
            <div className='absolute bottom-0 left-0 right-0 h-[600px] bg-gradient-to-t from-black/80 to-transparent'></div>
            <div className='absolute top-1/5 left-1/5 w-[400px] h-[400px] rounded-full bg-green-700/25 blur-[120px]'></div>
            <div className='absolute bottom-1/4 right-1/5 w-[350px] h-[350px] rounded-full bg-indigo-700/25 blur-[120px]'></div>

            {/* Grid pattern */}
            <div className="absolute inset-0 bg-[url('/logo.png?height=1000&width=1000')] bg-center bg-no-repeat opacity-[0.03]"></div>

            {/* <div className="absolute inset-0 bg-[url('/logo.png?height=500&width=500')] bg-center opacity-[0.05]"></div> */}

            {/* Animated particles */}
            <div className='absolute inset-0'>
              {Array.from({ length: 25 }).map((_, i) => (
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
          </div>

          <div className='container relative z-10 px-4 md:px-6 mx-auto'>
            <div className='grid gap-12 lg:grid-cols-2 items-center'>
              <motion.div
                initial='hidden'
                animate='visible'
                variants={fadeInUp}
                className='flex flex-col justify-center space-y-8'
              >
                <motion.div variants={fadeInUp} className='space-y-4 p-5'>
                  <Badge className='mb-4 bg-white/10 text-white hover:bg-white/20 border-0 backdrop-blur-sm px-4 py-1.5 text-sm'>
                    <Sparkles className='h-4 w-4 mr-2' />
                    Empowering Education
                  </Badge>
                  <h1 className='text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight leading-tight'>
                    <span className='block'>Learn Boldly,</span>
                    <span className='bg-clip-text bg-gradient-to-r from-green-400 via-indigo-400 to-blue-400'>
                      Shine Brighter with{' '}
                      <span className='text-green-500'>Skybeen</span>
                    </span>
                  </h1>
                  <p className='text-xl md:text-2xl text-white/80 max-w-[650px]'>
                    Skybeen is shaping a new future of learning — designed for
                    students and teachers.
                    <br />
                    <br />
                    Unlock knowledge with simple, powerful tools. Grow faster,
                    dream bigger, achieve more.
                    <br />
                    <br />
                    Skybeen শিক্ষাৰ নতুন দিশ মুকলি কৰে
                    <br />
                    <br />
                    সহজ, শক্তিশালী উপায়ৰে অধ্যয়ন কৰক। দ্রুত উন্নতি কৰক, ডাঙৰ
                    সপোন দেখক, সফলতা লাভ কৰক।
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className='grid gap-6 sm:grid-cols-3 mt-10 max-sm:px-4'
                >
                  <QuickStatsCard
                    icon={<ShieldCheck className='h-6 w-6 text-blue-400' />}
                    value='100%'
                    label='Secure & Private'
                  />
                  <QuickStatsCard
                    icon={<Target className='h-6 w-6 text-purple-400' />}
                    value='Maximized'
                    label='Focus on Learning'
                  />
                  <QuickStatsCard
                    icon={<TrendingUp className='h-6 w-6 text-green-400' />}
                    value='Grow Faster'
                    label='Accelerate Your Success'
                  />

                  {/* <QuickStatsCard
                    icon={<Users className='h-6 w-6 text-green-400' />}
                    value='15,000+'
                    label='Active Students'
                  />
                  <QuickStatsCard
                    icon={<BookOpen className='h-6 w-6 text-indigo-400' />}
                    value='500+'
                    label='Courses Covered'
                  />
                  <QuickStatsCard
                    icon={<Brain className='h-6 w-6 text-blue-400' />}
                    value='95%'
                    label='Satisfaction Rate'
                  /> */}
                </motion.div>
              </motion.div>

              <motion.div
                initial='hidden'
                animate='visible'
                variants={scaleIn}
                className='relative mx-auto lg:ml-auto flex items-center justify-center'
              >
                <div className='relative'>
                  {/* Glowing effect */}
                  <div className='absolute -inset-6 rounded-3xl bg-gradient-to-r from-green-600/40 to-indigo-600/40 opacity-80 blur-xl'></div>

                  {/* Phone mockup */}
                  <div className='relative z-10 rounded-3xl overflow-hidden border border-white/20 shadow-2xl'>
                    <img
                      src='/hero.jpg'
                      // src='/placeholder.svg?height=650&width=325&text=Skybeen+App'
                      alt='Skybeen App Preview'
                      className='w-[325px] h-[590px] object-cover'
                    />

                    {/* Floating UI elements */}
                    <motion.div
                      className='absolute top-[15%] -right-20 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10 shadow-xl'
                      animate={{ x: [-25, 0, -25], y: [-5, 5, -5] }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    >
                      <div className='flex items-center text-green-500 gap-2'>
                        <Brain className='h-6 w-6 text-green-400' />
                        <span className='text-sm font-medium'>AI Tutor</span>
                      </div>
                    </motion.div>

                    <motion.div
                      className='absolute bottom-[25%] -left-24 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10 shadow-xl'
                      animate={{ x: [0, 25, 0], y: [5, -5, 5] }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    >
                      <div className='flex items-center gap-2 text-indigo-500'>
                        <LineChart className='h-6 w-6 text-indigo-400' />
                        <span className='text-sm font-medium'>
                          Smart Analytics
                        </span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Featured Sections Preview */}
            <div className='mt-28 md:mt-36'>
              <h2 className='text-3xl md:text-4xl font-bold text-center mb-14'>
                Explore How <span className='text-green-500'>Skybeen</span>{' '}
                Empowers You
              </h2>

              <div className='grid gap-8 md:grid-cols-3 max-w-5xl mx-auto'>
                {[
                  {
                    icon: <Cpu className='h-10 w-10' />,
                    title: 'Smart Features',
                    description:
                      'Leverage AI-driven tools to enhance learning efficiency and engagement.',
                    link: '/features',
                  },
                  {
                    icon: <FileText className='h-10 w-10' />,
                    title: 'For Everyone',
                    description:
                      'Designed for students, teachers, and institutions to thrive together.',
                    link: '/benefits',
                  },
                  {
                    icon: <Layers className='h-10 w-10' />,
                    title: 'Flexible Pricing',
                    description:
                      'Affordable plans tailored to your educational needs and goals.',
                    link: '/pricing',
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={featureItem}
                    className='group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 hover:bg-white/10 transition-all duration-300'
                  >
                    <div className='absolute -right-12 -top-12 w-48 h-48 bg-gradient-to-br from-green-600/25 to-indigo-600/25 rounded-full blur-3xl group-hover:opacity-100 opacity-0 transition-opacity duration-500'></div>

                    <div className='relative z-10'>
                      <div className='p-4 rounded-xl bg-gradient-to-br from-green-600/20 to-indigo-600/20 backdrop-blur-md w-fit mb-6'>
                        <div className='bg-gradient-to-r from-green-500 to-indigo-500 rounded-lg p-2 text-white'>
                          {item.icon}
                        </div>
                      </div>

                      <h3 className='text-2xl font-bold mb-3'>{item.title}</h3>
                      <p className='text-white/80 mb-6'>{item.description}</p>

                      {/* <Link
                        href={item.link}
                        className='inline-flex items-center text-green-400 font-medium'
                      >
                        <span>Discover More</span>
                        <ArrowRight className='h-5 w-5 ml-2 transition-transform group-hover:translate-x-1' />
                      </Link> */}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className='mt-28 md:mt-36 relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-green-900/50 to-indigo-900/50 backdrop-blur-xl p-10 md:p-14'>
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

              <div className='relative z-10 text-center'>
                <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                  Ready to Elevate Your{' '}
                  <span className='bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-indigo-400'>
                    Educational Journey?
                  </span>
                </h2>
                <p className='text-white/80 text-lg md:text-xl mb-8 max-w-3xl mx-auto'>
                  Join a thriving community of learners and educators
                  transforming education with Skybeen’s innovative AI platform.
                </p>
                <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                  <Button
                    size='lg'
                    className='bg-gradient-to-r from-green-600 to-indigo-600 hover:from-green-700 hover:to-indigo-700 text-white border-0 rounded-full px-8 py-3'
                  >
                    <Download className='h-6 w-6 mr-2' />
                    <span>Download App</span>
                  </Button>
                  <Link href='/contact'>
                    <Button
                      size='lg'
                      variant='outline'
                      className='border-white/20 w-full text-white hover:bg-white/10 rounded-full px-8 py-3'
                    >
                      <span>Contact Us</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='mt-10'>
          <Features />
        </section>
      </main>

      <Footer />
    </div>
  )
}
