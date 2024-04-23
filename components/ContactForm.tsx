import React from 'react'

const ContactForm = () => {
    return (
        <form >
            <div className=' '>
            <div className='mb-3'>
                <h2 className='text-2xl font-bold mb-5 text-white'> Contact Me
                </h2>
                <input type="text"
                    placeholder='Your name'
                    name='name'
                    className=' w-full px-3 py-2 text-sm text-gray-300 placeholder-gray-400 bg-white border-0 rounded shadow' />
            </div>
            <div className='mb-3'>
                <h2 className='text-2xl font-bold mb-5 text-white'> Email
                </h2>
                <input type="email"
                    placeholder='Email'
                    name='email'
                    className=' w-full px-3 py-2 text-sm text-gray-300 placeholder-gray-400 bg-white border-0 rounded shadow' />
            </div>
            <div className='mb-3'>
                <h2 className='text-2xl font-bold mb-5 text-white'> Message
                </h2>
                <input 
                    placeholder='Your message'
                    name='message'
                    className=' w-full px-3 py-2 text-sm text-gray-300 placeholder-gray-400 bg-white border-0 rounded shadow ' />
            </div>
            </div>
             <button className='rounded-full shadow px-6 py-3 mb-5 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 hover:bg-blue-400 '>
                Send a message
             </button>
        </form>
    )
}

export default ContactForm
