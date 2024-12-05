import React, { useEffect, useState } from 'react';
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';
import Logo from "../assets/Logo.png"
import { root } from 'postcss';


const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [width, setWidth] = useState(0);
  

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    setWidth("100")
  };
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  
  return (
    <nav className="flex justify-between items-center p-8">
      <div className="flex items-center ">
        <a href="/" className="text-lg font-bold text-gray-800 hover:text-gray-600">
          <img src={Logo} alt="LOGO"  className='w-32 h-16 bg-transparent drop-shadow-md'/>
        </a>
      </div>
      <ul className="hidden md:flex justify-between items-center solway">
        <li className="mr-6">
          <Link to="/" className="text-gray-800 font-medium hover:text-gray-600">
            Home
          </Link>
        </li>
        <li className="mr-6">
          <Link to="/about" className="text-gray-800 font-medium hover:text-gray-600">
            About
          </Link>
        </li>
        <Dropdown />
      </ul>
      <button className="md:hidden block w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-full"
      onClick={toggleMobileMenu}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
        {isMobileMenuOpen && (
        <ul className="md:hidden h-full block absolute top-0 left-0 p-10 z-10" style={{
          width: `${width}vw`,
          backgroundColor: 'lightblue',
          transition: 'width 0.5s', // Smooth transition
        }}>
          <li className="block text-[#2d2e32] hover:text-blue-600">
            <button className="text-gray-800 text-4xl font-medium hover:text-gray-600" onClick={toggleMobileMenu}>
              ×
            </button>
          </li>
          <li className="block text-[#2d2e32] hover:text-blue-600 my-4">
            <Link to="/" className="text-gray-800 font-medium hover:text-gray-600" >
              Home
            </Link>
          </li>
          <li className="block text-[#2d2e32] hover:text-blue-600 my-4">
            <Link to="/about" className="text-gray-800 font-medium hover:text-gray-600" >
              About
            </Link>
          </li>
        
            <li >
              <Link
                to="/bubblesort"
                className="block px-4 py-2 text-gray-800 hover:text-blue-600"
              >
                Bubble Sort
              </Link>
            </li>
            <li >
              <Link
                to="/selectionsort"
                className="block px-4 py-2 text-gray-800 hover:text-blue-600"
              >
                Selection Sort
              </Link>
            </li>
            <li >
              <Link
                to="/insertionsort"
                className="block px-4 py-2 text-gray-800 hover:text-blue-600"
              >
                Insertion Sort
              </Link>
            </li>
            <li >
              <Link
                to="/mergesort"
                className="block px-4 py-2 text-gray-800 hover:text-blue-600"
              >
                Merge Sort
              </Link>
            </li>
            <li >
              <Link
                to="/quicksort"
                className="block px-4 py-2 text-gray-800 hover:text-blue-600"
              >
                Quick Sort
              </Link>
            </li>
            <li >
              <Link
                to="/heapsort"
                className="block px-4 py-2 text-gray-800 hover:text-blue-600"
              >
                Heap Sort
              </Link>
            </li>
         
            
      
        </ul>
      )}
      </button>
    </nav>
  );
};

export default Navbar;