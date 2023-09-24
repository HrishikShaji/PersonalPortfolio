'use client'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useEffect } from 'react'

export const Skills = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const skills = document.querySelector('.skills')
    gsap.from(skills, {
      y: -200,
      x: 500,
      scrollTrigger: {
        trigger: skills,
        start: 'top top',
        end: 'bottom center',
        scrub: true
      }
    })
  }, [])
  return (
    <div className='h-screen w-full p-10 flex flex-col'>
      <h1 className='skills text-[150px]'>MY SKILLS</h1>
    </div>
  )
}
