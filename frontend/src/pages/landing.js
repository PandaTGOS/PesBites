import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../components/navbar';
import Signin from '../components/sign';


const Landing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative">
    
    <div>
      <div className="absolute inset-0 overflow-hidden w-full h-full object-cover object-center opacity-90 filter brightness-50">
        <video
          autoPlay
          loop
          muted
          id="bg-video"
          className="w-full h-full object-cover"
        >
          <source src={require("../extras/Bg2.mp4")} type="video/mp4" />
        </video>
      </div>

      <div className="relative top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center">
        <Navbar/>
        
        <section>
            <div className="flex items-center justify-center h-screen">
                <div className="px-4 max-w-screen-xl text-center py-24 lg:py-56">
                    <h1 className="text-4xl font-extrabold leading-none text-white md:text-5xl lg:text-6xl p-4">Welcome to PesBites!</h1>
                    <p className="text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48 p-4">Here at PesBites, we follow our passion for food focusing on unleashing our creativity in the form of stunning visuals, audio, music, and direction, uncovering our true potential.</p>
                    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 p-4">
                        <button onClick={openModal} className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-white rounded-lg bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 dark:focus:ring-orange-900">
                            Order Now
                            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </button>
                        
                        <Link to="/" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                            Learn more
                        </Link>
                    </div>
                </div>
            </div>
        </section>
      </div>
      
    </div>

      {isModalOpen && (
        <Signin/>
      )}

    </div>
  );
};

export default Landing;