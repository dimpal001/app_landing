import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Skybeen - Smart Learning for Students and Teachers',
  description:
    'Skybeen is a next-generation educational platform that helps students prepare better and teachers teach smarter with automatic exam creation, multi-language support, and classroom tools.',
  generator: 'v0.dev',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

import './globals.css'
