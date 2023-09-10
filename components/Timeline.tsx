import { Fragment } from 'react'

export const Timeline = () => {
  const data = [
    {
      course: 'SSLC',
      year: 2015
    },
    {
      course: 'Plus Two',
      year: 2017
    },
    {
      course: 'B.Sc Computer Science',
      year: 2020
    },
    {
      course: 'CCNA & RHCE Internship',
      year: 2021
    },
    {
      course: 'Full Stack Web Development',
      year: 2023
    }
  ]
  return (
    <div className='h-screen w-full p-10 bg-neutral-900 flex flex-col'>
      <h1 className='text-3xl font-bold'>MY TIMELINE</h1>
      <div className='flex justify-center items-center flex-grow'>
        <div className='w-full flex flex-col gap-2 h-full'>
          {data.map((item, i) => (
            <div
              key={i}
              className={`flex ${
                i % 2 === 0 ? 'flex-row-reverse' : 'flex-row'
              } justify-center gap-2 h-full w-full`}
            >
              <div className=' h-full bg-white rounded-md p-5 w-1/2'>
                <h1 className='text-black'>{item.course}</h1>
                <h1 className='text-black'>{item.year}</h1>
              </div>

              <div className='h-full w-2 bg-gray-500' />

              <div className='  h-full w-1/2' />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
