import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Julio | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Julio Bazalar</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/jbzuloaga/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/julioBZ25'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Proven Leadership <span className='px-1'>|</span> Web Development{' '}
              <span className='px-1'>|</span> Complex Problem Solving
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Proven Leadership</p>
            <p className='py-2'>Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p className='text-justify'>
          After a year of experience as an electronic engineer, I decided to take 
          a leap into the technology industry as I found myself drawn to 
          the world of web development. For this reason, I joined Codeable, 
          a full stack web development bootcamp to start my path in this field.  
          An Analytical, innovative, and motivated web development professional
          with experience in customer service, team leadership, and organizational 
          effectiveness in fast-paced and challenging environments. Consummate 
          professional, and motivated leader, with solid interpersonal abilities. 
          Effective and proven track record of critical thinking, idea generation, 
          and optimizing efficiencies.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Front-End Web Developer
            <span className='px-2'>|</span> HTML <span className='px-2'>|</span>
            CSS <span className='px-2'>|</span>JavaScript
            CSS <span className='px-2'>|</span>React.js
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span> Ruby
            <span className='px-2'>|</span> PostgreSQL
            <span className='px-2'>|</span> Ruby on Rails
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              Nexus Technology
            </span>
            <span className='px-2'>|</span>Lima, Peru
          </p>
          <p className='py-1 italic'>Pre Sales Engineer (2021 - 2022)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Provided technical and design consulting services to the commercial department 
              regarding the brands I specialized in. This consulting was aimed to help clients 
              win private and state bids in different fields nationwide.
            </li>
            <li>
              In charge of basic training and commercial presentations to different collaborators 
              and strategic partners.
            </li>
          </ul>
        </div>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>Qenergy Peru</span>
            <span className='px-2'>|</span>Lima, Peru
          </p>
          <p className='py-1 italic'>Technical Assistant (2020 - 2020)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Worked alongside the head technical engineer for Delta/Eltek products 
              providing tech support for energy/power equipment, air conditioners and 
              engine-generators.
            </li>
            <li>
              In charge of basic training on power and air conditioning equipment for 
              power stations and substations.
            </li>
          </ul>
        </div>
        {/* Experience */}
      </div>
    </>
  );
};

export default resume;