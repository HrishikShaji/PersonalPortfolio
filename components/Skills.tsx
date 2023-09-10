export const Skills = () => {
  const data = [
    {
      skill: 'HTML',
      level: 8
    },

    {
      skill: 'CSS',
      level: 8
    },

    {
      skill: 'Javascript',
      level: 8
    },

    {
      skill: 'Typescript',
      level: 8
    },

    {
      skill: 'React JS',
      level: 9
    },

    {
      skill: 'Next JS',
      level: 9
    },

    {
      skill: 'Tailwind CSS',
      level: 10
    },

    {
      skill: 'Express JS',
      level: 7
    },

    {
      skill: 'Node JS',
      level: 7
    },

    {
      skill: 'Python',
      level: 7
    },

    {
      skill: 'Firebase',
      level: 7
    },

    {
      skill: 'MongoDB',
      level: 8
    },

    {
      skill: 'Lua',
      level: 6
    },

    {
      skill: 'Git',
      level: 7
    },

    {
      skill: 'Solidity',
      level: 5
    }
  ]
  return (
    <div className='h-screen w-full bg-neutral-900 p-10 flex flex-col'>
      <h1 className='text-white font-bold text-3xl'>MY SKILLS</h1>
      <div className='grid grid-cols-4 gap-4 flex-grow '>
        {data.map((item, i) => (
          <div key={i} className='flex flex-col justify-center'>
            <h1 className=' text-white font-semibold'>{item.skill}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}
