'use client'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useEffect } from 'react'

export const Projects = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const projectsTitle = document.querySelector('.projects-title')
    const projectsParent = document.querySelector('.projects-parent')

    const titleParent = document.querySelector('title-parent')
    const projectsContainer = document.querySelector('.projects-container')
    const projectTrigger = document.querySelectorAll('.project-trigger')
    gsap.fromTo(
      projectsTitle,
      { scale: 5, x: 0 },
      {
        scale: 1,
        x: 500,
        scrollTrigger: {
          trigger: projectsTitle,
          start: 'center 70%',
          end: 'center center',
          scrub: 1
        }
      }
    )
    gsap.to(projectsTitle, {
      scrollTrigger: {
        trigger: projectsContainer,
        pin: projectsTitle,
        start: 'top 30%',
        end: 'bottom bottom'
      }
    })
    gsap.to(projectsContainer, {
      scrollTrigger: {
        trigger: projectTrigger,
        pin: projectsContainer,
        start: 'top top',
        end: 'bottom bottom'
      }
    })

    console.log(projectTrigger)
    const triggers = gsap.utils.toArray('.project-trigger')
    triggers.forEach((trigger, index) => {
      const tl = gsap.timeline()
      tl.from(trigger, { x: 900, y: 100, opacity: 0, stagger: 0.2 })
      ScrollTrigger.create({
        trigger: projectsContainer,
        endTrigger: projectsContainer,
        animation: tl,
        scrub: 1,
        start: 'top 80%',
        end: 'bottom bottom'
      })
    })

    const fakeContainer = document.querySelector('.fake-container')
    gsap.to(fakeContainer, {
      scrollTrigger: {
        trigger: projectsContainer,
        pin: fakeContainer,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        markers: true
      }
    })
  }, [])
  return (
    <div className='projects-parent gap-10 h-full w-full bg-neutral-900 justify-center flex flex-col items-center p-10 overflow-hidden'>
      <h1 className='projects-title text-white mt-40 leading-none text-[150px]'>
        MY PROJECTS
      </h1>
      <div className='flex w-full'>
        <div className='projects-container flex flex-col flex-1 w-full gap-10'>
          <div className='project-trigger flex gap-2'>
            <h2 className='project-text text-2xl font-semibold'>PROJECT 1</h2>
          </div>

          <div className='project-trigger flex gap-2'>
            <h2 className='project-text text-2xl font-semibold'>PROJECT 2</h2>
          </div>
          <div className='project-trigger flex gap-2'>
            <h2 className='project-text text-2xl font-semibold'>PROJECT 3</h2>
          </div>
          <div className='project-trigger flex gap-2'>
            <h2 className='project-text text-2xl font-semibold'>PROJECT 4</h2>
          </div>
          <div className='project-trigger flex gap-2'>
            <h2 className='project-text text-2xl font-semibold'>PROJECT 5</h2>
          </div>
          <div className='project-trigger flex gap-2'>
            <h2 className='project-text text-2xl font-semibold'>PROJECT 6</h2>
          </div>
          <div className='project-trigger flex gap-2'>
            <h2 className='project-text text-2xl font-semibold'>PROJECT 7</h2>
          </div>
          <div className='project-trigger flex gap-2'>
            <h2 className='project-text text-2xl font-semibold'>PROJECT 8</h2>
          </div>
          <div className='project-trigger flex gap-2'>
            <h2 className='project-text text-2xl font-semibold'>PROJECT 9</h2>
          </div>
          <div className='project-trigger flex gap-2'>
            <h2 className='project-text text-2xl font-semibold'>PROJECT 10</h2>
          </div>
          <div className='project-trigger flex gap-2'>
            <h2 className='project-text text-2xl font-semibold'>PROJECT 11</h2>
          </div>

          <div className='project-trigger flex gap-2'>
            <h2 className='project-text text-2xl font-semibold'>PROJECT 12</h2>
          </div>
          <div className='project-trigger flex gap-2'>
            <h2 className='project-text text-2xl font-semibold'>PROJECT 13</h2>
          </div>
          <div className='project-trigger flex gap-2'>
            <h2 className='project-text text-2xl font-semibold'>PROJECT 14</h2>
          </div>
          <div className='project-trigger flex gap-2'>
            <h2 className='project-text text-2xl font-semibold'>PROJECT 15</h2>
          </div>
        </div>
        <div className='fake-container h-screen flex-1'></div>
      </div>
    </div>
  )
}
