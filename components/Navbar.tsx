"use client";

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Socials } from '@/constants';

const Navbar = () => {
  return (
    <div className='fixed top-0 z-20 w-full h-[100px] bg-transparent flex justify-between items-center px-4 md:px-10 lg:px-20'>
      <div className='flex flex-row gap-3 items-center'>
        <Link href="/" passHref>
          <div className='relative cursor-pointer'>
            <Image
              src="/abhi.jpg"
              alt='logo'
              width={40}
              height={40}
              className='w-full h-full object-contain rounded-full'
            />
          </div>
        </Link>
        <Link href="/" passHref>
          <h1 className='text-blue-800 text-[18px] md:text-[25px] font-semibold whitespace-nowrap cursor-pointer'>
            ABHISHEK <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">GIRI</span>
          </h1>
        </Link>
      </div>
      <div className="flex flex-row gap-4">
        {Socials.map((social) => (
          <Link key={social.name} href={social.link} target="_blank" rel="noopener noreferrer">
            <Image
              src={social.src}
              alt={social.name}
              width={28}
              height={28}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
