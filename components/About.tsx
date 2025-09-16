'use client'

import React from 'react'
import { motion } from 'framer-motion'

function About() {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    transition={{ duration: 1.5 }}
    whileInView={{ opacity:1 }}
    className='flex flex-col relative h-screen text-center px-10 mx-auto
    md:text-left md:flex-row max-w-7xl justify-evenly items-center'
    >
        <h3 className='absolute top-24 uppercase tracking-[20px]
        text-2xl text-gray-500'>
            About
        </h3>
        
        <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, x: 0 }}
        src='https://i.ibb.co/TBjfyPLn/IMG-1939.jpg'
        className='-mb-20 md:mb-0 mt-12 flex-shrink-0 w-56 h-56 rounded-full
        object-cover md:rounded-lg  md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
        />

        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>
                Here is a{" "}
                <span className='underline decoration-[#F7AB0A]/50'>little</span>
                {" "}background
            </h4>
            <p className='text-base md:text-left'>
                <span className='text-gray-400'>I'm Ahmad Said Khan,</span><br/>
                MSc student in Software Design with AI with a strong foundation 
                in full-stack development, machine learning, and software engineering.
                Experienced in building web applications, APIs, and ML projects using
                React, JavaScript, Python, and SQL. 
                <br/><br/>
                
                I've always been passionate about learning new things,
                whether reading a book or watching a movie—I just can't
                get enough of it! My most extensive interests include
                programming and mathematics. There are parts of our
                lives that depend on computers. I want to be able
                to help make those parts better!
                <br/><br/>
                I’ve gotten a taste of teaching myself, I can’t stop. It’s
                advantageous, and I hope to learn more about the field as
                my career progresses.
            </p>
        </div>
    </motion.div>
  )
}

export default About;