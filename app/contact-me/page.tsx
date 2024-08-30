import ContactForm from '@/components/ContactForm';
import React from 'react';

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url('/bg-3.jpg')" }}
      className='w-screen h-screen bg-cover bg-center flex items-center justify-center'
    >
      <div
        style={{ backgroundImage: "url('/atombg-comp.webp')" }}
        className='relative w-full max-w-4xl h-full md:h-auto bg-cover bg-center rounded-xl border border-white flex items-center justify-center p-6'
      >
        <div className='w-full max-w-lg'>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Page;
