'use client'

import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Image from 'next/image'
import Link from 'next/link'

function Hero() {
  const [text, cursor] = useTypewriter({
            words: [
              "Hi, the name's Ahmad",
              "A person who enjoys coding"
            ],
            loop:true,
            delaySpeed: 2500,
        })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center
    justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <Image
        src='https://i.ibb.co/q01GBFs/profile.jpg'
        alt='Profile image'
        width={130}
        height={100}
        style={{
          position: 'relative', marginLeft: 'auto', borderRadius:'50%',
          marginRight: 'auto', objectFit:'cover'
        }}
      />
      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Software Engineer</h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#F7AB0A' />
        </h1>
        <div>
          <Link href='#about'>
          <button className='heroButton'>About</button>
          </Link>
          <Link href='#projects'>
          <button className='heroButton'>Projects</button>
          </Link>
          <Link href='#skills'>
          <button className='heroButton'>Skills</button>
          </Link>
          <Link href={'contact'}>
            <button className='heroButton'>Contact Me</button>
          </Link>
          {/* <button></button> */}
        </div>
      </div>
      
    </div>
  )
}

export default Hero