import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import Providers from '@/state/Providers';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Apex DMIT',
  description: 'Apex DMIT React Technical Test',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme appearance="light" grayColor="gray">
          <Providers>
            {children}
          </Providers>
        </Theme>
      </body>
    </html>
  )
}
