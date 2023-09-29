'use client'
import gsap from 'gsap'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

export const Hero = () => {
  const word = 'HRISHIK SHAJI'
  const splitWord = () => {
    return word.split('').map((letter, i) => (
      <div
        className='text-animate translate-y-[220px] transition transform duration-700'
        key={i}
      >
        {letter}
      </div>
    ))
  }

  useEffect(() => {
    gsap.to('.text-animate', {
      y: 0,
      stagger: 0.1,
      duration: 0.1,
      ease: 'bounce'
    })
    const staggers = document.querySelectorAll('h2')
    gsap.from(staggers, {
      opacity: 0,
      y: 20,
      delay: 1,
      ease: 'powerOne',
      duration: 0.7,
      stagger: 0.3
    })
  }, [])

  return (
    <div className='h-screen w-full bg-neutral-900 flex flex-col justify-center items-center'>
      <div className=' gap-10'>
        <h1 id='text' className='custom-clip text-6xl  sm:text-[300px] flex'>
          {splitWord()}
        </h1>
        <div className='font-semibold'>
          <h2>I'M A WEB DEVELOPER</h2>
          <h2>
            <Link
              href='https://github.com/HrishikShaji'
              className='z-50 cursor-pointer pointer-events-auto'
            >
              GITHUB
            </Link>
          </h2>
        </div>
      </div>
    </div>
  )
}
