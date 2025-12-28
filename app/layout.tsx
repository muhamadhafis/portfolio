import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://hafis.tech'),
  title: {
    default: 'Muhamad Hafis - Backend & Fullstack Developer',
    template: '%s | Muhamad Hafis'
  },
  description: 'Siswa kelas 13 dengan pengalaman magang intensif 10 bulan sebagai Backend Developer. Keahlian dalam Node.js, Express, Fastify, React, Next.js, PostgreSQL, GraphQL. Mencari kesempatan magang di startup.',
  keywords: [
    'Muhamad Hafis',
    'Backend Developer',
    'Fullstack Developer',
    'Node.js Developer',
    'Express.js',
    'Fastify',
    'React Developer',
    'Next.js Developer',
    'PostgreSQL',
    'GraphQL',
    'JavaScript Developer',
    'TypeScript Developer',
    'Internship Backend Developer',
    'Magang Developer',
    'Fresh Graduate Developer',
    'Junior Developer Indonesia',
    'Backend Developer Indonesia',
    'Fullstack Developer Indonesia'
  ],
  authors: [{ name: 'Muhamad Hafis' }],
  creator: 'Muhamad Hafis',
  publisher: 'Muhamad Hafis',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'profile',
    locale: 'id_ID',
    url: 'https://hafis.tech',
    siteName: 'Muhamad Hafis Portfolio',
    title: 'Muhamad Hafis - Backend & Fullstack Developer',
    description: 'Pengalaman 10 bulan sebagai Backend Developer Intern. Keahlian Node.js, Express, Fastify, React, Next.js, PostgreSQL, GraphQL. Mencari magang di startup.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Muhamad Hafis - Backend & Fullstack Developer'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhamad Hafis - Backend & Fullstack Developer',
    description: 'Backend Developer dengan pengalaman 10 bulan. Keahlian Node.js, Express, Fastify, React, Next.js, PostgreSQL, GraphQL.',
    images: ['/og-image.png']
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
    <html lang="id">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  )
}
