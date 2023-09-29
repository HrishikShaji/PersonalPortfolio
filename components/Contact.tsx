'use client'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useEffect } from 'react'

export const Contact = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const contactContainer = document.querySelector('.contact-container')
    const inputContainer = document.querySelectorAll('.input-container')
    inputContainer.forEach((input) => {
      const line = input.querySelector('div')
      const inputText = input.querySelector('.inputs')

      gsap.fromTo(
        inputText,
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: input,
            start: 'top 70%',
            end: 'bottom 75%',
            scrub: 1
          }
        }
      )
      gsap.fromTo(
        line,
        { scaleX: 0 },
        {
          scaleX: 1,
          scrollTrigger: {
            trigger: input,
            start: 'top 70%',
            end: 'bottom 75%',
            scrub: 3
          }
        }
      )
    })
  }, [])
  return (
    <div className='contact-container h-full w-full bg-neutral-900 p-10 flex pb-40 gap-10 flex-col'>
      <h1 className='text-6xl sm:hidden'>CONTACT ME</h1>
      <form className='flex flex-col w-fukk  sm:w-[70%] gap-2 '>
        <div className='input-container'>
          <input
            className='inputs bg-transparent origin-left  p-2 w-full focus:outline-none'
            placeholder='Name...'
          />
          <div className='h-1 w-full bg-white origin-left' />
        </div>
        <div className='input-container'>
          <input
            className='inputs p-2 origin-left  bg-transparent w-full focus:outline-none'
            placeholder='Email...'
          />
          <div className='h-1 w-full bg-white origin-left' />
        </div>
        <div className='input-container'>
          <textarea
            className='inputs h-[100px] p-2 origin-left bg-transparent w-full focus:outline-none'
            placeholder='Message...'
          />
          <div className='h-1 w-full bg-white origin-left' />
        </div>
        <button className='p-2 bg-white text-black text-left'>SEND</button>
      </form>
    </div>
  )
}
