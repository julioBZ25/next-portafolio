import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import {HiOutlineChevronDoubleUp, HiOutLineChevronDoubleUp} from 'react-icons/hi'

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => setName(e.target.value)
  const handlePhoneChange = (e) => setPhone(e.target.value)
  const handleEmailChange = (e) => setEmail(e.target.value)
  const handleSubjectChange = (e) => setSubject(e.target.value)
  const handleMessageChange = (e) => setMessage(e.target.value)


  const handleSubmit = async (e) => {
    e.preventDefault();

    // let isValidForm = handleValidation();

    const res = await fetch("/api/sendgrid", {
      body: JSON.stringify({
        email: email,
        subject: subject,
        message: `${name}, ${phone} <br> ${message}`,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();
    if (error) {
      console.log(error);
      return;
    }
    console.log(name, phone, email, subject, message);
  };

  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'> Contact </p>
        <h2 className='py-4'> Get in Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full'>
              {/* <div>
                <img src="" alt="" /> 
              </div> */}
              <div>
                <h2 className='py-2'>Julio Bazalar</h2>
                <p>Front-End Developer</p>
                <p className='py-4'>I am available for full-time or part-time positions. Contact me and let's talk</p>
              </div>
              <div>
                <p className='uppercase pt-8'>Connect with me</p>
                <div className='flex items-center justify-between py-4'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                  <FaLinkedinIn/>
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                  <FaGithub/>
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                  <AiOutlineMail/>
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                  <BsFillPersonLinesFill/>
                </div>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
              <form>
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input onChange={handleNameChange} value={name} className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Phone Number</label>
                    <input onChange={handlePhoneChange} value={phone} className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input onChange={handleEmailChange} value={email} className='border-2 rounded-lg p-3 flex border-gray-300' type="email" />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Subject</label>
                  <input onChange={handleSubjectChange} value={subject} className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Message</label>
                  <textarea onChange={handleMessageChange} value={message} className='border-2 rounded-lg p-3 border-gray-300' rows='10'></textarea>
                </div>
                <button onClick={handleSubmit} className='w-full p-4 text-gray-100 mt-4'>Send Message</button>
              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <HiOutlineChevronDoubleUp className='text-[#5651e5]' size={30}/>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Contact