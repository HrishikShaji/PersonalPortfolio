'use client'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useEffect } from 'react'
import SplitType from 'split-type'

export const About = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const splitTypes = document.querySelectorAll('.reveal-type')
    splitTypes.forEach((char, i) => {
      const text = new SplitType(char, { types: 'chars' })
      gsap.from(text.chars, {
        scrollTrigger: {
          trigger: char,
          start: 'top 50%',
          end: 'top 20%',
          scrub: true
        },
        opacity: 0.2,
        stagger: 0.5
      })
    })
    const about = document.querySelector('.about')
    gsap.from(about, {
      scrollTrigger: {
        trigger: about,
        start: 'top 70%',
        end: 'top 30%',
        scrub: true
      },
      opacity: 0.2,
      y: -250,
      x: 500
    })

    const customPin = document.querySelector('.custom-pin')
    gsap.to(customPin, {
      scrollTrigger: {
        trigger: splitTypes,
        pin: customPin,
        start: 'top center',
        end: 'bottom center',
        markers: true
      }
    })
  }, [])
  return (
    <div className='h-full w-full bg-neutral-900 p-10 pt-[300px] flex '>
      <div className='w-[30%]'>
        <div className='custom-pin'>
          <h1 className='about text-white text-[150px]'>ABOUT ME</h1>
        </div>
      </div>
      <div className='w-[70%] flex items-center pt-40'>
        <p className='reveal-type text-4xl font-semibold'>
          My name is Hrishik Shaji.I'm 23 years old.I'm from
          Thrissur,Kerala,India.I'm a son,a brother and a good friend for a
          handful of people. After 10th, i took computer science for plus two
          because i loved computers since i grew up playing computer games. As
          for my Degree i chose B.Sc Computer Science,unfortunately i failed
          some papers not the core subjects,but still i had to say goodbye to my
          degree.After leaving computers i tried jobs in other areas and had
          some success and some failures but nothing felt permanent.And then
          after few years i started learning programming, i attended a full
          stack Web development Bootcamp in Udemy,fortunately i completed it and
          it felt good to be back to the computer science.After that i have been
          teaching myself about programming,i learnt new languages and
          frameworks,implemented them in my projects and soon i was able to
          build working web apps,and i believe i am ready now to have a career
          in web development.For my future employers i only have this message:
          Each and Every Error that stood before me as an obstacle stands no
          more and i will remove them as long as i wish to.Also i am
          hardworking,willing to learn new technologies,exceptionally adaptive
          to all kinds of scenarios.
        </p>
      </div>
    </div>
  )
}
