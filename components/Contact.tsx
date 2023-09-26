'use client'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useEffect } from 'react'

export const Contact = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const inputs = document.querySelectorAll('.inputs')
    const contactContainer = document.querySelector('.contact-container')
    gsap.from(inputs, {
      scaleY: 0,
      scrollTrigger: {
        trigger: contactContainer,
        start: 'top 99%',
        markers: true
      }
    })
  }, [])
  return (
    <div className='contact-container h-full w-full bg-neutral-900 p-10 flex flex-col'>
      <form className='flex flex-col w-[70%] gap-2'>
        <input
          className='inputs bg-transparent p-2 border-b-2 border-white'
          placeholder='Name...'
        />
        <input
          className='inputs p-2 border-b-2 bg-transparent border-white'
          placeholder='Email...'
        />
        <textarea
          className='inputs h-[100px] p-2 border-b-2 bg-transparent border-white'
          placeholder='Message...'
        />
        <button className='p-2 bg-white text-black text-left'>SEND</button>
      </form>
    </div>
  )
}
