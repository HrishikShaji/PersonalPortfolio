'use client'
import Link from 'next/link'

export const Hero = () => {
  const getBlocks = () => {
    const blockSize = window.innerWidth * 0.05
    const noOfBlocks = Math.ceil(window.innerHeight / blockSize)
    console.log(noOfBlocks, 'running')
    return [...Array(noOfBlocks).keys()].map((_, index) => {
      return (
        <div
          className='w-full h-[5vw]'
          onMouseEnter={(e) => colorize(e)}
          key={index}
        />
      )
    })
  }

  const colorize = (e) => {
    e.target.style.backgroundColor = 'white'
    setTimeout(() => {
      e.target.style.backgroundColor = 'transparent'
    }, 300)
  }
  return (
    <div className='h-screen w-full bg-neutral-900  overflow-hidden gap-10 flex flex-col justify-center items-center'>
      <div className='z-10 flex flex-col relative mix-blend-difference pointer-events-none'>
        <h1 className='font-bold  text-3xl'>I'M HRISHIK</h1>
        <h2>I'M A WEB DEVELOPER</h2>
        <h1 className='text-teal-500'></h1>
        <Link
          href='https://github.com/HrishikShaji'
          className='z-50 cursor-pointer pointer-events-auto'
        >
          GITHUB
        </Link>
      </div>
      <div className='absolute w-full h-screen overflow-hidden flex'>
        {[...Array(20).keys()].map((_, index) => {
          return (
            <div className='w-full h-full' key={index}>
              {getBlocks()}
            </div>
          )
        })}
      </div>
    </div>
  )
}
