<<<<<<< HEAD
'use client'

import { PhoneIcon, EnvelopeIcon, HomeIcon } from '@heroicons/react/20/solid'
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { motion } from 'framer-motion'

type Inputs = {
    name: string
    email: string
    subject: string
    message: string
  }
  
function ContactMe() {
    const { register, handleSubmit } = useForm<Inputs>()
    
    const onSubmit: SubmitHandler<Inputs> = (formData) =>{
        window.location.href = `mailto:ahmadkhan178012@gmail.com?subject=
        ${formData.subject}
        &body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
    }

  return (
    
    <motion.div
    initial={{ x: 200, opacity: 0 }}
    transition={{ duration: 1.2 }}
    viewport={{ once: true }}
    whileInView={{ opacity: 1, x: 0 }} 
    className='h-screen flex flex-col relative text-center
    justify-evenly items-center md:flex-row max-w-7xl px-10'>
        <h3 className='absolute text-2xl uppercase tracking-[20px]
        text-gray-500 top-24'>
            Contact Me
        </h3>

        <div className='flex flex-col space-y-10 absolute top-36'>
            <h4 className='text-4xl font-semibold  text-center'>
                I have got what you need.{' '}
                <span className='decoration-[#F7Ab0A]/50 underline'>
                    Let's Talk.    
                </span>        
            </h4>

            <div className='space-y-2 '>
{/*'flex flex-col gap-y-5 items-start text-left' */}
                <div className=' flex items-center space-x-5 justify-center'>
                    <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                    <p className='text-2xl'>7040385410</p>
                </div>
                <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className='text-[#F7BA0A] h-7 w-7 animate-pulse' />
                    <p className='text-2xl'>ahmadkhan178012@gmail.com</p>
                </div>
                <div className='flex items-center justify-center space-x-5'>
                    <HomeIcon className='text-[#F7BA0A] h-7 w-7 animate-pulse' />
                    <p className='text-2xl'>Madhy Pradesh, India</p>
                </div>
            </div>


            <form 
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col space-y-4 w-fit mx-auto'>
                <div className='space-x-5'>
                    <input {...register('name')}
                        placeholder='Name'
                        className='contactInput'
                        type='text'
                    />
                    <input {...register('email')}
                        placeholder='Email'
                        className='contactInput'
                        type='email'
                    />
                </div>

                <input {...register('subject')}
                    placeholder='Subject'
                    className='contactInput'
                    type='text'
                />
                <textarea {...register('message')}
                    placeholder='Message'
                    className='contactInput'
                />
                <button
                    type='submit'
                    className='bg-[#F7AB0A] py-5 rounded-md text-black
                    font-bold text-lg'
                    >
                    Submit
                </button>
            </form>
        </div>
    </motion.div>
  )
}

=======
'use client'

import { PhoneIcon, EnvelopeIcon, HomeIcon } from '@heroicons/react/20/solid'
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { motion } from 'framer-motion'

type Inputs = {
    name: string
    email: string
    subject: string
    message: string
  }
  
function ContactMe() {
    const { register, handleSubmit } = useForm<Inputs>()
    
    const onSubmit: SubmitHandler<Inputs> = (formData) =>{
        window.location.href = `mailto:ahmadkhan178012@gmail.com?subject=
        ${formData.subject}
        &body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
    }

  return (
    
    <motion.div
    initial={{ x: 200, opacity: 0 }}
    transition={{ duration: 1.2 }}
    viewport={{ once: true }}
    whileInView={{ opacity: 1, x: 0 }}
    className='min-h-screen flex flex-col justify-center items-center text-center px-6 md:px-20'
>
    {/* Section Title */}
    <h3 className='text-2xl uppercase tracking-[20px] text-gray-500 mb-6 md:mb-8'>
        Contact Me
    </h3>

    {/* Heading */}
    <h4 className='text-3xl md:text-4xl font-semibold mb-8 md:mb-10'>
        I have got what you need.{' '}
        <span className='decoration-[#F7AB0A]/50 underline'>Let's Talk.</span>
    </h4>

    {/* Contact Info */}
    <div className='flex flex-col md:flex-row md:space-x-12 space-y-6 md:space-y-0 mb-10'>
        <div className='flex items-center space-x-3 md:space-x-5 justify-center'>
            <PhoneIcon className='text-[#F7AB0A] h-6 md:h-7 w-6 md:w-7 animate-pulse' />
            <p className='text-lg md:text-2xl'>+353-899830291</p>
        </div>
        <div className='flex items-center space-x-3 md:space-x-5 justify-center'>
            <EnvelopeIcon className='text-[#F7BA0A] h-6 md:h-7 w-6 md:w-7 animate-pulse' />
            <p className='text-lg md:text-2xl'>ahmadsaidkhan46@gmail.com</p>
        </div>
        <div className='flex items-center space-x-3 md:space-x-5 justify-center'>
            <HomeIcon className='text-[#F7BA0A] h-6 md:h-7 w-6 md:w-7 animate-pulse' />
            <p className='text-lg md:text-2xl'>Athlone, Ireland</p>
        </div>
    </div>

    {/* Contact Form */}
    <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col space-y-4 w-full max-w-lg mx-auto'
    >
        <div className='flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0'>
            <input
                {...register('name')}
                placeholder='Name'
                className='contactInput flex-1'
                type='text'
            />
            <input
                {...register('email')}
                placeholder='Email'
                className='contactInput flex-1'
                type='email'
            />
        </div>

        <input
            {...register('subject')}
            placeholder='Subject'
            className='contactInput'
            type='text'
        />
        <textarea
            {...register('message')}
            placeholder='Message'
            className='contactInput'
        />
        <button
            type='submit'
            className='bg-[#F7AB0A] py-4 rounded-md text-black font-bold text-lg hover:scale-105 transition-transform duration-200'
        >
            Submit
        </button>
    </form>
</motion.div>
  )
}

>>>>>>> 03a6df1 (Update project for redeploy)
export default ContactMe