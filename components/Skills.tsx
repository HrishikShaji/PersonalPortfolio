'use client'

import { trace } from 'console'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useEffect, useRef } from 'react'

export const Skills = () => {
  const targetRef = useRef(null)
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const skills = document.querySelector('.skills')

    const skillContainers = document.querySelector('.skillcontainer')
    const targetDiv = document.querySelector('.target-div')

    const leftContainer = document.querySelector('.left-side')
    const rightContainer = document.querySelector('.right-side')

    const leftSide = leftContainer?.querySelectorAll('h2')
    const rightSide = rightContainer?.querySelectorAll('h2')

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
          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: targetRef.current,
              start: 'top 75%',
              end: 'center center',
              scrub: 1
            }
          })

          timeline
            .fromTo(
              skills,
              {
                y: -1000,
                x: 500,
                opacity: 0
              },
              {
                y: -600,
                x: 500,
                opacity: 1
              }
            )
            .to(skills, { y: -600, x: 0 })
            .to(skills, { y: 0 })

          gsap.to(targetDiv, {
            scrollTrigger: {
              trigger: skillContainers,
              pin: targetDiv,
              start: 'top top',
              end: 'center top'
            }
          })

          leftSide?.forEach((item) => {
            const timeline = gsap.timeline({
              scrollTrigger: {
                trigger: item,
                start: 'top 40%',
                scrub: 1
              }
            })
            timeline.fromTo(item, { x: 70 }, { x: -60 })
          })

          rightSide?.forEach((item) => {
            const timeline = gsap.timeline({
              scrollTrigger: {
                trigger: item,
                start: 'top 40%',
                scrub: 1
              }
            })
            timeline.fromTo(item, { x: -70 }, { x: 60 })
          })
        }
      }
    )
  }, [])
  return (
    <div className='bg-neutral-900 w-full flex flex-col sm:flex-row p-10 gap-10 sm:gap-0'>
      <h1 className='text-6xl sm:hidden'>MY SKILLS</h1>
      <div className='flex w-full justify-between sm:justify-normal'>
        <div className='skillcontainer left-side sm:h-[200vh] w-[35%] flex flex-col sm:items-center justify-around'>
          <h2 className='font-semibold sm:text-3xl'>HTML</h2>
          <h2 className='font-semibold  sm:text-3xl'>CSS</h2>
          <h2 className='font-semibold sm:text-3xl'>JAVASCRIPT</h2>
          <h2 className='font-semibold  sm:text-3xl'>TYPECRIPT</h2>
          <h2 className='font-semibold  sm:text-3xl'>TAILWIND CSS</h2>
          <h2 className='font-semibold  sm:text-3xl'>GSAP</h2>
        </div>
        <div
          ref={targetRef}
          className='target-div h-screen w-[30%] hidden sm:flex justify-center items-end'
        >
          <h1 className='skills text-[150px]'>MY SKILLS</h1>
        </div>
        <div className='skillcontainer right-side sm:h-[200vh] w-[35%]  flex flex-col sm:items-center justify-around'>
          <h2 className='font-semibold  sm:text-3xl'>REACT JS</h2>
          <h2 className='font-semibold  sm:text-3xl'>NEXTJS</h2>
          <h2 className='font-semibold  sm:text-3xl'>EXPRESS JS</h2>
          <h2 className='font-semibold  sm:text-3xl'>NODE JS</h2>
          <h2 className='font-semibold  sm:text-3xl'>MONGODB</h2>
          <h2 className='font-semibold  sm:text-3xl'>FIREBASE</h2>
        </div>
      </div>
    </div>
  )
}
