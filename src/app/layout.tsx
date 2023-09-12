import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Next Todos',
  description: 'Next Todos App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='dark:bg-slate-800'>
        <Navbar />
        <main className='mx-auto max-w-xl p-4 bg-stone-200 min-h-screen'>
        {children}
        </main>
        </body>
    </html>
  )
}
