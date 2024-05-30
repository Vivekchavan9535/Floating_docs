import React from 'react'

function Background() {
  return (
    <>
      <div className='h-screen w-full fixed z-[2]'>
        <div className='absolute top-[5%]  flex justify-center text-xl font-semibold text-zinc-600 py-10 w-full '>Documents.</div>

        <h1 className='text-[16vw] absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] font-semibold
      leading-none tracking-tight text-zinc-900'>Docs.
        </h1>
      </div>

    </>
  )
}

export default Background