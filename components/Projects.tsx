'use client'

import React from 'react'
import { motion } from 'framer-motion'

type Project = {
  id: number
  title: string
  period: string
  img: string
  stack: string
  overview: string
  highlights: string[]
  link?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Next-Hire — AI Recruitment Intelligence Platform',
    period: 'March 2026 · University Capstone',
    img: '/next-hire.png',
    stack: 'Next.js 16, TypeScript, PostgreSQL (Neon), Prisma, Clerk, OpenAI GPT-4o, BullMQ, Redis',
    overview:
      'A full-stack AI recruitment platform that parses resumes with GPT-4o, automatically scores and ranks candidates against job requirements, and replaces manual CV screening with a structured, audit-ready workflow.',
    highlights: [
      'Built a three-factor AI scoring engine (experience 60%, skills 30%, projects 10%) with skill normalisation and hard disqualification for under-qualified candidates.',
      'Async bulk resume processing via BullMQ — handles PDF/DOCX/ZIP uploads without HTTP timeouts on serverless.',
      'Delivered org-level analytics, full audit trails (job edits, match decisions, uploads), and CSV/JSON export.',
    ],
    link: 'https://next-hire-blush.vercel.app/',
  },
  {
    id: 2,
    title: 'FlowBoard - Task Management Application',
    period: 'Latest Release',
    img: '/flowboard.png',
    stack: 'React.js, Next.js, TypeScript, Vercel',
    overview:
      'A modern task management app for planning and prioritizing work with lane-based boards and smooth drag-and-drop.',
    highlights: [
      'Organized work into clear lanes (To Do, In Progress, Done) with responsive interaction patterns.',
      'Added live task management workflow with clean UI and deployment on Vercel.',
    ],
    link: 'https://flowboard-seven.vercel.app/',
  },
  {
    id: 3,
    title: 'Netflix Clone',
    period: 'Production Deployment',
    img: '/netflix-clone.png',
    stack: 'React.js, Firebase, JavaScript, CSS',
    overview:
      'A Netflix-inspired streaming UI featuring authentication flow, dynamic content rows, and responsive browsing experience.',
    highlights: [
      'Implemented rich homepage layout and reusable components for a polished media UX.',
      'Integrated Firebase-backed flows for authentication and app behavior.',
    ],
    link: 'https://netflix-clone-e9e10.web.app/',
  },
]

export function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='relative min-h-[100dvh] flex flex-col overflow-hidden
      text-left justify-center mx-auto items-center z-0 pt-20 pb-10'
    >
      <h3 className='uppercase text-gray-500 text-xl md:text-2xl
      tracking-[10px] md:tracking-[20px] mb-6 sm:mb-8'>
        Projects
      </h3>

      <div className='relative w-full flex overflow-x-scroll
      overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin
      scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
        {projects.map((project, i) => (
          <div
            key={project.id}
            className='w-screen flex-shrink-0 snap-center flex px-5 py-6
            flex-col space-y-4 items-center justify-center sm:px-10 md:px-16 lg:px-24 min-h-[80vh]'
          >
            <motion.img
              initial={{ y: 300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={project.img}
              alt={`Screenshot of ${project.title}`}
              className='w-full max-w-[280px] sm:max-w-[420px] md:max-w-[580px] xl:max-w-[720px] rounded-md shadow-lg'
            />
            <div className='space-y-3 md:space-y-4 w-full px-0 md:px-6 max-w-4xl'>
              <h4 className='text-xl sm:text-2xl md:text-3xl xl:text-4xl font-semibold text-center'>
                <span className='underline decoration-[#F7AB0A]/50'>
                  Case Study {i + 1} of {projects.length}:
                </span>{' '}
                {project.title}
              </h4>
              <p className='text-xs sm:text-sm text-gray-300 text-center'>
                <span className='font-semibold'>Tech:</span> {project.stack}
              </p>
              <p className='text-sm sm:text-base md:text-lg text-center md:text-left leading-relaxed'>
                {project.overview}
              </p>
              <ul className='text-sm sm:text-base text-gray-200 list-disc list-inside space-y-1'>
                {project.highlights.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
              {project.link ? (
                <a className='text-center block' href={project.link} target='_blank' rel='noopener noreferrer'>
                  <p className='pt-1 hover:text-blue-400/80 text-xs sm:text-sm md:text-base break-all'>
                    Live: {project.link}
                  </p>
                </a>
              ) : null}
            </div>
          </div>
        ))}
      </div>

      <div className='w-full absolute top-[36%] bg-[#F7AB0A]/10
      left-0 h-[200px] sm:h-[280px] md:h-[360px] -skew-y-12' />
    </motion.div>
  )
}
export default Projects
