"use client";

import ProjectCard from '@/components/ProjectCard';
import { Projects } from '@/constants';
import React from 'react';

const Page = () => {
    return (
        <div
            style={{ backgroundImage: "url(/mountains.jpg)" }}
            className='w-screen h-screen flex items-center justify-center bg-center bg-cover pt-[120px] px-4'
        >
            <div className='w-full max-w-[90%] h-full max-h-[calc(100vh-100px)] overflow-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {Projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            image={project.src}
                            title={project.title}
                            text={project.text}
                            link={project.Link}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Page;
