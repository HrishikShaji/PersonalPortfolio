'use client'

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
          y: -600,
          x: 500,
          opacity: 0
        },
        {
          y: -400,
          x: 500,
          opacity: 1
        }
      )
      .to(skills, { y: -350, x: 0 })
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
  }, [])
  return (
    <div className='bg-neutral-900 w-full flex'>
      <div className='skillcontainer h-[200vh] w-[35%] flex flex-col items-center justify-around'>
        <div className='bg-teal-500 rounded-md h-10 w-40'></div>
        <div className='bg-teal-500 rounded-md h-10 w-40'></div>
        <div className='bg-teal-500 rounded-md h-10 w-40'></div>
        <div className='bg-teal-500 rounded-md h-10 w-40'></div>
        <div className='bg-teal-500 rounded-md h-10 w-40'></div>
        <div className='bg-teal-500 rounded-md h-10 w-40'></div>
      </div>
      <div
        ref={targetRef}
        className='target-div h-screen w-[30%]  flex justify-center items-center'
      >
        <h1 className='skills text-[150px]'>MY SKILLS</h1>
      </div>
      <div className='skillcontainer h-[200vh] w-[35%]  flex flex-col items-center justify-around'>
        <div className='bg-teal-500 rounded-md h-10 w-40'></div>
        <div className='bg-teal-500 rounded-md h-10 w-40'></div>
        <div className='bg-teal-500 rounded-md h-10 w-40'></div>
        <div className='bg-teal-500 rounded-md h-10 w-40'></div>
        <div className='bg-teal-500 rounded-md h-10 w-40'></div>
        <div className='bg-teal-500 rounded-md h-10 w-40'></div>
      </div>
    </div>
  )
}
