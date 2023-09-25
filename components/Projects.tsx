'use client'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useEffect } from 'react'

export const Projects = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const projectsTitle = document.querySelector('.projects-title')
    const projectsParent = document.querySelector('.projects-parent')
    gsap.from(projectsTitle, {
      scale: 5,
      scrollTrigger: {
        trigger: projectsParent,
        start: 'top 70%',
        markers: true,
        scrub: true
      }
    })
  }, [])
  return (
    <div className='projects-parent h-screen w-full bg-neutral-900 justify-center flex flex-col items-center p-10 overflow-hidden'>
      <h1 className='projects-title text-white leading-none text-[150px]'>
        MY PROJECTS
      </h1>
    </div>
  )
}
