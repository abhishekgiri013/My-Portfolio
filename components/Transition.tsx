"use client"
import React from 'react';
import {animate, easeOut, motion} from 'framer-motion';
import { exit } from 'process';
import { headers } from 'next/headers';

const TransitionVariants ={
        initial: {
            y:'100%',
            height: '100%'
        },

      animate: {
            y:'0%',
            height: '0%'
        },
        exit: {
            y:["0%","100%"],
            height:["0%","100%"]
        }
}

const Transition = () => {
  return (
    <div>
        <motion.div 
        className='fixed right-0 h-screen w-screen bottom-full z-[30] bg-[#2e2257]'
         variants={TransitionVariants}
         initial ="initial"
         exit="exit"
         animate="animate"
         transition={{delay:0.2, duration:0.6, ease:"easeOut"}}
        />
        <motion.div 
        className='fixed right-0 h-screen w-screen bottom-full z-[20] bg-[#3d2b71]'
         variants={TransitionVariants}
         initial ="initial"
         exit="exit"
         animate="animate"
         transition={{delay:0.4, duration:0.6, ease:"easeOut"}}
        />   
         <motion.div 
        className='fixed right-0 h-screen w-screen bottom-full z-[10] bg-[#3b4792]'
         variants={TransitionVariants}
         initial ="initial"
         exit="exit"
         animate="animate"
         transition={{delay:0.6, duration:0.6, ease:"easeOut"}}
        />

    </div>
  )

}

export default Transition
