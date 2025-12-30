import TypingText from './components/TypingText';

// Constants
const SITE_URL = 'https://hafis.tech';
const GITHUB_URL = 'https://github.com/muhamadhafis';
const LINKEDIN_URL = 'https://www.linkedin.com/in/muhamadhafis/';
const TELEGRAM_URL = 'https://t.me/dederoremo';
const EMAIL = 'hafisgtngm199@gmail.com';

const technologies = [
  'JavaScript ES6+', 'TypeScript', 'Express.js', 'React.js', 'Python', 'PostgreSQL', 'GraphQL'
];

const projects = [
  {
    title: 'RAG Chatbot',
    description: 'An AI-powered chatbot that uses Retrieval-Augmented Generation to provide intelligent, context-aware responses. Built with modern NLP techniques.',
    tech: 'FASTAPI, PYTHON, AI/ML',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80',
    github: GITHUB_URL,
  },
  {
    title: 'Hotel Booking System',
    description: 'A comprehensive hotel reservation platform with real-time availability, booking management, and payment integration.',
    tech: 'REACT.JS, TYPESCRIPT, POSTGRESQL',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80',
    github: GITHUB_URL,
  },
  {
    title: 'Real-time Chat App',
    description: 'Lightning-fast messaging application with WebSocket integration, supporting group chats and real-time notifications.',
    tech: 'NODE.JS, SOCKET.IO, REACT.JS',
    image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=600&q=80',
    github: GITHUB_URL,
  },
  {
    title: 'Task Management System',
    description: 'A collaborative task management backend with role-based access control, task assignments, and progress tracking.',
    tech: 'EXPRESS.JS, POSTGRESQL, GRAPHQL',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&q=80',
    github: GITHUB_URL,
  },
];

const experienceItems = [
  { text: 'Built and maintained REST APIs and GraphQL endpoints using Express.js, serving thousands of daily requests.' },
  { text: 'Designed business intelligence dashboards with PostgreSQL Views and Metabase, enabling data-driven decisions.' },
  { text: 'Automated business workflows using Camunda BPMN, reducing manual processes by 40%.' },
  { text: 'Collaborated directly with team leads across all divisions using Agile/Kanban methodology.' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Muhamad Hafis',
  jobTitle: 'Backend Developer',
  description: 'Backend Developer with 10 months of experience as a Backend Developer Intern',
  url: SITE_URL,
  email: EMAIL,
  sameAs: [LINKEDIN_URL, GITHUB_URL],
  knowsAbout: [
    'JavaScript', 'TypeScript', 'Node.js', 'Express.js', 'React.js',
    'PostgreSQL', 'GraphQL', 'Python', 'REST API', 'Backend Development'
  ],
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'SMK - Grade 13'
  },
  hasOccupation: {
    '@type': 'Occupation',
    name: 'Backend Developer',
    occupationLocation: { '@type': 'Country', name: 'Indonesia' },
    skills: ['Node.js', 'Express', 'React', 'PostgreSQL', 'GraphQL', 'TypeScript', 'Docker', 'Git', 'Agile']
  },
  workExample: projects.map(p => ({
    '@type': 'CreativeWork',
    name: p.title,
    description: p.description,
    keywords: p.tech.replace(/,/g, ', ')
  }))
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="font-google-sans">
        {/* Hero Section */}
        <section className="relative mx-auto min-h-screen flex flex-col items-center justify-center gap-12 px-6 overflow-hidden">
          <div className="text-2xl">
            <h1 className="flex gap-x-2">
              <span className="inline-block font-bold text-gradient-blue animate-shimmer animate-fade-up [animation-delay:400ms]">Muhamad</span>
              <span className="inline-block font-bold text-gradient-blue animate-shimmer animate-fade-up [animation-delay:500ms]">Hafis</span>
              <span className="inline-block animate-fade-up [animation-delay:600ms]">Febriano</span>
            </h1>
          </div>
          <div>
            <h2 className="flex flex-col items-center text-center">
              <span className="text-5xl text-black-google animate-fade-up [animation-delay:500ms] font-semibold md:text-7xl">Helping businesses</span>
              <span className="text-4xl text-gray-google animate-fade-up [animation-delay:500ms] md:text-6xl">with tech solutions</span>
            </h2>
          </div>
          <div>
            <a href="#about" className="group flex text-lg bg-black-google items-center gap-2 px-6 py-2 rounded-full animate-fade-up [animation-delay:700ms] hover:bg-gray-800 transition-colors">
              <span className="text-white">Get to know me</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6 rotate-270 transition-transform duration-300 group-hover:rotate-315 group-active:rotate-315" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
              </svg>
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              {/* Text Content */}
              <div className="flex-1">
                <p className="text-gray-google text-sm font-medium tracking-widest mb-4 animate-fade-up">/ about me</p>
                <h2 className="text-3xl md:text-4xl font-semibold text-black-google mb-6 leading-tight">
                  Hi there! I&apos;m a <span className="text-gradient-blue animate-shimmer">Backend Developer</span> who loves turning coffee into code.
                </h2>
                <div className="space-y-4 text-gray-google text-lg leading-relaxed">
                  <p>
                    Currently wrapping up my final year in high school while rocking a <span className="font-semibold text-black-google">10-month internship</span> as a Backend Developer at <a href="#" className="text-blue-500 hover:underline font-medium">Mirorim</a>.
                  </p>
                  <p>
                    I&apos;m passionate about building scalable systems, designing clean APIs, and occasionally breaking things just to learn how to fix them. My playground? The JavaScript ecosystem — from Express to React, with a sprinkle of GraphQL magic.
                  </p>
                  <p>
                    When I&apos;m not coding, you&apos;ll find me exploring new tech, gaming way too late, or contemplating why semicolons exist.
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="mt-8">
                  <p className="text-sm font-medium text-gray-google mb-4">Here are some technologies I&apos;ve been working with:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {technologies.map((tech, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-black-google">
                        <span className="text-blue-500">▹</span>
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Profile Image - Desktop only */}
              <div className="hidden lg:block flex-shrink-0">
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                  <img
                    src="https://imgur.com/SVQXuje.jpg"
                    alt="Muhamad Hafis"
                    className="relative w-64 h-64 object-cover rounded-xl grayscale hover:grayscale-0 transition duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Slogan Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <TypingText
              text="Solving business problems through strategic consulting and AI."
              className="text-3xl md:text-4xl text-black-google font-medium"
            />
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-google text-sm font-medium tracking-widest mb-4">/ experience</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-black-google mb-12">Where I&apos;ve Worked</h2>

            <div className="border-l-2 border-gray-200 pl-8 space-y-12">
              {/* Mirorim */}
              <article className="relative">
                <div className="absolute -left-[41px] top-0 w-4 h-4 bg-blue-500 rounded-full border-4 border-white"></div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-black-google">Backend Developer Intern</h3>
                    <p className="text-blue-500 font-medium">@ Mirorim</p>
                  </div>
                  <span className="text-gray-google text-sm font-medium mt-2 md:mt-0">Apr 2025 - Jan 2026</span>
                </div>
                <ul className="space-y-3 text-gray-google">
                  {experienceItems.map((item, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="text-blue-500 flex-shrink-0">▹</span>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <p className="text-gray-google text-sm font-medium tracking-widest mb-4">/ pet projects</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-black-google mb-4">Things I&apos;ve Built</h2>
            <p className="text-gray-google text-lg mb-12 max-w-2xl">
              A collection of projects I&apos;ve worked on during my learning journey. Some are prototypes, some are experiments, all are made with love (and caffeine).
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <article key={index} className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-xs font-medium text-blue-300 tracking-wider">{project.tech}</span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-black-google mb-3 group-hover:text-blue-500 transition-colors">{project.title}</h3>
                    <p className="text-gray-google text-sm leading-relaxed mb-4">{project.description}</p>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-black-google hover:text-blue-600 transition-colors"
                    >
                      <svg className="size-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                      View on GitHub
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="pt-24 pb-60 px-6 bg-gray-50">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-gray-google text-sm font-medium tracking-widest mb-4">/ get in touch</p>
            <h2 className="text-4xl md:text-5xl font-semibold text-black-google mb-6">Let&apos;s Build Something Cool!</h2>
            <p className="text-gray-google text-lg mb-8 leading-relaxed">
              I&apos;m currently looking for new internship opportunities where I can learn, grow, and contribute.
              Whether you have a question, a project idea, or just want to say hi — my inbox is always open!
            </p>
            <a
              href={TELEGRAM_URL}
              className="inline-flex items-center gap-2 bg-black-google text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors"
            >
              Say Hello!
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-5" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
              </svg>
            </a>

            {/* Social Media Links */}
            <div className="flex items-center justify-center gap-6 mt-10">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-google hover:text-black-google transition-colors"
                aria-label="GitHub"
              >
                <svg className="size-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-google hover:text-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="size-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-google hover:text-blue-500 transition-colors"
                aria-label="Telegram"
              >
                <svg className="size-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
