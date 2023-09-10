import Link from 'next/link'

export const Hero = () => {
  return (
    <div className='min-h-screen w-full bg-neutral-900 gap-10 flex flex-col justify-center items-center'>
      <div className='flex flex-col '>
        <h1 className='font-bold text-white text-3xl'>I'M HRISHIK</h1>
        <h2>I'M A WEB DEVELOPER</h2>
      </div>
      <Link href='https://github.com/HrishikShaji'>GITHUB</Link>
    </div>
  )
}
