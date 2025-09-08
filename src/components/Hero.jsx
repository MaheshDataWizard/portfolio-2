import React from 'react'
import assets from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col align-center justify-center gap-3 mx-5 sm:mx-20  mt-10'>
      <img src={assets.hero} className='w-48 mx-auto rounded-full' alt="" />
      <h3 className='text-2xl sm:text-5xl text-center text-white'><span className='text-transparent bg-clip-text bg-gradient-to-r from-[#B923E1] to-[#DA7C25]'>I'm Rushabha Kaldate,</span> QA Tester based <br className='hidden md:block' /> in India.</h3>
      <p className='text-sm sm:font-medium text-white text-center leading-8'>I am a QA Tester from Pune, India with 1+ years of experience <br /> in multiple companies like Kiran Academy.</p>
      <div className='max-sm:flex max-sm:flex-col sm:flex align-center max-sm:justify-center mx-auto gap-10 text-white font-medium'>
        <button className='px-6 py-3 mt-5 sm:mb-5 rounded-full hover:border-2 border-white/80 bg-gradient-to-r from-[#B923E1] to-[#DA7C25] transition-all duration-100'>Connect With Me</button>
        <a
          href={assets.resume}
          download="Rushabha_Kaldate_Resume.pdf"
         
        >
          <button className=' max-sm:px-9 px-6 py-3 sm:mt-5 mb-5 rounded-full border-2 border-white/80 hover:border-2 hover:border-purple-800' >My Resume</button>

        </a>

      </div>
      <hr className='text-[#B923E1]' />
    </div>
  )
}

export default Hero