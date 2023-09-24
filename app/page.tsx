'use client'

import { About } from '@/components/About'
import { Contact } from '@/components/Contact'
import { Hero } from '@/components/Hero'
import { Projects } from '@/components/Projects'
import { Skills } from '@/components/Skills'
import { Timeline } from '@/components/Timeline'
import { useEffect } from 'react'
import { LocomotiveScroll } from 'locomotive-scroll'

export default function Home() {
  useEffect(() => {
    ;(async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default
      const locomotiveScroll = new LocomotiveScroll()
    })()
  })
  return (
    <main className=''>
      <Hero />
      <About />
      <Timeline />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}
