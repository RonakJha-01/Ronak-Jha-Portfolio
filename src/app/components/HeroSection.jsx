"use client";
import React, { use } from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';


const HeroSection = () => {
  return (
    <section>
        <div className='grid grid-cols-1 sm:grid-cols-12'>

            <motion.div 
              initial={{opacity:0, scale:0.5}}
              animate={{opacity:1, scale:1}}
              transition={{duration:0.5}}
            className='col-span-7 place-self-center text-center sm:text-left'>
        <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
             <span className='text-transparent bg-clip-text bg-[linear-gradient(129deg,#10108F_0%,#00D4FF_50%,#FFFFFF_100%)]'> 
                Hey! I'm {""} </span>
                <br></br>
                <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Ronak Jha',
        2000, // wait 2s before replacing "Ronak Jha" with "A frontend backend expert"
        'A Web Developer',
        1000,
        'A frontend expert',
        1000,
        'A backend expert',
        1000,
        'A data base expert',
        1000,
        'A Python Programmer',
        1000,
        'An AI/ML Enthusiast',
        1000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  
                 
        </h1>
        <p className='text-gray-400 text-base sm:text-lg mb-6 lg:text-xl'>
           Full-Stack Web Developer skilled in JavaScript, MERN Stack, and Next.js, with a strong foundation in Python and AI.
             </p>
        <div>
          <a href="mailto:ronakjha8460@gmail.com?subject=Contact%20from%20Portfolio&body=Hi%20Ronak,">
            <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 mb-2 bg-[linear-gradient(129deg,#10108F_0%,#00D4FF_50%,#FFFFFF_100%)]
             hover:bg-[linear-gradient(129deg,#FFFFFF_0%,#00D4FF_50%,#10108F_100%)] text-black font cursor-pointer'
            >Hire Now!</button>
          </a>

          <a
            href="Ronak_Jha_Resume.pdf"
            download="Ronak_Jha_Resume.pdf"
          >
            <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-white hover:bg-gray-400 text-pink-800 border border-pink-800 cursor-pointer'>Download Resume</button>
           </a>
        </div>
        </motion.div>

        <motion.div 
           initial={{opacity:0, scale:0.5}}
              animate={{opacity:1, scale:1}}
              transition={{duration:0.5}}

        className='col-span-5 place-self-center mt-4 lg:mt-0'>
            <div className='rounded-full bg-[#070F18] w-90 h-90 lg:w-100 lg:h-100 relative'> 
            <Image 
                src="/images/protfolio-img.png" 
                alt="hero image"
                className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                width={200}
                height={50}
             />
             </div>

        </motion.div>
         </div>
    </section>
  )
}

export default HeroSection
