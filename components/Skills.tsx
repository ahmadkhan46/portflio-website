'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'

const items = [
  { id: 1, img: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png', progress: 90 },
  { id: 2, img: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/233_Node_Js_logo-512.png', progress: 90 },
  { id: 3, img: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/typescript_original_logo_icon_146317.png', progress: 85 },
  { id: 4, img: 'https://cdn1.iconfinder.com/data/icons/akar-vol-1/24/nextjs-fill-256.png', progress: 80 },
  { id: 5, img: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-512.png', progress: 75 },
  { id: 6, img: 'https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-html-5-512.png', progress: 90 },
  { id: 7, img: 'https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-css-3-512.png', progress: 90 },
  { id: 8, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGEpRzlK3b4Eh-Dddp3gvO3LLyIaERE2yw4kPVAVM-MA&s', progress: 75 },
]

export default function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center items-center
                 md:text-left xl:flex-row max-w-[2000px] xl:px-10 justify-center xl:space-y-0 mx-auto"
    >
      <h3 className="absolute top-24 text-gray-500 text-2xl uppercase tracking-[20px]">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-sm text-gray-500">
        Hover over a skill for current proficiency
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-44">
        {items.slice(0, items.length / 2).map(item => (
          <Skill key={item.id} id={item.id} img={item.img} progress={item.progress} />
        ))}
        {items.slice(items.length / 2).map(item => (
          <Skill key={item.id} id={item.id} img={item.img} progress={item.progress} directionLeft />
        ))}
      </div>
    </motion.div>
  )
}