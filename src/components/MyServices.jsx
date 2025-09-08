import React from 'react'
import Services_Data from '../assets/services_data'

const MyServices = () => {
    return (
        <div id='services' className='flex flex-col align-center wrap mx-5 sm:mx-20 sm:mx-4'>
            <h1 className='text-4xl sm:text-5xl font-semibold text-center mt-10 mx-auto '>My Services</h1>

            <div className='grid grid-cols-1 sm:grid-grid-cols-2 lg:grid-cols-3 py-12 gap-8 px-5 sm:px-20'>
                {Services_Data.map((work, index) => (

                    <div key={index} className='px-4 py-4 border-2 border-white/80 hover:border-2 hover:border-[#B923E1] hover:bg-gradient-to-r from-[#3f0028] to-[#582300] hover:scale-105 rounded-md transition-all duration-500 '>
                        <p className='text-md font-medium max-sm:text-sm'>{work.s_no}</p>
                        <p className='text-2xl max-sm:text-xl font-semibold py-2 text-transparent bg-clip-text bg-gradient-to-r from-[#B923E1] to-[#DA7C25]'>{work.s_name}</p>
                        <p className='max-sm:text-sm'>{work.s_desc}</p>
                        <button className='text-sm border-2 border-white/80  py-2 px-5 my-2 rounded-full'>Read More..</button>
                    </div>

                ))}
            </div>

            <hr className='text-[#B923E1] mx-20' />
        </div>
    )
}

export default MyServices

