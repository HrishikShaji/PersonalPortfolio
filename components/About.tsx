'use client'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useEffect } from 'react'
import SplitType from 'split-type'

export const About = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const text = new SplitType('.reveal-type', { types: 'lines, words' })
    gsap.from(text.words, {
      scrollTrigger: {
        trigger: text.words,
        start: 'top center',
        end: 'bottom top',
        scrub: 1
      },
      opacity: 0.2,
      stagger: 0.5
    })
    const about = document.querySelector('.about')

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: about,
        start: 'top 35%',
        end: 'top top',
        scrub: 2
      }
    })

    let mediaQuery = gsap.matchMedia()
    mediaQuery.add(
      {
        isMobile: '(max-width:640px)',
        isTablet: '(min-width:641px)',
        isDesktop: '(min-width:1024px)'
      },
      (context) => {
        let { isTablet, isMobile, isDesktop } =
          context?.conditions as gsap.Conditions

        if (isDesktop) {
          timeline
            .fromTo(about, { y: -550, x: 900 }, { y: -550, x: 0 })
            .to(about, { y: 0 })
        }
      }
    )

    const customPin = document.querySelector('.custom-pin')
    const revealParent = document.querySelector('.reveal-parent')
    gsap.to(customPin, {
      scrollTrigger: {
        trigger: revealParent,
        pin: customPin,
        start: 'top top',
        end: 'bottom bottom'
      }
    })
  }, [])
  return (
    <div className='h-full w-full bg-neutral-900 p-10 sm:pt-[300px] gap-10 sm:gap-0 flex sm:flex-row flex-col'>
      <div className='custom-pin sm:h-screen sm:w-[30%] flex  items-center'>
        <h1 className='about text-white text-6xl sm:text-[150px]'>ABOUT ME</h1>
      </div>
      <div className='reveal-parent w-full sm:w-[70%] flex items-center'>
        <p className='reveal-type  sm:text-4xl font-semibold'>
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
