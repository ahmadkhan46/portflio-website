'use client'

import React from 'react'
import { motion } from 'framer-motion'

type ExperienceItem = {
  id: number
  role: string
  company: string
  period: string
  location: string
  highlights: string[]
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: 'AI Engineer',
    company: 'Affy Clouds IT Solutions',
    period: 'Aug 2024 - Aug 2025',
    location: 'Bhopal, India',
    highlights: [
      'Built a Resume Parser using NLP and deep learning, reducing manual entry by 40% and improving processing speed by 3x.',
      'Developed an LLM-powered conversational chatbot with 85%+ intent recognition and 30% faster support response time.',
      'Applied Generative AI and RNNs for sequential modeling, improving prediction accuracy by 20%.',
      'Designed supervised ML models (classification, regression, clustering) with 90%+ test accuracy.',
    ],
  },
  {
    id: 2,
    role: 'AI Intern',
    company: 'Affy Clouds IT Solutions',
    period: 'Jul 2023 - Jul 2024',
    location: 'Bhopal, India',
    highlights: [
      'Built and fine-tuned supervised ML models across client datasets with up to 92% accuracy.',
      'Created end-to-end ML pipelines using Scikit-learn and Pandas, reducing processing time by 25%.',
      'Built visual analytics dashboards to improve stakeholder decision-making speed by 20%.',
      'Contributed to 3+ production-ready AI projects, improving reliability and deployment efficiency.',
    ],
  },
]

export default function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className='relative min-h-[100dvh] flex flex-col items-center justify-center px-6 sm:px-10 pt-24 pb-12'
    >
      <h3 className='uppercase tracking-[10px] md:tracking-[20px] text-xl md:text-2xl text-gray-500 mb-8'>
        Experience
      </h3>

      <div className='w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-6'>
        {experiences.map((item) => (
          <article
            key={item.id}
            className='rounded-xl border border-white/10 bg-white/5 p-5 sm:p-6'
          >
            <h4 className='text-xl sm:text-2xl font-semibold'>{item.role}</h4>
            <p className='text-[#F7AB0A] mt-1'>{item.company}</p>
            <p className='text-sm text-gray-400 mt-1'>{item.period} | {item.location}</p>

            <ul className='mt-4 space-y-2 text-sm sm:text-base text-gray-200 list-disc list-inside'>
              {item.highlights.map((line, index) => (
                <li key={index}>{line}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </motion.div>
  )
}

