import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Dropdown = () => {
  // State to manage hover
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      {/* Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 text-white px-4 py-2 rounded-md focus:outline-none hover:bg-blue-700 transition duration-300"
      >
        Documentation
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10"
        >
          <ul>
            <li className="hover:bg-gray-200">
              <Link
                to="/bubblesort"
                className="block px-4 py-2 text-gray-800 hover:text-blue-600"
              >
                Bubble Sort
              </Link>
            </li>
            <li className="hover:bg-gray-200">
              <Link
                to="/selectionsort"
                className="block px-4 py-2 text-gray-800 hover:text-blue-600"
              >
                Selection Sort
              </Link>
            </li>
            <li className="hover:bg-gray-200">
              <Link
                to="/insertionsort"
                className="block px-4 py-2 text-gray-800 hover:text-blue-600"
              >
                Insertion Sort
              </Link>
            </li>
            <li className="hover:bg-gray-200">
              <Link
                to="/mergesort"
                className="block px-4 py-2 text-gray-800 hover:text-blue-600"
              >
                Merge Sort
              </Link>
            </li>
            <li className="hover:bg-gray-200">
              <Link
                to="/quicksort"
                className="block px-4 py-2 text-gray-800 hover:text-blue-600"
              >
                Quick Sort
              </Link>
            </li>
            <li className="hover:bg-gray-200">
              <Link
                to="/heapsort"
                className="block px-4 py-2 text-gray-800 hover:text-blue-600"
              >
                Heap Sort
              </Link>
            </li>
         
            
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
