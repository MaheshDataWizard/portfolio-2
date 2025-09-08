import React from 'react'
import mywork_data from '../assets/mywork_data'
import assets from '../assets/assets'

const MyLatestWork = () => {
    return (

        <>
        <div id='portfolio' className='mx-5 sm:mx-20 my-10'>
            <h3 className='text-4xl  sm:text-5xl font-semibold text-center'>My Latest Work</h3>
            <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cold-3 gap-8 my-10 py-10 '>
                {mywork_data.map((work, index) => (
                    <div key={index} className='hover:border-3 hover:border-[#B923E1] rounded-md hover:scale-105 transitin-all duration-100'>
                        <img src={work.w_img} className='' alt="" />
                    </div>
                ))}
            </div>
            <div className='flex gap-2'>
                <button className='text-center text-[#B923E1] py-2 px-5 mx-auto border-2 border-white/80 hover:text-white hover:border-[#B923E1] rounded-full hover:scale-105 transition-all duration-100'>Read More <img src={assets.arrow_icon} className='w-4 inline-block' alt="" /></button>
            </div>
            
        </div>
          <hr className='text-[#B923E1] mx-20' />
        </>
    )
}

export default MyLatestWork