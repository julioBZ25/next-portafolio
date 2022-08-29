import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widset text-[#5651e5]'>About</p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>A selfclaim Full Stack developer</p>
          <p className='py-2 text-gray-600'>
            Hello! my name is Julio and I'm a Full-Stack web developer 💻 and electronic engineer bachelor ⚡. 
            After a year of experience as an electronic engineer, I decided to take a leap into the technology industry as I found myself drawn to
            the world of web development. For this reason, I joined Codeable, a full stack web development bootcamp to start my path in this
            field. Currently, I am looking for a full stack or front-end development position to continue improving and strengthening my skills.
          </p>
          <p className='py-2 text-gray-600'>Check out some of my latest projects</p>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src="/../public/assets/image/AboutImage.png" alt="computer" width='640' height='425' className='rounded-xl'/>
        </div>
      </div>
    </div>
  )
}

export default About