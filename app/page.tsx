import { About } from '@/components/About'
import { Contact } from '@/components/Contact'
import { Hero } from '@/components/Hero'
import { Projects } from '@/components/Projects'
import { Skills } from '@/components/Skills'
import { Timeline } from '@/components/Timeline'
import Image from 'next/image'

export default function Home() {
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
