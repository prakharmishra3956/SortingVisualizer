import React from "react";

const About = () => {
  return (
    <div className="p-8">
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h1 className="text-2xl font-bold mb-2">
          About the Sorting Visualizer Project
        </h1>
        <p className="text-gray-500 mb-4">
          A college project to demonstrate various sorting algorithms
        </p>
        <p className="text-gray-700">
          This Sorting Visualizer is an interactive web application designed to
          help students and enthusiasts understand how different sorting
          algorithms work. By visualizing the sorting process, users can gain
          insights into the efficiency and behavior of various algorithms.
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Algorithms Demonstrated</h2>
        <div className="flex flex-wrap gap-2 cursor-pointer">
          <span className="bg-gray-200 text-gray-950 px-3 py-1 rounded-full hover:text-blue-500 hover:scale-110 hover:bg-slate-100 transition-all">
            Bubble Sort
          </span>
          <span className="bg-gray-200 text-gray-950 px-3 py-1 rounded-full hover:text-blue-500 hover:scale-110 hover:bg-slate-100 transition-all">
            Selection Sort
          </span>
          <span className="bg-gray-200 text-gray-950 px-3 py-1 rounded-full hover:text-blue-500 hover:scale-110 hover:bg-slate-100 transition-all">
            Insertion Sort
          </span>
          <span className="bg-gray-200 text-gray-950 px-3 py-1 rounded-full hover:text-blue-500 hover:scale-110 hover:bg-slate-100 transition-all">
            Merge Sort
          </span>
          <span className="bg-gray-200 text-gray-950 px-3 py-1 rounded-full hover:text-blue-500 hover:scale-110 hover:bg-slate-100 transition-all">
            Quick Sort
          </span>
          <span className="bg-gray-200 text-gray-950 px-3 py-1 rounded-full hover:text-blue-500 hover:scale-110 hover:bg-slate-100 transition-all">
            Heap Sort
          </span>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4">Project Purpose</h2>
        <ul className="list-disc list-inside">
          <li>Visualize how different sorting algorithms operate on data</li>
          <li>Compare the efficiency of various sorting techniques</li>
          <li>
            Provide an interactive learning tool for computer science students
          </li>
          <li>Demonstrate practical application of algorithmic concepts</li>
        </ul>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">About the Developer</h2>
        <p className="mb-4">
          This project was developed by Prince Rai along with team members Satyam Tripathi, Om Malviya, Rishi Yadav and Prakhar Mishra as part of the B.tech Mini Project
          at <strong> PSIT</strong>. It showcases the application of data structures
          and algorithms concepts learned throughout the course.
        </p>
        <p>
          For more information or to view the source code, please visit the
          project's{" "}
          <a href="https://github.com/PrinceRai1/SortViz" className="text-blue-500">
            GitHub repository
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default About;

