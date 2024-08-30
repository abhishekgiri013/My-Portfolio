"use client";
import Link from 'next/link';
import React from 'react';

interface Props {
    image: string;
    title: string;
    text: string;
    link: string;
}

const ProjectCard = ({ image, title, text, link }: Props) => {
    return (
        <Link href={link} passHref>
            <div className='w-full max-w-[500px] h-[350px] rounded-md cursor-pointer overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl'>
                <div
                    style={{ backgroundImage: `url(${image})` }}
                    className='w-full h-[250px] bg-cover bg-center'
                />
                <div className='p-4 bg-gradient-to-r from-pink-700 to-blue-900'> {/* Updated background */}
                    <h1 className='text-white text-xl font-bold'>{title}</h1>
                    <p className='text-white text-base '>{text}</p> {/* Adjusted text color */}
                </div>
            </div>
        </Link>
    );
};

export default ProjectCard;
