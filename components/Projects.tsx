'use client'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useEffect } from 'react'

export const Projects = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const triggers = gsap.utils.toArray('.project-trigger')
    const fakeContainer = document.querySelector('.fake-container')
    const projectsTitle = document.querySelector('.projects-title')
    const projectsContainer = document.querySelector('.projects-container')
    const projectTrigger = document.querySelectorAll('.project-trigger')

    let mediaQuery = gsap.matchMedia()
    mediaQuery.add(
      {
        isMobile: '(max-width:640px)',
        isTablet: '(min-width:641px)',
        isDesktop: '(min-width:1024px)'
      },
      (context) => {
        let { isTablet, isMobile, isDesktop } = context?.conditions

        if (isDesktop) {
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

          triggers.forEach((trigger) => {
            gsap.from(trigger as HTMLElement, {
              x: 900,
              y: 100,
              opacity: 0,
              scrollTrigger: {
                trigger: trigger as HTMLElement,
                scrub: 1,
                start: 'top 80%',
                end: 'bottom 50%'
              }
            })
          })

          gsap.to(fakeContainer, {
            scrollTrigger: {
              trigger: projectsContainer,
              pin: fakeContainer,
              start: 'top top',
              end: 'bottom bottom',
              scrub: 1
            }
          })
        }
      }
    )
  }, [])
  return (
    <div className='projects-parent gap-10 h-full w-full bg-neutral-900 flex flex-col sm:items-center p-10 overflow-hidden'>
      <h1 className='projects-title text-white sm:mt-40 leading-none text-6xl sm:text-[150px]'>
        MY PROJECTS
      </h1>
      <div className='flex w-full'>
        <div className='projects-container h-[200vh] flex flex-col flex-1 w-full gap-10'>
          <div className='project-trigger flex gap-2 border-b-2 border-white'>
            <h2 className='project-text text-2xl font-semibold'>PROJECT 1</h2>
          </div>

          <div className='project-trigger flex gap-2 border-b-2 border-white'>
            <h2 className='project-text text-2xl font-semibold'>PROJECT 2</h2>
          </div>
          <div className='project-trigger flex gap-2 border-b-2 border-white'>
            <h2 className='project-text text-2xl font-semibold'>PROJECT 3</h2>
          </div>
          <div className='project-trigger flex gap-2 border-b-2 border-white'>
            <h2 className='project-text text-2xl font-semibold'>PROJECT 4</h2>
          </div>
          <div className='project-trigger flex gap-2 border-b-2 border-white'>
            <h2 className='project-text text-2xl font-semibold'>PROJECT 5</h2>
          </div>
          <div className='project-trigger flex gap-2 border-b-2 border-white'>
            <h2 className='project-text text-2xl font-semibold'>PROJECT 6</h2>
          </div>
          <div className='project-trigger flex gap-2 border-b-2 border-white'>
            <h2 className='project-text text-2xl font-semibold'>PROJECT 7</h2>
          </div>
          <div className='project-trigger flex gap-2 border-b-2 border-white'>
            <h2 className='project-text text-2xl font-semibold'>PROJECT 8</h2>
          </div>
          <div className='project-trigger flex gap-2 border-b-2 border-white'>
            <h2 className='project-text text-2xl font-semibold'>PROJECT 9</h2>
          </div>
          <div className='project-trigger flex gap-2 border-b-2 border-white'>
            <h2 className='project-text text-2xl font-semibold'>PROJECT 10</h2>
          </div>
          <div className='project-trigger flex gap-2 border-b-2 border-white'>
            <h2 className='project-text text-2xl font-semibold'>PROJECT 11</h2>
          </div>
          <div className='project-trigger flex gap-2 border-b-2 border-white'>
            <h2 className='project-text text-2xl font-semibold'>PROJECT 12</h2>
          </div>
          <div className='project-trigger flex gap-2 border-b-2 border-white'>
            <h2 className='project-text text-2xl font-semibold'>PROJECT 13</h2>
          </div>
          <div className='project-trigger flex gap-2 border-b-2 border-white'>
            <h2 className='project-text text-2xl font-semibold'>PROJECT 14</h2>
          </div>
          <div className='project-trigger flex gap-2 border-b-2 border-white'>
            <h2 className='project-text text-2xl font-semibold'>PROJECT 15</h2>
          </div>
          <h1 className='text-[150px] hidden sm:block'>
            LIKE WHAT YOU SEE?CONTACT ME
          </h1>
        </div>
        <div className='fake-container h-screen flex-1'></div>
      </div>
    </div>
  )
}
