import React from 'react'
import ProjectCard from './ProjectCard'


const projectsData = [
    {
        id: 1,
        title: "AI SAAS Platform",
        description:"This AI SaaS platform, built using the PERN stack (PostgreSQL, Express.js, React, Node.js) with Tailwind CSS, integrates multiple advanced AI features including an intelligent chat system, multi-category AI image generation, blog title creation, resume reviewing, background and object removal, and a unique global publishing section where users can post images and receive likes from others worldwide. The application uses Clerk for secure authentication and leverages APIs such as Gemini for language and vision models, Cloudinary for image management, and other AI/image-processing APIs to deliver smooth, high-quality results. Overall, it showcases strong full-stack engineering, modern UI design, scalable AI integration, and a social-style user interaction system.",
        image: "/images/ai-project.png",
        tag:["All",'Web'],
        gitUrl:"https://github.com/RonakJha-01/Gen-AI",
        previewUrl:"https://gen-ai-lilac-ten.vercel.app"

    },
    {
        id:2,
        title:"Food Delivery Website",
        description:"This full-stack food delivery platform is built using the MERN stack and provides a complete customer-side ordering experience with real-time interactions. The frontend, developed in React with Tailwind CSS, delivers a fast and responsive UI for browsing menus, adding items to the cart, and placing orders. The backend is powered by Node.js and Express.js, with MongoDB handling product, user, authentication, and order data. The system includes secure user login/register, dynamic menu management, order placement, and automatic price calculations. The application is fully deployed on Render, ensuring reliable server hosting and continuous availability. The project highlights strong full-stack architecture, REST API development, state management, and practical e-commerce functionality.",
        image:"/images/food-project.png",
        tag:["All",'Web'],
        gitUrl:"https://github.com/RonakJha-01/justEat",
        previewUrl:"https://just-eat-8uut.onrender.com"
    },
    {
        id:3,
        title:"Food Delivery Manager Website",
        description:"The admin panel is a dedicated MERN-stack application designed for restaurant owners to manage their entire food delivery system. It provides a protected dashboard where admins can securely log in, upload and update food items, manage categories, monitor user orders in real time, track order statuses, and maintain product inventory. The UI is built with React and CSS for a clean and intuitive experience, while the backend uses Node.js and Express.js to process admin actions and validate data. MongoDB stores all product and order information. The panel communicates with the main food delivery backend through secure REST APIs and is deployed on Render for scalable performance. This project demonstrates experience in authentication, role-based access control, CRUD operations, and end-to-end admin management for a real-world delivery system.",
        image:"/images/manager-project.png",
        tag:["All",'Web'],
        gitUrl:"https://github.com/RonakJha-01/justEat",
        previewUrl:"https://just-eat-manager.onrender.com"
    },
    {
        id:4,
        title:"Protfolio Website",
        description:"This personal portfolio website is built using Next.js and styled with Tailwind CSS, offering a fast, modern, and fully responsive interface to showcase projects, skills, and experience. It features server-side rendering for better performance, smooth page transitions, a clean UI, and optimized components designed for a professional developer profile. The site includes detailed project sections, a skills overview, contact options, and dynamic content managed through Next.js routing and components. With SEO-friendly structure, reusable UI elements, and minimal yet impactful visual design, the portfolio effectively highlights my work and technical strengths in modern web development.",
        image:"/images/portfolio-project.png",
        tag:["All",'Web'],
        gitUrl:"https://github.com/RonakJha-01/Ronak-Jha-Portfolio",
        previewUrl:"/"
    }

];

const ProjectSection = () => {
  return (
    <>
    <h2 className='text-4xl font-bold text-white mb-4 mt-4 sm:mt-0' id='projects'>My Major Projects</h2>
    <div>
        {projectsData.map((project)=> 
          <ProjectCard 
             key={project.id}
             title={project.title}
             description={project.description}
             imgUrl={project.image}
             gitUrl={project.gitUrl}
             previewUrl={project.previewUrl}
         /> )}
    </div>
    </>
  );
};

export default ProjectSection
