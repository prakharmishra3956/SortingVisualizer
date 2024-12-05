import React from 'react';

const SelectionSort = () => {
  return (
    <div>
      {/* Header */}
      <header className="text-blue-500 bg-white text-center py-6">
        <h1 className="text-4xl font-bold">Selection Sort Algorithm</h1>
      </header>

      {/* Main Container */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          
          {/* Introduction Section */}
          <h2 className="text-2xl text-blue-500 border-b-2 border-gray-300 pb-2 mb-6">Introduction to Selection Sort</h2>
          <p className="mb-4">
            Selection Sort is a simple comparison-based sorting algorithm. It repeatedly selects the minimum element from an unsorted portion of the array and places it in the sorted portion.
          </p>
          <p className="mb-6">
            This algorithm has a time complexity of O(n²) and is less efficient on large lists but simple to implement and understand.
          </p>

          {/* How Selection Sort Works */}
          <h2 className="text-2xl text-blue-500 border-b-2 border-gray-300 pb-2 mb-6">How Selection Sort Works</h2>
          <p className="mb-4">The process of Selection Sort involves selecting the smallest element from the unsorted portion and swapping it with the first unsorted element.</p>

          {/* Steps of Selection Sort */}
          <h2 className="text-2xl text-blue-500 border-b-2 border-gray-300 pb-2 mb-6">Steps of Selection Sort</h2>
          <p className="mb-4">Let's use the following array as an example:</p>
          <pre className="bg-gray-800 text-white p-4 rounded-lg mb-4">[64, 25, 12, 22, 11]</pre>

          <ol className="list-decimal ml-5 mb-6">
            <li className="mb-2">Find the minimum element (11) in the unsorted array:
              <pre className="bg-gray-800 text-white p-4 rounded-lg mb-2">[11, 25, 12, 22, 64]</pre>
            </li>
            <li className="mb-2">Move it to the front, making it part of the sorted array:
              <pre className="bg-gray-800 text-white p-4 rounded-lg mb-2">[11, 25, 12, 22, 64]</pre>
            </li>
            <li className="mb-2">Repeat the process for the remaining unsorted elements:
              <pre className="bg-gray-800 text-white p-4 rounded-lg mb-2">[11, 12, 25, 22, 64]</pre>
            </li>
            <li className="mb-2">Keep moving the minimum element to the front until the entire array is sorted:
              <pre className="bg-gray-800 text-white p-4 rounded-lg mb-2">[11, 12, 22, 25, 64]</pre>
            </li>
          </ol>

          {/* Python Code Example */}
          <h2 className="text-2xl text-blue-500 border-b-2 border-gray-300 pb-2 mb-6">Selection Sort in Code (Python)</h2>
          <pre className="bg-gray-800 text-white p-4 rounded-lg mb-4">
{`def selection_sort(arr):
    for i in range(len(arr)):
        min_idx = i
        for j in range(i+1, len(arr)):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]

arr = [64, 25, 12, 22, 11]
selection_sort(arr)
print("Sorted array:", arr)`}
          </pre>
          <p className="mb-4">Output:</p>
          <pre className="bg-gray-800 text-white p-4 rounded-lg mb-6">Sorted array: [11, 12, 22, 25, 64]</pre>

          {/* Time Complexity */}
          <h2 className="text-2xl text-blue-500 border-b-2 border-gray-300 pb-2 mb-6">Time Complexity</h2>
          <ul className="list-disc ml-5 mb-6">
            <li><strong>Best case:</strong> O(n²) – when the array is already sorted.</li>
            <li><strong>Average case:</strong> O(n²) – for random order arrays.</li>
            <li><strong>Worst case:</strong> O(n²) – when the array is sorted in reverse.</li>
          </ul>

          {/* Advantages & Disadvantages */}
          <h2 className="text-2xl text-blue-500 border-b-2 border-gray-300 pb-2 mb-6">Advantages</h2>
          <ul className="list-disc ml-5 mb-6">
            <li>Simple to implement</li>
            <li>In-place sorting (requires no extra space)</li>
          </ul>

          <h2 className="text-2xl text-blue-500 border-b-2 border-gray-300 pb-2 mb-6">Disadvantages</h2>
          <ul className="list-disc ml-5">
            <li>Inefficient for large datasets</li>
            <li>O(n²) time complexity for all cases</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SelectionSort;
