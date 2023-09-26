'use client'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useEffect } from 'react'

export const Projects = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const projectsTitle = document.querySelector('.projects-title')
    const projectsParent = document.querySelector('.projects-parent')

    const projectTrigger = document.querySelectorAll('.project-trigger')
    gsap.from(projectsTitle, {
      scale: 5,
      scrollTrigger: {
        trigger: projectsParent,
        start: 'top 70%',
        end: 'center center',
        scrub: true
      }
    })
    gsap.to(projectsParent, {
      scrollTrigger: {
        trigger: projectsParent,
        pin: projectsParent,
        scrub: 1,
        start: 'top top',
        markers: true
      }
    })

    console.log(projectTrigger)
    const triggers = gsap.utils.toArray('.project-trigger')
    triggers.forEach((trigger, index) => {
      const tl = gsap.timeline()
      tl.from(trigger, { x: 300, y: 100 })
      ScrollTrigger.create({
        trigger: trigger,
        animation: tl,
        markers: true,
        scrub: 1,
        start: 'top 80%',
        end: 'bottom end'
      })
    })
  }, [])
  return (
    <div className='projects-parent gap-10 h-full w-full bg-neutral-900 justify-center flex flex-col items-center p-10 overflow-hidden'>
      <h1 className='projects-title text-white leading-none text-[150px]'>
        MY PROJECTS
      </h1>
      <div className='flex flex-col w-full gap-4'>
        <div className='project-trigger flex gap-2'>
          <h2 className='project-text text-2xl font-semibold'>PROJECT 1</h2>
        </div>

        <div className='project-trigger flex gap-2'>
          <h2 className='project-text text-2xl font-semibold'>PROJECT 1</h2>
        </div>
        <div className='project-trigger flex gap-2'>
          <h2 className='project-text text-2xl font-semibold'>PROJECT 1</h2>
        </div>
        <div className='project-trigger flex gap-2'>
          <h2 className='project-text text-2xl font-semibold'>PROJECT 1</h2>
        </div>
        <div className='project-trigger flex gap-2'>
          <h2 className='project-text text-2xl font-semibold'>PROJECT 1</h2>
        </div>
        <div className='project-trigger flex gap-2'>
          <h2 className='project-text text-2xl font-semibold'>PROJECT 1</h2>
        </div>
        <div className='project-trigger flex gap-2'>
          <h2 className='project-text text-2xl font-semibold'>PROJECT 1</h2>
        </div>
        <div className='project-trigger flex gap-2'>
          <h2 className='project-text text-2xl font-semibold'>PROJECT 1</h2>
        </div>
        <div className='project-trigger flex gap-2'>
          <h2 className='project-text text-2xl font-semibold'>PROJECT 1</h2>
        </div>
        <div className='project-trigger flex gap-2'>
          <h2 className='project-text text-2xl font-semibold'>PROJECT 1</h2>
        </div>
      </div>
    </div>
  )
}
