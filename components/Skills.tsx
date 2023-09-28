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

    const skillContainers = document.querySelector('.skillcontainer')
    const targetDiv = document.querySelector('.target-div')
    gsap.to(targetDiv, {
      scrollTrigger: {
        trigger: skillContainers,
        pin: targetDiv,
        start: 'top top',
        end: 'center top'
      }
    })
    const leftContainer = document.querySelector('.left-side')
    const rightContainer = document.querySelector('.right-side')

    const leftSide = leftContainer?.querySelectorAll('h2')
    const rightSide = rightContainer?.querySelectorAll('h2')

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
  }, [])
  return (
    <div className='bg-neutral-900 w-full flex'>
      <h1 className='text-6xl'>MY SKILLS</h1>
      <div className='sm:skillcontainer sm:left-side h-[200vh] w-[35%] flex flex-col items-center justify-around'>
        <h2 className='font-semibold text-3xl'>HTML</h2>
        <h2 className='font-semibold text-3xl'>CSS</h2>
        <h2 className='font-semibold text-3xl'>JAVASCRIPT</h2>
        <h2 className='font-semibold text-3xl'>TYPECRIPT</h2>
        <h2 className='font-semibold text-3xl'>TAILWIND CSS</h2>
        <h2 className='font-semibold text-3xl'>GSAP</h2>
      </div>
      <div
        ref={targetRef}
        className='sm:target-div h-screen w-[30%] hidden sm:block  flex justify-center items-end'
      >
        <h1 className='sm:skills text-[150px]'>MY SKILLS</h1>
      </div>
      <div className='sm:skillcontainer sm:right-side h-[200vh] w-[35%]  flex flex-col items-center justify-around'>
        <h2 className='font-semibold text-3xl'>REACT JS</h2>
        <h2 className='font-semibold text-3xl'>NEXTJS</h2>
        <h2 className='font-semibold text-3xl'>EXPRESS JS</h2>
        <h2 className='font-semibold text-3xl'>NODE JS</h2>
        <h2 className='font-semibold text-3xl'>MONGODB</h2>
        <h2 className='font-semibold text-3xl'>FIREBASE</h2>
      </div>
    </div>
  )
}
