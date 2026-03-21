'use client'

import React from 'react'
import { motion } from 'framer-motion'

function About() {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    transition={{ duration: 1.5 }}
    whileInView={{ opacity:1 }}
    className='flex flex-col relative min-h-[100dvh] text-center px-6 sm:px-10 pt-24 pb-12 mx-auto
    md:text-left md:flex-row max-w-7xl justify-center md:justify-evenly items-center gap-8'
    >
        <h3 className='absolute top-24 left-1/2 -translate-x-1/2 uppercase tracking-[10px] md:tracking-[20px]
        text-xl md:text-2xl text-gray-500 w-full text-center'>
            About
        </h3>
        
        <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, x: 0 }}
        src='https://i.ibb.co/TBjfyPLn/IMG-1939.jpg'
        className='mt-2 md:mt-10 flex-shrink-0 w-40 h-40 sm:w-56 sm:h-56 rounded-full
        object-cover md:rounded-lg md:w-72 md:h-80 xl:w-[420px] xl:h-[520px]'
        />

        <div className='space-y-6 sm:space-y-8 px-0 md:px-10 max-w-2xl'>
            <h4 className='text-2xl sm:text-3xl xl:text-4xl font-semibold'>
                Professional{" "}
                <span className='underline decoration-[#F7AB0A]/50'>summary</span>
            </h4>
            <p className='text-sm sm:text-base leading-relaxed md:text-left'>
                <span className='text-gray-400'>I'm Ahmad Said Khan,</span><br/>
                an AI and software engineer with proven experience in building intelligent applications,
                machine learning models, and scalable web solutions.
                <br/><br/>
                
                I focus on delivering production-ready systems that improve workflow speed, model performance,
                and decision quality. My background includes end-to-end ML pipelines, NLP and LLM applications,
                and full-stack product development.
                <br/><br/>
                I am currently pursuing an MSc in Software Design with Artificial Intelligence at
                Technological University of the Shannon, Ireland, after completing a B.Tech in Computer Science
                and Engineering. I enjoy solving practical business problems with AI-driven solutions.
            </p>
        </div>
    </motion.div>
  )
}

export default About;
