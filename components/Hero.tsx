'use client'

import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  const [text] = useTypewriter({
            words: [
              "Hi, I'm Ahmad Said Khan",
              "AI Engineer and Software Developer",
              "Building ML and AI solutions with measurable impact"
            ],
            loop:true,
            delaySpeed: 2500,
        })
  return (
    <div className='min-h-[100dvh] flex flex-col space-y-6 items-center
    justify-center text-center overflow-hidden px-4 pt-24 pb-12'>
      <BackgroundCircles />
      <Image
        src='/profile.jpg'
        alt='Profile image'
        width={130}
        height={130}
        className='relative mx-auto rounded-full object-cover w-[110px] h-[110px] sm:w-[130px] sm:h-[130px]'
      />
      <div className='z-20 max-w-4xl'>
        <h2 className='text-xs sm:text-sm uppercase text-gray-500 pb-2 tracking-[8px] sm:tracking-[15px]'>AI Engineer | Software Developer</h2>
        <h1 className='text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-semibold px-2 sm:px-10 min-h-[100px] sm:min-h-[130px] lg:min-h-[160px]'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#F7AB0A' />
        </h1>
        <p className='text-sm sm:text-base text-gray-300 max-w-2xl mx-auto mb-4'>
          Building intelligent and scalable applications using AI/ML, modern web technologies, and production-ready software engineering practices.
        </p>
        <div className='flex flex-wrap items-center justify-center gap-2 sm:gap-3'>
          <Link href='#about'>
          <button className='heroButton'>About</button>
          </Link>
          <Link href='#experience'>
          <button className='heroButton'>Experience</button>
          </Link>
          <Link href='#projects'>
          <button className='heroButton'>Projects</button>
          </Link>
          <Link href='#skills'>
          <button className='heroButton'>Skills</button>
          </Link>
          <Link href='#contact'>
            <button className='heroButton'>Contact Me</button>
          </Link>
          {/* <button></button> */}
        </div>
      </div>
      
    </div>
  )
}
