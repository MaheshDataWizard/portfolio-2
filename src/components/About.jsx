import React from 'react'
import { motion } from 'framer-motion'
import assets from '../assets/assets'

const About = () => {
  // Skill data to make it dynamic
  const skills = [
    { name: "HTML & CSS", level: "90%" },
    { name: "Core Java", level: "60%" },
    { name: "Manual Testing", level: "95%" },
    { name: "Automation Testing", level: "60%" },
  ]

  return (
    <div id="about-me" className="mx-5 sm:mx-20">
      <h3 className="text-4xl sm:text-5xl font-semibold text-white p-3 my-10 mx-auto text-center relative bg-transparent">
        About Me
      </h3>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-10 text-white">
        {/* Profile Image */}
        <img
          src={assets.hero}
          className="w-[300px] rounded-xl shadow-lg"
          alt="Profile picture of Rushabh"
        />

        {/* About Content */}
        <div>
          <div className="flex flex-col gap-5 max-sm:px-2 text-center">
            <p className="max-sm:text-sm">
              I am an experienced QA Tester with over 1+ years of professional
              expertise in the field. Throughout my career, I have had the
              privilege of collaborating with prestigious organizations,
              contributing to their success and growth.
            </p>
            <p className="max-sm:hidden text-center">
              My passion for QA Testing is not only reflected in my extensive
              experience but also in the enthusiasm and dedication I bring to
              each project.
            </p>
          </div>

          {/* Skills Section */}
          <div className="flex flex-col gap-5 mt-10 max-sm:px-5 max-sm:text-sm font-medium">
            {skills.map((skill, i) => (
              <div key={i}>
                <p>{skill.name}</p>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.level }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="mt-3 max-sm:h-1 sm:h-2 text-transparent rounded-full bg-gradient-to-r from-[#B923E1] to-[#DA7C25]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="sm:flex items-center justify-evenly text-center mt-5 sm:mt-10 sm:py-10 text-2xl font-medium text-white">
        <div className="max-sm:border-b-4 sm:border-r-4 p-8">
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#B923E1] to-[#DA7C25]">
            1+
          </p>
          <p className='text-xl text-center'>Years of Experience</p>
        </div>
        <div className="max-sm:border-b-4 sm:border-r-4 p-8">
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#B923E1] to-[#DA7C25]">
            9+
          </p>
          <p className='text-xl text-center'>Projects Completed</p>
        </div>
        <div className="max-sm:border-b-4 sm:border-r-4 p-8">
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#B923E1] to-[#DA7C25]">
            5+
          </p>
          <p className='text-xl text-center'>Happy Clients</p>
        </div>
      </div>

      <hr className="hidden sm:block text-[#B923E1]" />
    </div>
  )
}       

export default About
