import ContactForm from '@/components/ContactForm';
import React from 'react';

const Page = () => {
  return (
    <div
      className='w-screen h-screen bg-cover bg-center flex items-center justify-center'
      style={{ backgroundImage: "url('/bg-3.jpg')" }}
    >
      <div
        className='relative w-full max-w-4xl h-full md:h-auto bg-cover bg-center rounded-xl border border-white flex items-center justify-center p-6'
        style={{ backgroundImage: "url('/atombg-comp.webp')" }}
      >
        <div className='w-full max-w-lg'>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Page;
