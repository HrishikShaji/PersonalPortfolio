'use client'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { Fragment, useEffect, useRef } from 'react'

export const Timeline = () => {
  const targetRef = useRef(null)
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const sections = gsap.utils.toArray('.container')
    const targetContainer = document.querySelector('.target-container')

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
          gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: 'none',
            scrollTrigger: {
              trigger: targetContainer,
              pin: true,
              scrub: 1,
              end: '+=3000',
              markers: true
            }
          })
        }
      }
    )
  }, [])
  return (
    <div
      ref={targetRef}
      className='h-full sm:h-screen target-container w-full p-10 flex flex-col sm:flex-none gap-10 sm:gap-0  bg-neutral-900 overflow-x-hidden'
    >
      <h1 className='text-6xl sm:text-[150px] '>MY TIMELINE</h1>
      <div className='flex sm:w-[600vh] w-full  flex-col sm:flex-row gap-10 sm:gap-0'>
        <section className='container sm:p-20'>
          <div className='flex flex-col gap-2'>
            <h2 className='text-3xl'>SSLC</h2>
            <span className='text-xl '>2015</span>
            <p className='text-xl font-bold'>S.N.G.S.H.S.S Karamuck</p>
            <p>I passed SSLC with 98% marks and everything was going well.</p>
          </div>
        </section>
        <section className='container sm:p-20'>
          <div className='flex flex-col gap-2'>
            <h2 className='text-3xl'>PLUS TWO</h2>
            <span className='text-xl '>2017</span>
            <p className='text-xl font-bold'>S.N.G.S.H.S.S Karamuck</p>
            <p>
              Took computer science for higher secondary because computers felt
              easy and natural to me.But also took in some bad habbits during
              this period and that reflected in the exams.Passed plus two with
              78% marks.
            </p>
          </div>
        </section>
        <section className='container sm:p-20'>
          <div className='flex flex-col gap-2'>
            <h2 className='text-3xl'>B.Sc Computer Science</h2>
            <span className='text-xl '>2020</span>
            <p className='text-xl font-bold'>
              College of Applied Sciences (IHRD) ,Kodungallur
            </p>
            <p>
              This is where i started spiraling down and all interests in
              everything was gone.I was free falling through time and didn't
              realize what's happening around me.Failed many papers,tried hard
              in the last moments but by then it was too late.I had to say
              goodbye to the degree.
            </p>
          </div>
        </section>

        <section className='container sm:p-20'>
          <div className='flex flex-col gap-2'>
            <h2 className='text-3xl'>CCNA & RHCE Internship</h2>
            <span className='text-xl '>2021</span>
            <p className='text-xl font-bold'>Inet Info-Tech</p>
            <p>
              At this point in time i didn't know what to do or where to go i
              took courses in CCNA & RHCE and did internships in them but
              without any real passion or inspiration.And it felt unnatural,so i
              left the internship too.
            </p>
          </div>
        </section>
        <section className='container sm:p-20'>
          <div className='flex flex-col gap-2'>
            <h2 className='text-3xl'>Full Stack Web Development</h2>
            <span className='text-xl '>2023</span>
            <p className='text-xl font-bold'>Udemy</p>
            <p>
              Now this is what i would call the turning point of my life.I
              enrolled in a online coding bootcamp in udemy and started learning
              web development.This was a fresh start and a new direction for
              me,coding felt hard some times but always was interesting and i
              was glued to the system non stop until the errors disappeared.The
              bootcamp gave me a glimpse of the programming world.After the
              bootcamp i have been sharpening my skillsets with various new
              technologies and programming languages.I can now see coding is
              where my future belongs.{' '}
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
