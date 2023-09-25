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
    gsap.utils.toArray('.project-trigger').forEach((trigger) => {
      gsap.to(trigger, {
        x: 300,
        stagger: 0.5,
        scrollTrigger: {
          trigger: trigger,
          scrub: true
        }
      })
      gsap.to(trigger, {
        y: -100,
        stagger: 0.5,
        scrollTrigger: {
          trigger: trigger,
          scrub: true
        }
      })
    })
  }, [])
  return (
    <div className='projects-parent gap-40 h-full w-full bg-neutral-900 justify-center flex flex-col items-center p-10 overflow-hidden'>
      <h1 className='projects-title text-white leading-none text-[150px]'>
        MY PROJECTS
      </h1>
      <div className='flex flex-col gap-4'>
        <div className='project-trigger flex gap-2'>
          <h2 className='project-text'>PROJECT</h2>
          <div className='project-image h-20 w-20 bg-neutral-600 rounded-md'></div>
        </div>
        <div className='project-trigger flex gap-2'>
          <h2 className='project-text'>PROJECT</h2>
          <div className='project-image h-20 w-20 bg-neutral-600 rounded-md'></div>
        </div>
        <div className='project-trigger flex gap-2'>
          <h2 className='project-text'>PROJECT</h2>
          <div className='project-image h-20 w-20 bg-neutral-600 rounded-md'></div>
        </div>
        <div className='project-trigger flex gap-2'>
          <h2 className='project-text'>PROJECT</h2>
          <div className='project-image h-20 w-20 bg-neutral-600 rounded-md'></div>
        </div>
        <div className='project-trigger flex gap-2'>
          <h2 className='project-text'>PROJECT</h2>
          <div className='project-image h-20 w-20 bg-neutral-600 rounded-md'></div>
        </div>
        <div className='project-trigger flex gap-2'>
          <h2 className='project-text'>PROJECT</h2>
          <div className='project-image h-20 w-20 bg-neutral-600 rounded-md'></div>
        </div>
      </div>
    </div>
  )
}
