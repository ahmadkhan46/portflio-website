'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'

const items = [
  { id: 1, name: 'Python', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', progress: 90 },
  { id: 2, name: 'JavaScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', progress: 88 },
  { id: 3, name: 'Java', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', progress: 82 },
  { id: 4, name: 'SQL', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', progress: 85 },
  { id: 5, name: 'React.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', progress: 90 },
  { id: 6, name: 'Next.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', progress: 85 },
  { id: 7, name: 'Node.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', progress: 84 },
  { id: 8, name: 'TensorFlow', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', progress: 82 },
  { id: 9, name: 'PyTorch', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg', progress: 80 },
  { id: 10, name: 'MongoDB', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', progress: 82 },
  { id: 11, name: 'Docker', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', progress: 75 },
  { id: 12, name: 'AWS', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', progress: 70 },
]

export default function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative min-h-[100dvh] text-center items-center
                 pt-24 pb-12 px-4 md:px-8 max-w-6xl justify-center mx-auto"
    >
      <h3 className="text-gray-500 text-xl md:text-2xl uppercase tracking-[10px] md:tracking-[20px]">
        Skills
      </h3>

      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5 md:gap-7 mt-8">
        {items.slice(0, items.length / 2).map(item => (
          <Skill key={item.id} id={item.id} name={item.name} img={item.img} progress={item.progress} />
        ))}
        {items.slice(items.length / 2).map(item => (
          <Skill key={item.id} id={item.id} name={item.name} img={item.img} progress={item.progress} directionLeft />
        ))}
      </div>
    </motion.div>
  )
}
