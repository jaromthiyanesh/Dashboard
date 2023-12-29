import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faSearch,faCog,faIdCard, faTimes } from '@fortawesome/free-solid-svg-icons';


function Navbar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsScrolled(scrollPosition >0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className={`2xl:container mx-auto shadow fixed top-0 w-full transition-all duration-300 ${isScrolled ? 'bg-blue-950 text-white' : ' bg-white text-black'}`}>
        <div className='flex items-center justify-between px-8 py-4'>
          <div onClick={toggleSidebar}>
            <FontAwesomeIcon icon={faBars}  className='cursor-pointer text-lg lg:text-2xl ' />
          </div>
          <div>
            <h1 className='text-md font-medium hidden md:block md:font-bold md:text-xl'>Desk-Help</h1>
          </div>
          <div>
            <h1 className='text-xl font-semibold cursor-pointer hidden md:block hover:underline'>Home</h1>
          </div>
          <div>
            <h1 className='text-xl font-semibold cursor-pointer hidden md:block hover:underline'>Setting</h1>
          </div>
          <div>
            <h1 className='text-xl font-semibold cursor-pointer hidden md:block hover:underline'>Profile <FontAwesomeIcon icon={faUser} /> </h1>
          </div>
          <div className='space-x-2'>
            <input
              type='text'
              placeholder='Search...'
              className='border border-gray-300 rounded-full lg:px-4 lg:py-2 px-1 py-1 focus:outline-none focus:border-blue-500'
            />
            <button
              className='bg-blue-950 text-white rounded-full lg:px-4 lg:py-2 px-2 py-1 hover:bg-blue-600 focus:outline-none'
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className='fixed inset-0 bg-gray-800 bg-opacity-50 z-50'>
          <div className='fixed inset-y-0 left-0 max-w-xs w-[50%] lg:w-full bg-white transform shadow-lg overflow-y-auto transition-transform duration-300 ease-in-out'>
            <div className='px-4 py-6'>
              <div className='flex justify-end'>
                <button
                  onClick={closeSidebar}
                  className='text-xl font-bold text-gray-500 hover:text-gray-700 cursor-pointer'
                >
                  <FontAwesomeIcon icon={faTimes} size='xl' />
                </button>
              </div>

              <ul className='space-y-8'>
                <img src='https://ik.imagekit.io/jaromjery/international%20tour%20image/logo.svg?updatedAt=1703839029753' alt='logo' className='mx-auto ' />
                <li className='text-xl font-semibold hover:underline cursor-pointer'>
                  <h2>Appointment</h2>
                </li>
                <li className='text-xl block md:hidden font-semibold hover:underline cursor-pointer'>
                  <h2>Home</h2>
                </li>
                <li className='text-xl font-semibold block md:hidden hover:underline cursor-pointer'>
                  <h2> Setting  <FontAwesomeIcon icon={faCog} /></h2>
                </li>
                <li className='text-xl font-semibold block md:hidden hover:underline cursor-pointer'>
                  <h2> Profile  <FontAwesomeIcon icon={faUser} /> </h2>
                </li>
                <li className='text-xl font-semibold hover:underline cursor-pointer'>
                  <h2>Register <FontAwesomeIcon icon={faIdCard} /></h2>
                </li>
                <li className='text-xl font-semibold hover:underline cursor-pointer'>
                  <h2>Patient</h2>
                </li>
                <li className='text-xl font-semibold hover:underline cursor-pointer'>
                  <h2>Messages</h2>
                </li>
                <li className='text-xl font-semibold hover:underline cursor-pointer'>
                  <h2>Logout</h2>
                </li>
               
                
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
