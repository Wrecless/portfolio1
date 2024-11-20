import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bruno Mata - Software Engineer',
  description: 'Personal portfolio of Bruno Mata, software enginee and full stack developer specializing in React, Node.js, and more.',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
      <body className={inter.className}>{children}</body>
      </html>
  )
}