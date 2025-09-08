import React from 'react'
import assets from '../assets/assets'

const Footer = () => {
    return (
        <div className='px-5 sm:px-20'>
            <div className='flex max-sm:flex-col sm:gap-10'>
                <div className='flex-1'>
                    <p className='font-medium text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#B923E1] to-[#DA7C25]' >rushabh.K</p>
                    <p className='max-sm:mt-5 text-center'>I am a QA Tester from, India with 1+ years of experience in companies like Kiran Academy.</p>
                </div>
                <div className='max-sm:mt-5 sm:flex-1 sm:px-4 sm:mb-3'>
                    <input type="email" name="" id="" className='bg-[#32323c] py-2 sm:w-1/2 px-4 rounded-full' placeholder='Enter your email' />
                    <button className='mx-10 my-5 sm:mt-15 rounded-full border-2 py-2 px-4 hover:border-black bg-gradient-to-r from-[#B923E1] to-[#DA7C25]'>Subscribe</button>
                </div>
            </div>

            <hr className='h-5 text-[#B923E1]' />
            <div className='max-sm:flex max-sm:flex-col sm:flex justify-between '>

                <div className='flex max-sm:flex-col max-sm:mt-5 max-sm:text-sm sm:flex max-sm:gap-2 gap-5 pb-5'>
                    <button className='hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#B923E1] to-[#DA7C25] transition-all duration-100'>Term of Services</button>
                    <button className='hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#B923E1] to-[#DA7C25] transition-all duration-100'>Privacy Policy</button>
                    <button className='hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#B923E1] to-[#DA7C25] transition-all duration-100'>Connect With Me</button>
                </div>

                <p className='max-sm:text-sm text-center'>© {new Date().getFullYear()} Rushabha Kaldate. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer