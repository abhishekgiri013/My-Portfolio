"use client";

import Image from 'next/image';
import React from 'react';

const AboutMe = () => {
    return (
        <div className='w-full min-h-screen bg-gradient-to-br from-blue-900 via-purple-800 to-black text-white overflow-auto'>
            <div className='max-w-6xl mx-auto pt-16 px-4 md:px-8'>
                <div className='flex flex-col md:flex-row items-start gap-8'>
                    {/* Profile Picture Section */}
                    <div className='flex-none flex justify-center md:justify-start'>
                        <Image
                            src='/abhi.jpg'  // Replace with your image path
                            alt='Abhishek Giri'
                            width={300} // Adjust size as needed
                            height={300} // Adjust size as needed
                            className='w-48 h-48 md:w-72 md:h-72 object-cover rounded-full border-4 border-gray-300'
                        />
                    </div>
                    {/* Content Section */}
                    <div className='flex-1'>
                        <h1 className='text-3xl md:text-4xl font-bold mb-4'>Abhishek Giri</h1>
                        <p className='text-lg md:text-xl mb-4'>
                            Experienced Full Stack Developer | Next.js Developer | MERN Stack | Writer | YouTube Educator
                        </p>
                        <p className='text-base md:text-lg mb-4'>
                            👋 Hi there, I am Abhishek Giri. I am an undergraduate student at Delhi Technological University, an India-based university. I have a background in Engineering Physics, which has given me immense exposure to the problems and issues faced by people in their daily tasks. Being passionate about the possibilities of advancing technology and how these advancements are affecting the overall growth of different sectors that serve mankind, I try building solutions for the community and thereby doing my part in making people's lives easier and more meaningful. And also I am a passionate Full Stack Web Developer with a focus on delivering robust and scalable solutions. With experience in MERN stack and responsive design, I have developed and deployed various web applications, including real-time chat apps, e-commerce platforms, and more.
                        </p>
                        <div className='mb-4'>
                            <h2 className='text-xl md:text-2xl font-semibold mb-2'>🚀 Tech Stack</h2>
                            <p className='text-base md:text-lg'>
                                JavaScript, React, Next.js, Node.js, Express.js, MongoDB, Tailwind CSS, GSAP, Stripe, Sanity.io, GitHub, VS Code
                            </p>
                        </div>
                        <div className='mb-4'>
                            <h2 className='text-xl md:text-2xl font-semibold mb-2'>🌱 I’m currently learning</h2>
                            <p className='text-base md:text-lg'>
                                Advanced Next.js techniques, TypeScript, Framer Motion for animations
                            </p>
                        </div>
                        <div className='mb-4'>
                            <h2 className='text-xl md:text-2xl font-semibold mb-2'>💻 Projects</h2>
                            <ul className='list-disc list-inside text-base md:text-lg'>
                                <li><strong>PingMe:</strong> A real-time chat application built using MERN stack, Tailwind CSS, Zustand, DaisyUI, and Socket.IO.</li>
                                <li><strong>NextCommerce:</strong> An e-commerce platform leveraging Next.js 14, Sanity.io, Stripe, and Shadcn/UI.</li>
                                <li><strong>Zestofy:</strong> A platform for buying and selling innovative startup ideas and pitches, developed at Hix Media Private Limited.</li>
                            </ul>
                        </div>
                        <div className='mb-4'>
                            <h2 className='text-xl md:text-2xl font-semibold mb-2'>📫 How to reach me</h2>
                            <p className='text-base md:text-lg'>
                                <a href='https://www.linkedin.com/in/abhishekgiri013' target='_blank' rel='noopener noreferrer' className='text-blue-600 hover:underline'>LinkedIn</a> | 
                                <a href='https://twitter.com/abhishekgiri013' target='_blank' rel='noopener noreferrer' className='text-blue-400 hover:underline'> Twitter</a> | 
                                <a href='/portfolio' className='text-blue-800 hover:underline'> Portfolio</a>
                            </p>
                        </div>
                        <div>
                            <h2 className='text-xl md:text-2xl font-semibold mb-2'>⚡ Fun fact</h2>
                            <p className='text-base md:text-lg'>
                                When I'm not coding, you might find me exploring new technologies, contributing to open-source projects, or engaging in community development initiatives.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
