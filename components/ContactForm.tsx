import React from 'react';

const ContactForm = () => {
    return (
        <form className='max-w-lg mx-auto p-4 bg-gray-800 rounded-lg shadow-lg'>
            <h2 className='text-3xl font-bold mb-6 text-white text-center'>Contact Me</h2>
            <div className='mb-4'>
                <label htmlFor='name' className='block text-sm font-medium text-white mb-2'>Your Name</label>
                <input
                    type='text'
                    id='name'
                    placeholder='Your name'
                    name='name'
                    className='w-full px-3 py-2 text-sm text-gray-900 placeholder-gray-400 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
            </div>
            <div className='mb-4'>
                <label htmlFor='email' className='block text-sm font-medium text-white mb-2'>Email</label>
                <input
                    type='email'
                    id='email'
                    placeholder='Email'
                    name='email'
                    className='w-full px-3 py-2 text-sm text-gray-900 placeholder-gray-400 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
            </div>
            <div className='mb-4'>
                <label htmlFor='message' className='block text-sm font-medium text-white mb-2'>Message</label>
                <textarea
                    id='message'
                    placeholder='Your message'
                    name='message'
                  
                    className='w-full px-3 py-2 text-sm text-gray-900 placeholder-gray-400 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
            </div>
            <button
                type='submit'
                className='w-full rounded-full shadow px-6 py-3 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500'
            >
                Send a Message
            </button>
        </form>
    );
};

export default ContactForm;
