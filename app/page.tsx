import TypingText from './components/TypingText';

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Muhamad Hafis',
    jobTitle: 'Backend Developer',
    description: 'Backend & Fullstack Developer dengan pengalaman 10 bulan sebagai Backend Developer Intern',
    url: 'https://hafis.tech',
    sameAs: [
      'https://www.linkedin.com/in/muhamadhafis/',
      'https://github.com/muhamadhafis'
    ],
    knowsAbout: [
      'JavaScript',
      'TypeScript',
      'Node.js',
      'Express.js',
      'Fastify',
      'React.js',
      'Next.js',
      'PostgreSQL',
      'GraphQL',
      'Backend Development',
      'Fullstack Development',
      'REST API',
      'GraphQL API'
    ],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'SMK - Kelas 13'
    },
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Backend Developer',
      occupationLocation: {
        '@type': 'Country',
        name: 'Indonesia'
      },
      skills: [
        'Node.js',
        'Express',
        'Fastify',
        'React',
        'Next.js',
        'PostgreSQL',
        'GraphQL',
        'TypeScript',
        'Docker',
        'Git',
        'Agile',
        'Kanban'
      ]
    },
    workExample: [
      {
        '@type': 'CreativeWork',
        name: 'RAG Chatbot',
        description: 'Aplikasi Chatbot berbasis AI menggunakan FastAPI dan Python integration',
        keywords: 'AI, Chatbot, FastAPI, Python'
      },
      {
        '@type': 'CreativeWork',
        name: 'Hotel Booking System',
        description: 'Sistem pemesanan hotel menggunakan Next.js',
        keywords: 'Next.js, Hotel, Booking System'
      },
      {
        '@type': 'CreativeWork',
        name: 'Real-time Chat Application',
        description: 'Aplikasi chatting waktu nyata',
        keywords: 'Real-time, Chat, WebSocket'
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="font-google-sans">
        <section className="max-w-lg min-h-screen flex flex-col items-center justify-center gap-12">
          <div className="text-2xl">
            <h1 className="flex gap-2">
              <span className="inline-block animate-fade-up [animation-delay:400ms]">Muhamad</span>
              <span className="inline-block animate-fade-up [animation-delay:500ms]">Hafis</span>
              <span className="inline-block animate-fade-up [animation-delay:600ms]">Febriano</span>
            </h1>
          </div>
          <div>
            <h2 className="flex flex-col items-center text-center">
              <span className="text-5xl text-black-google animate-fade-up [animation-delay:500ms]">Helping businesses</span>
              <span className="text-4xl text-gray-google animate-fade-up [animation-delay:500ms]">with tech solutions</span>
            </h2>
          </div>
          <div>
            <button className="group flex text-lg bg-black-google items-center gap-2 px-6 py-2 rounded-full animate-fade-up [animation-delay:700ms]">
              <p className="text-white">Explore use cases</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6 rotate-270 transition-transform duration-300 group-hover:rotate-315 group-active:rotate-315">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
              </svg>
            </button>
          </div>
        </section>

        <section>
          <div className="pb-16 px-8">
            <TypingText
              text="Solving business problems through strategic consulting and AI."
              className="text-3xl text-black-google"
            />
          </div>
          <div className="w-full py-12 inline-flex flex-nowrap overflow-hidden">
            <div className="flex-none flex gap-10 items-center justify-center md:justify-start animate-scroll-left pr-10">
              <div className="rounded-full border bg-gray-50 border-gray-200 p-4 inline-block animate-float [animation-delay:0ms]">
                <img src="https://img.icons8.com/?size=100&id=2070&format=png&color=000000" alt="" className="size-10" />
              </div>

              <div className="rounded-full border bg-gray-50 border-gray-200 p-4 inline-block animate-float [animation-delay:1200ms]">
                <img src="https://img.icons8.com/?size=100&id=P7D336AbmFu1&format=png&color=000000" alt="" className="size-10" />
              </div>

              <div className="rounded-full border bg-gray-50 border-gray-200 p-4 inline-block animate-float [animation-delay:300ms]">
                <img src="https://img.icons8.com/?size=100&id=h4xGpmTyCuPK&format=png&color=000000" alt="" className="size-10" />
              </div>

              <div className="rounded-full border bg-gray-50 border-gray-200 p-4 inline-block animate-float [animation-delay:2100ms]">
                <img src="https://img.icons8.com/?size=100&id=132&format=png&color=000000" alt="" className="size-10" />
              </div>

              <div className="rounded-full border bg-gray-50 border-gray-200 p-4 inline-block animate-float [animation-delay:900ms]">
                <img src="https://img.icons8.com/?size=100&id=482&format=png&color=000000" alt="" className="size-10" />
              </div>

              <div className="rounded-full border bg-gray-50 border-gray-200 p-4 inline-block animate-float [animation-delay:1500ms]">
                <img src="https://img.icons8.com/?size=100&id=20884&format=png&color=000000" alt="" className="size-10" />
              </div>
            </div>

            <div className="flex-none flex gap-10 items-center justify-center md:justify-start animate-scroll-left pr-10" aria-hidden="true">
              <div className="rounded-full border bg-gray-50 border-gray-200 p-4 inline-block animate-float [animation-delay:0ms]">
                <img src="https://img.icons8.com/?size=100&id=2070&format=png&color=000000" alt="" className="size-10" />
              </div>

              <div className="rounded-full border bg-gray-50 border-gray-200 p-4 inline-block animate-float [animation-delay:1200ms]">
                <img src="https://img.icons8.com/?size=100&id=P7D336AbmFu1&format=png&color=000000" alt="" className="size-10" />
              </div>

              <div className="rounded-full border bg-gray-50 border-gray-200 p-4 inline-block animate-float [animation-delay:300ms]">
                <img src="https://img.icons8.com/?size=100&id=h4xGpmTyCuPK&format=png&color=000000" alt="" className="size-10" />
              </div>

              <div className="rounded-full border bg-gray-50 border-gray-200 p-4 inline-block animate-float [animation-delay:2100ms]">
                <img src="https://img.icons8.com/?size=100&id=132&format=png&color=000000" alt="" className="size-10" />
              </div>

              <div className="rounded-full border bg-gray-50 border-gray-200 p-4 inline-block animate-float [animation-delay:900ms]">
                <img src="https://img.icons8.com/?size=100&id=482&format=png&color=000000" alt="" className="size-10" />
              </div>

              <div className="rounded-full border bg-gray-50 border-gray-200 p-4 inline-block animate-float [animation-delay:1500ms]">
                <img src="https://img.icons8.com/?size=100&id=20884&format=png&color=000000" alt="" className="size-10" />
              </div>
            </div>
          </div>
        </section>



        <header>
          <h1>Muhamad Hafis</h1>
          <nav className="contact-links" aria-label="Kontak Profesional">
            <a
              href="https://www.linkedin.com/in/muhamadhafis/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Profil LinkedIn Muhamad Hafis"
            >
              LinkedIn
            </a>
            <span aria-hidden="true">|</span>
            <a
              href="https://github.com/muhamadhafis"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Profil GitHub Muhamad Hafis"
            >
              GitHub
            </a>
          </nav>
          <p className="subtitle">
            <strong>Backend & Fullstack Developer (Internship Candidate)</strong>
          </p>
        </header>

        <section aria-label="Profil Profesional">
          <p className="intro">
            Siswa kelas 13 dengan pengalaman magang intensif selama 10 bulan sebagai Backend Developer.
            Memiliki keahlian teknis dalam ekosistem JavaScript (Express, Fastify, React, Next.js) dan
            manajemen data (PostgreSQL, GraphQL). Terbiasa bekerja dalam lingkungan Agile/Kanban dan
            berkolaborasi langsung dengan pimpinan divisi. Saat ini mencari kesempatan magang baru di
            lingkungan startup untuk memperluas wawasan teknis dan adaptabilitas industri.
          </p>
        </section>

        <hr />

        <section aria-labelledby="pengalaman-kerja">
          <h2 id="pengalaman-kerja">Pengalaman Kerja</h2>

          <article>
            <div className="job-title">
              <div>
                <span className="company">Mirorim</span> | <em className="role">Backend Developer Intern</em>
              </div>
              <span className="duration">April 2025 - Januari 2026</span>
            </div>

            <p>
              Bertanggung jawab dalam pengembangan fitur, <em>maintenance</em> layanan, dan otomatisasi proses bisnis.
            </p>

            <ul>
              <li>
                <strong>API & Backend Development:</strong> Mengimplementasikan REST API dan GraphQL API.
                Mengembangkan layanan <em>Cron Job</em> menggunakan Express dan Fastify.
              </li>
              <li>
                <strong>Database & Reporting:</strong> Membuat laporan bisnis dan pengguna memanfaatkan
                PostgreSQL Views dan Metabase. Mengonversi database menjadi GraphQL API menggunakan Hasura.
              </li>
              <li>
                <strong>Process Automation:</strong> Merancang alur proses bisnis menggunakan Camunda.
              </li>
              <li>
                <strong>System Management:</strong> Mengelola inventory barang menggunakan InvenTree dan
                manajemen user menggunakan LDAP.
              </li>
              <li>
                <strong>Kolaborasi:</strong> Bekerja langsung dengan <em>leader</em> di semua divisi
                menggunakan metodologi Kanban dan Agile.
              </li>
            </ul>
          </article>
        </section>

        <hr />

        <section aria-labelledby="portofolio-projek">
          <h2 id="portofolio-projek">Portofolio Projek</h2>

          <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', color: '#4a4a4a' }}>
            <strong>Catatan:</strong> Semua projek berikut masih dalam tahap prototipe dan merupakan
            bagian dari roadmap pengembangan saya untuk memperluas portfolio dan keahlian teknis.
          </p>

          <article>
            <h3>Fullstack (Node.js, React/Next.js)</h3>
            <ul>
              <li><strong>RAG Chatbot:</strong> Aplikasi Chatbot berbasis AI (FastAPI/Python integration).</li>
              <li><strong>Hotel Booking System:</strong> Sistem pemesanan hotel (Next.js).</li>
              <li><strong>Real-time Chat App:</strong> Aplikasi chatting waktu nyata.</li>
              <li><strong>Short URL Service:</strong> Layanan pemendek tautan.</li>
              <li><strong>QnA Application:</strong> Platform tanya jawab komunitas (React).</li>
              <li><strong>Laundry Order System:</strong> Sistem manajemen pesanan laundry (React).</li>
            </ul>
          </article>

          <article>
            <h3>Backend Engineering</h3>
            <ul>
              <li><strong>Task Management System:</strong> Backend untuk pengelolaan tugas tim.</li>
              <li><strong>Ticket Marketplace:</strong> Backend sistem jual beli tiket (Implementasi dari studi kasus WPU).</li>
            </ul>
          </article>

          <article>
            <h3>Frontend Development</h3>
            <ul>
              <li><strong>E-Commerce Marketplace:</strong> Antarmuka pengguna untuk aplikasi belanja online (React).</li>
            </ul>
          </article>
        </section>

        <hr />

        <section aria-labelledby="keahlian-teknis">
          <h2 id="keahlian-teknis">Keahlian Teknis</h2>

          <ul>
            <li>
              <strong>Bahasa & Framework:</strong> JavaScript/TypeScript, Node.js (Express, Fastify),
              React.js, Next.js, Python (FastAPI).
            </li>
            <li>
              <strong>Database:</strong> PostgreSQL, GraphQL (Hasura).
            </li>
            <li>
              <strong>Tools & DevOps:</strong> Docker (Basic), Git, Metabase, Camunda, LDAP.
            </li>
            <li>
              <strong>Metodologi:</strong> Agile, Kanban.
            </li>
          </ul>
        </section>
      </main>
    </>
  )
}
