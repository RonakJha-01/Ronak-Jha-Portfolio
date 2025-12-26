import React from 'react';
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const ProjectCard = ({imgUrl, title, description, gitUrl, previewUrl}) => {
  return (
    <div>
      <div
  className="h-52 w-75 mr-7 sm:h-64 sm:w-96 sm:mr-10 md:h-80 md:w-120 md:mr-16 lg:h-100 lg:w-155 lg:ml-75 lg:mr-75 rounded-t-xl relative group"
  style={{
    backgroundImage: `url(${imgUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center" 
  }}
>
  <div
    className="absolute flex items-center justify-center inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-500"
  >
    <Link href={gitUrl} className='h-14 w-14 mr-2 border-2 relative rounded-full border-gray-400 hover:border-white group/link'>
    <CodeBracketIcon className='h-10 w-10 text-gray-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white' />
    </Link>

    <Link href={previewUrl} className='h-14 w-14 border-2 relative rounded-full border-gray-400 hover:border-white group/link'>
    <EyeIcon className='h-10 w-10 text-gray-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white' />
    </Link>

  </div>
</div>


      <div className='text-white rounded-b-xl h-180 w-75 mr-7 sm:h-140 sm:w-96 sm:mr-10 md:h-110 md:w-120 md:mr-16 lg:h-90 lg:w-155 lg:ml-75 lg:mr-75 mt-2 mb-6 bg-gray-900 py-6 px-4'>
        <h5 className='text-xl font-semibold mb-2'>{title}</h5>
        <p className='text-[#ADB7BE]'>{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard
