import React from 'react'
import expensableImg from '../public/assets/projects/exp_main.JPG'
import eatableImg from '../public/assets/projects/eatable_products.JPG'
import doableImg from '../public/assets/projects/doable.JPG'
import tweetableImg from '../public/assets/projects/Tweet_main.JPG'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
        <h2 className='py-4'>What I've Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem title='Expensable' backgroundImg={expensableImg} projectUrl='https://github.com/julioBZ25/react-expensable' tech='React JS' />
          <ProjectItem title='Eatable' backgroundImg={eatableImg} projectUrl='https://github.com/julioBZ25/react-eatable' tech='React JS' />
          <ProjectItem title='Doable' backgroundImg={doableImg} projectUrl='https://github.com/julioBZ25/js-doable' tech='JS'/>
          <ProjectItem title='Tweetable' backgroundImg={tweetableImg} projectUrl='https://github.com/julioBZ25/ror-tweetable' tech='Ruby on Rails' />
        </div>
      </div>
    </div>
  )
}

export default Projects