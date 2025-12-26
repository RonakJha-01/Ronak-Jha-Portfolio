import React from "react";
import Image from "next/image";
import Link from "next/link";


const Footer = () => {
  return (
    <div
      className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-gray-900 text-white"
      id="contact"
    >
      {/* Content */}
      <div
        className="w-full grid grid-cols-[2fr_1fr_1fr] gap-20
                   max-[750px]:flex max-[750px]:flex-col max-[750px]:gap-9 ml-4 pt-20 pb-0 mt-[100px] mb-0"
      >
        {/* Left */}
        <div className="flex flex-col items-start gap-5">
          <div className="flex items-center gap-3">
    
            <h2 className="text-tomato flex items-center gap-2 text-xl font-semibold">
              Ronak Jha
            </h2>
          </div>

          <p>
            Hii this is our different social media handels you can join us here.
          </p>

          <div className="flex items-center">
                <Link href={"https://www.linkedin.com/in/ronak-jha-562315338"}>
                <Image src="/images/linkedin_icon.png" alt='' className="mr-4 cursor-pointer transition-transform duration-300 hover:scale-110" width={50} height={50}/>
                </Link>

                <Link href={"https://github.com/RonakJha-01"}>
                <Image src="/images/github_icon.jpeg" alt='' className="mr-4 cursor-pointer transition-transform duration-300 hover:scale-110" width={50} height={50}/>
                </Link>
                
                
            
          </div>
        </div>

        {/* Center */}
        <div className="flex flex-col items-start gap-5">
          
        </div>

        {/* Right */}
        <div className="flex flex-col items-start gap-5">
          <h2 className="text-white text-lg font-semibold">For Contact</h2>
          <ul className="flex flex-col gap-2">
            <a
              href="mailto:ronakjha8460@gmail.com?subject=Contact%20from%20Portfolio&body=Hi%20Ronak,"
              className="cursor-pointer hover:underline"
             >
              ronakjha8460@gmail.com
            </a>

          </ul>
        </div>
      </div>

      {/* Divider */}
      <hr className="w-full h-0.5 mb-0 pb-0 bg-gray-500 my-5 border-none" />

      
    </div>
  );
};

export default Footer;
