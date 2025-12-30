import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://hafis.tech'),
  title: {
    default: 'Muhamad Hafis - Backend Developer | Building Scalable Solutions',
    template: '%s | Muhamad Hafis'
  },
  description: 'Backend Developer with 10 months of intensive internship experience. Expertise in Node.js, Express.js, React, PostgreSQL, GraphQL, and Python. Building scalable APIs and business automation solutions.',
  keywords: [
    'Muhamad Hafis',
    'Backend Developer',
    'Fullstack Developer',
    'Node.js Developer',
    'Express.js Developer',
    'React Developer',
    'PostgreSQL',
    'GraphQL Developer',
    'JavaScript Developer',
    'TypeScript Developer',
    'Python Developer',
    'API Developer',
    'REST API',
    'Junior Developer Indonesia',
    'Backend Developer Indonesia',
    'Software Engineer',
    'Web Developer'
  ],
  authors: [{ name: 'Muhamad Hafis', url: 'https://hafis.tech' }],
  creator: 'Muhamad Hafis',
  publisher: 'Muhamad Hafis',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    url: 'https://hafis.tech',
    siteName: 'Muhamad Hafis Portfolio',
    title: 'Muhamad Hafis - Backend Developer | Building Scalable Solutions',
    description: 'Backend Developer with 10 months of experience. Expertise in Node.js, Express.js, React, PostgreSQL, GraphQL. Building scalable APIs and business automation.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Muhamad Hafis - Backend Developer Portfolio'
      }
    ],
    firstName: 'Muhamad',
    lastName: 'Hafis',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhamad Hafis - Backend Developer',
    description: 'Backend Developer with 10 months of experience. Node.js, Express.js, React, PostgreSQL, GraphQL specialist.',
    images: ['/og-image.png'],
    creator: '@muhamadhafis'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'UPp3wal-sm39r_eXmrnS2p1zKS5E-dvB9-cWZHzx8ds',
  },
  alternates: {
    canonical: 'https://hafis.tech',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
