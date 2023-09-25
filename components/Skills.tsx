'use client'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useEffect, useRef } from 'react'

export const Skills = () => {
  const targetRef = useRef(null)
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const skills = document.querySelector('.skills')
    gsap.fromTo(
      skills,
      {
        y: -550,
        x: 300,
        opacity: 0.3,
        scale: 0.1
      },
      {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        scrollTrigger: {
          trigger: targetRef.current,
          start: 'top 75%',
          end: 'center center',
          scrub: true
        }
      }
    )
    const skillContainers = document.querySelector('.skillcontainer')
    const targetDiv = document.querySelector('.target-div')
    gsap.to(targetDiv, {
      scrollTrigger: {
        trigger: skillContainers,
        pin: targetDiv,
        start: 'top top',
        end: 'center top',

        markers: true
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
