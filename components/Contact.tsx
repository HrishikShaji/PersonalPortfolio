export const Contact = () => {
  return (
    <div className='h-screen w-full bg-neutral-900 p-10 flex flex-col'>
      <h1 className='text-white font-bold text-3xl'>CONTACT ME</h1>
      <div className='flex-grow flex justify-center items-center'>
        <form className='flex flex-col w-[70%] gap-2'>
          <input
            className='bg-neutral-700 p-2 border-b-2 border-white'
            placeholder='Name...'
          />
          <input
            className='bg-neutral-700 p-2 border-b-2 border-white'
            placeholder='Email...'
          />
          <textarea
            className='h-[100px] bg-neutral-700 p-2 border-b-2 border-white'
            placeholder='Message...'
          />
          <button className='p-2 bg-white text-black'>SEND</button>
        </form>
      </div>
    </div>
  )
}
