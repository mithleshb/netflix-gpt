import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-[20%] px-24 absolute bg-gradient-to-r from-black'>
    <h1 className='text-3xl font-bold text-white'>{title}</h1>
    <p className='py-6 w-1/4 text-white'>{overview}</p>
    <div className='my-6'>
        <button className='bg-white text-black p-4 px-10 text-lg bg-opacity-3 rounded-md hover:bg-opacity-50' >▷ play</button>
        <button className='bg-gray-500 text-white p-4 px-10 text-lg bg-opacity-3 rounded-md mx-2'  >more</button>
    </div>
    </div>
    
  )
}

export default VideoTitle