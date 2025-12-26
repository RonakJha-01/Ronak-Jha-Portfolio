"use client";
import React, {useState, useTransition} from 'react'
import Image from 'next/image'
import TabButton from './TabButton';


const TAB_DATA = [
  {
    title: "Skills",
    id: 'skills',
    content: (
      <ul>

        <ul className='mt-4'>Frontend:</ul>
        
        <ul className='list-disc pl-2'>
        <li>HTML</li>
        <li>CSS & Tailwind CSS</li>
        <li>JavaScript</li>
        <li>React.js</li>
        <li>Next.js</li>
        </ul>
        
        <ul className='mt-4'>Backend:</ul>

        <ul className='list-disc pl-2'>
        <li>Node.js</li>
        <li>Express.js</li>
        </ul>


        <ul className='mt-4'>Database:</ul>

        <ul className='list-disc pl-2'>
        <li>MongoDB</li>
        <li>MySQL</li>
        <li>PostgreSQL</li>
        </ul>

        
        <ul className='mt-4'>Tools:</ul>
        
        <ul className='list-disc pl-2'>
        <li>Git</li>
        <li>GitHub</li>
        <li>Postman</li>
        </ul>

        
        <ul className='mt-4'>Programming Languages:</ul>

        <ul className='list-disc pl-2'>
        <li>JavaScript</li>
        <li>Python</li>
        </ul>

        
        <ul className='mt-4'>AI and Data Skills:</ul>

        <ul className='list-disc pl-2'> 
        <li>AI</li>
        <li>Ml</li>
        <li>Python For Data Science</li>
        </ul>


        <ul className='mt-4'>Additional Skills:</ul>

        <ul className='list-disc pl-2'>
        <li id='projects'>ROS(Robot Operating System)</li>
        </ul>

      </ul>
    )
  },

  {
    title: "Education",
    id:'education',
    content:(
      <ul>

        <ul>
          <li>10th Standard - GSEB (2021)</li>
          <li>Score: 89%</li>
        </ul>

        <ul>
          <li>12th Standard - GSEB (2023)</li>
          <li>Score: 74%</li>
        </ul>

        <ul>
          <li>Computer Science & Engineering - Gujarat Technological University</li>
          <li>Expected Graduation: 2027</li>
          <li id='projects'>Current CGPA: 8.0</li>
        </ul>

      </ul>
    )

  },

  {
    title: "Projects",
    id:'projects',
    content:(

      <ul>
        

        <ul className='mt-4'>Major Projects:</ul>

        <ul className='list-disc pl-2'>
        <li>AI SAAS APP using PERN Stack</li>
        <li>Food Delivery Website using MERN Stack</li>
        <li>Food Delivery Website Admin Pannel using MERN Stack</li>
        <li>Protfolio Website using Next.js</li>
        </ul>


        <ul className='mt-4'>Minor Projects:</ul>

        <ul className='list-disc pl-2'>
          <li>Text to QR Code generator using JS</li>
          <li>Text to Speech generator using JS</li>
          <li>Weather APP using JS</li>
          <li id='projects'>XO Game using JS</li>
        </ul>
      </ul>

      

    )
  }
]

const AboutSection = () => {
   
  const [tab, setTab] = useState("skills")
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id)=>{
    startTransition(()=>{
      setTab(id)
    });
  };

  return (
    <section className='text-white pt-8' id='about'>
    <div className='md:grid md:grid-cols-2 gap-8 items-start py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>

       <Image src="/images/about-img.png" alt='' width={500} height={500}/>
       <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
       <h2 className='text-4xl font-bold text-white mb-4'>About me!</h2>
       <p className='text-base lg:text-lg'>
       I develop modern, scalable applications using JavaScript, the MERN stack, and Next.js, with
        a focus on clean architecture and smooth user experience. I'm also highly confident in Python, 
        where I've built projects and explored AI, giving me a strong foundation across both 
        software development and intelligent systems.
       </p>
       <div className='flex flex-row justify-start mt-8'>
        <TabButton selectTab={()=> handleTabChange("skills")} active={tab==='skills'}>{''} Skills{''} </TabButton>
        <TabButton selectTab={()=> handleTabChange("education")} active={tab==='education'}>{''} Education{''} </TabButton>
        <TabButton selectTab={()=> handleTabChange("projects")} active={tab==='projects'}>{''}Projects{''}</TabButton>
        
       </div>

       <div className='mt-8'>{TAB_DATA.find((t)=> t.id === tab).content} </div>
       </div>
    </div>
    </section>
  )
}

export default AboutSection
