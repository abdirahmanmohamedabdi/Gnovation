/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import Image from 'next/image';

import React from 'react';
import ReactDOM from 'react-dom';
import TypeWriter from './Typewriter';
import img1 from '../../public/img-innov-1.jpg';
import img2 from '../../public/board-room-2.jpg';

const typeWriter = [
  'Software Development',
  'Business Analytics',
  'Mechatronics Engineering',
  'Innovation Research',
];

export default function Example() {
  return (
    <div>
      <section className='text-gray-600 body-font'>
        <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center '>
          <div className='container mt-12 mb-16 w-full  max-w-screen-lg mx-auto  flex flex-col md:flex-row  '>
            <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
              <h1 className=' sm:text-4xl text-3xl mb-4 font-abc text-gray-900'>
                Inventing the future, today.
              </h1>
              <h1 className=' sm:text-1xl text-base	 mb-2 '>
                Unlocking the power of technology to pave a brighter future for
                your business.
              </h1>

              <p className='sm:text-4xl text-3xl mb-12 font-abc text-sky-900 '>
                {' '}
                <TypeWriter data={typeWriter} />.
              </p>
              <a
                href='/Products'
                className='ml-0 whitespace-nowrap bg-sky-900 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:from-purple-700 hover:to-sky-900 uppercase tracking-wider'
              >
                discover
              </a>
            </div>
          </div>
          <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 bg-black'>
            <img
              className='object-cover object-center rounded'
              alt='hero'
              src='/img-innov-1.jpg'
            />
          </div>
        </div>
      </section>
    </div>
  );
}

// https://res.cloudinary.com/dyijvml1y/image/upload/v1680002017/board-room-1_uzdme6.jpg
