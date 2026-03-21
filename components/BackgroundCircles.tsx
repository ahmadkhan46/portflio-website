import React from 'react'
import { motion } from 'framer-motion'

function BackgroundCircles() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ['20%', '20%', '50%', '80%', '20%'],
      }}
      transition={{ duration: 2.5 }}
      className='relative flex justify-center items-center'
    >
      <div className='absolute border border-[#333333] rounded-full h-[140px] w-[140px] sm:h-[180px] sm:w-[180px] md:h-[200px] md:w-[200px] mt-40 sm:mt-48 md:mt-52 animate-ping' />
      <div className='rounded-full border border-[#464646] h-[220px] w-[220px] sm:h-[270px] sm:w-[270px] md:h-[300px] md:w-[300px] absolute mt-40 sm:mt-48 md:mt-52' />
      <div className='rounded-full border border-[#333333] h-[340px] w-[340px] sm:h-[460px] sm:w-[460px] md:h-[500px] md:w-[500px] absolute mt-40 sm:mt-48 md:mt-52' />
      <div className='rounded-full border border-[#F7AB0A] opacity-5 h-[460px] w-[460px] sm:h-[590px] sm:w-[590px] md:h-[650px] md:w-[650px] absolute mt-40 sm:mt-48 md:mt-52 animate-pulse' />
      <div className='rounded-full border border-[#333333] h-[560px] w-[560px] sm:h-[740px] sm:w-[740px] md:h-[800px] md:w-[800px] absolute mt-40 sm:mt-48 md:mt-52' />
    </motion.div>
  )
}

export default BackgroundCircles
