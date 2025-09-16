'use client'

import { motion } from 'framer-motion'
import React from 'react'

type Props = {
  id: number
  img: string
  progress: number
  directionLeft?: boolean
}

export function Skill({ directionLeft, img, id, progress }: Props) {
  return (
    <div className="relative group flex cursor-pointer">
      <motion.img
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        src={img}
        alt={`Skill ${id}`}
        className="rounded-full border border-gray-500 object-cover
                   w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32
                   filter group-hover:grayscale transition duration-300 ease-in-out"
      />

      <div className="absolute opacity-0 hover:opacity-80 transition
                      duration-300 ease-in-out group-hover:bg-white
                      h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32
                      rounded-full z-0 flex items-center justify-center">
        <p className="text-3xl font-bold text-black">{progress}%</p>
      </div>
    </div>
  )
}
export default Skill;