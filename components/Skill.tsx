'use client'

import { motion } from 'framer-motion'
import React from 'react'

type Props = {
  id: number
  name: string
  img: string
  progress: number
  directionLeft?: boolean
}

export function Skill({ directionLeft, img, name, progress }: Props) {
  return (
    <div className="relative group flex cursor-pointer">
      <motion.img
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        src={img}
        alt={name}
        className="rounded-full border border-gray-500 object-cover
                   w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24
                   filter group-hover:grayscale transition duration-300 ease-in-out"
      />

      <div className="absolute opacity-0 hover:opacity-80 transition
                      duration-300 ease-in-out group-hover:bg-white
                      w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24
                      rounded-full z-0 flex flex-col items-center justify-center">
        <p className="text-[9px] sm:text-[10px] md:text-xs font-semibold text-black leading-tight px-1">{name}</p>
        <p className="text-sm sm:text-lg md:text-xl font-bold text-black">{progress}%</p>
      </div>
    </div>
  )
}
export default Skill;
