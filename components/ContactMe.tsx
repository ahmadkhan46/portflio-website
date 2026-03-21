'use client'

import { PhoneIcon, EnvelopeIcon, HomeIcon } from '@heroicons/react/20/solid'
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { motion } from 'framer-motion'
import { useState } from 'react'

type Inputs = {
    name: string
    email: string
    subject: string
    message: string
}

function ContactMe() {
    const { register, handleSubmit, reset } = useForm<Inputs>()
    const [submitState, setSubmitState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

    const onSubmit: SubmitHandler<Inputs> = async (formData) => {
        setSubmitState('submitting')
        try {
            const response = await fetch('https://formsubmit.co/ajax/16897d30a25f58a2726959b63066bfe0', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    _subject: `Portfolio Contact: ${formData.subject}`,
                }),
            })

            if (!response.ok) {
                throw new Error('Submit failed')
            }

            setSubmitState('success')
            reset()
        } catch {
            setSubmitState('error')
        }
    }

    return (
        <motion.div
            initial={{ x: 200, opacity: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
            className='min-h-[100dvh] flex flex-col justify-center items-center text-center px-6 sm:px-10 md:px-20 pt-24 pb-12'
        >
            {/* Section Title */}
            <h3 className='text-xl md:text-2xl uppercase tracking-[10px] md:tracking-[20px] text-gray-500 mb-4 md:mb-8'>
                Contact Me
            </h3>

            {/* Heading */}
            <h4 className='text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 md:mb-10'>
                I have got what you need.{' '}
                <span className='decoration-[#F7AB0A]/50 underline'>Let's Talk.</span>
            </h4>

            {/* Contact Info */}
            <div className='flex flex-col md:flex-row md:space-x-10 space-y-4 md:space-y-0 mb-8 md:mb-10'>
                <div className='flex items-center space-x-3 md:space-x-5 justify-center'>
                    <PhoneIcon className='text-[#F7AB0A] h-6 md:h-7 w-6 md:w-7 animate-pulse' />
                    <p className='text-base sm:text-lg md:text-2xl'>+353-899830291</p>
                </div>
                <div className='flex items-center space-x-3 md:space-x-5 justify-center'>
                    <EnvelopeIcon className='text-[#F7BA0A] h-6 md:h-7 w-6 md:w-7 animate-pulse' />
                    <p className='text-base sm:text-lg md:text-2xl break-words'>ahmadsaidkhan46@gmail.com</p>
                </div>
                <div className='flex items-center space-x-3 md:space-x-5 justify-center'>
                    <HomeIcon className='text-[#F7BA0A] h-6 md:h-7 w-6 md:w-7 animate-pulse' />
                    <p className='text-base sm:text-lg md:text-2xl'>Athlone, Ireland</p>
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
                    rows={5}
                    className='contactInput resize-none'
                />
                <button
                    type='submit'
                    disabled={submitState === 'submitting'}
                    className='bg-[#F7AB0A] py-4 rounded-md text-black font-bold text-lg hover:scale-105 transition-transform duration-200'
                >
                    {submitState === 'submitting' ? 'Sending...' : 'Submit'}
                </button>
                {submitState === 'success' ? (
                    <p className='text-green-400 text-sm'>Message sent successfully.</p>
                ) : null}
                {submitState === 'error' ? (
                    <p className='text-red-400 text-sm'>Could not send your message. Please try again.</p>
                ) : null}
            </form>
        </motion.div>
    )
}

export default ContactMe
