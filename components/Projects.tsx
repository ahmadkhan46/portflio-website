'use client'

import React from 'react'
import { motion } from 'framer-motion'

const projects=[{
  id:1,
  img:'https://i.ibb.co/DQFXpRR/Screenshot-2023-11-04-002330.png',
  link:'https://netflix-clone-e9e10.web.app',
  overView:"This is a clone of Netflix website built using React.JS as a Front-end & Firebase as Back-end. It's not a replica, and it doesn't have all the features of Netflix website. it's a similar version of Netflix with my own design touch, showing my abilities in React.JS to build something advanced like Netflix. It contains the home page, sign-in page, sign-up page and browse page."  
},
{
  id:2,
  img:'https://i.ibb.co/RBQfPtQ/Screenshot-2023-11-03-082616.png',
  link:'https://trello-clone-ogk6pnjfc-ahmads-projects-5f486425.vercel.app/',
  overView:'This is a clone application for trello using headless UI. It has draggable features in which one can drag components from one table to another. It has also a search box which helps you to search your tasks It is a responsive website and works on phone as well.'
  },
]

function Projects() {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity:1 }}
    transition={{ duration: 1.5 }}
    className='relative h-screen flex flex-col overflow-hidden
    text-left md:flex-row justify-evenly mx-auto items-center z-0'>
      <h3 className='absolute uppercase text-gray-500 text-2xl
      top-24 tracking-[20px]'>
        Projects
      </h3>
      
      <div className='relative w-full flex overflow-x-scroll
      overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin
    scrollbar-track-gray-400/20 scrollbar-[#F7AB0A]/80'>
        {projects.map((project,i) => (
          <div key={project.id} className='w-screen flex-shrink-0 snap-center flex p-20 
          flex-col space-y-5 items-center justify-center md:p-44 h-screen'>
            <motion.img
            initial={{
              y: 300,
              opacity: 0
            }}
            transition={{ duration :1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true}}
            src={project.img}
            alt=''
            className='sm:w-[400px]  md:w-[600px] md:h-80 md:mt-20 xl:w-[760px] xl:h-[320px] xl:mt-20'
            />
            <div className='space-y-10 md:w-screen px-0 md:px-10 max-w-6xl'>
              <h4 className='text-4xl font-semibold text-center'>
                
                <span className='underline decoration-[#F7AB0A]/50'>
                  Case Study {i+1} of {projects.length}:
                </span>{' '}
                UPS clone
              </h4>
              <a className='text-center' href={project.link}
              target='_blank'>
                    <p className='pt-2 hover:text-blue-400/80 text-lg'>Link: {project.link}</p>
                </a>
              <p className='text-lg text-center md:text-leftl'>
                {project.overView}
              </p>
            </div>
          </div>
        ))}
        <div>

        </div>
      </div>

      <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10
      left-0 h-[400px] -skew-y-12'/>
    </motion.div>
  )
}

export default Projects