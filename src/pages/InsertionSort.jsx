import React from 'react';

const InsertionSort = () => {
  return (
    <div>
      {/* Header */}
      <header className="text-blue-500  text-center py-6">
        <h1 className="text-4xl font-bold">Insertion Sort Algorithm</h1>
      </header>

      {/* Main Container */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          
          {/* Introduction Section */}
          <h2 className="text-2xl text-blue-500 border-b-2 border-gray-300 pb-2 mb-6">Introduction to Insertion Sort</h2>
          <p className="mb-4">
            Insertion Sort is a simple sorting algorithm that builds the sorted array one item at a time. It is much like sorting playing cards in your hand.
          </p>
          <p className="mb-6">
            It has a time complexity of O(n²), making it inefficient on large lists, but it performs well on small or nearly sorted data.
          </p>

          {/* How Insertion Sort Works */}
          <h2 className="text-2xl text-blue-500 border-b-2 border-gray-300 pb-2 mb-6">How Insertion Sort Works</h2>
          <p className="mb-4">The algorithm iterates through the list, comparing the current element to the already sorted portion and inserting it in the correct position.</p>

          {/* Steps of Insertion Sort */}
          <h2 className="text-2xl text-blue-500 border-b-2 border-gray-300 pb-2 mb-6">Steps of Insertion Sort</h2>
          <p className="mb-4">Let's use the following array as an example:</p>
          <pre className="bg-gray-800 text-white p-4 rounded-lg mb-4">[12, 11, 13, 5, 6]</pre>

          <ol className="list-decimal ml-5 mb-6">
            <li className="mb-2">Start with the second element (11) and compare it with the first element (12):
              <pre className="bg-gray-800 text-white p-4 rounded-lg mb-2">[11, 12, 13, 5, 6]</pre>
            </li>
            <li className="mb-2">Move to the third element (13), it is already in the correct position:
              <pre className="bg-gray-800 text-white p-4 rounded-lg mb-2">[11, 12, 13, 5, 6]</pre>
            </li>
            <li className="mb-2">Compare the fourth element (5) and insert it into the correct position:
              <pre className="bg-gray-800 text-white p-4 rounded-lg mb-2">[5, 11, 12, 13, 6]</pre>
            </li>
            <li className="mb-2">Continue with the last element (6), placing it in its correct position:
              <pre className="bg-gray-800 text-white p-4 rounded-lg mb-2">[5, 6, 11, 12, 13]</pre>
            </li>
          </ol>

          {/* Python Code Example */}
          <h2 className="text-2xl text-blue-500 border-b-2 border-gray-300 pb-2 mb-6">Insertion Sort in Code (Python)</h2>
          <pre className="bg-gray-800 text-white p-4 rounded-lg mb-4">
{`def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and key < arr[j]:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key

arr = [12, 11, 13, 5, 6]
insertion_sort(arr)
print("Sorted array:", arr)`}
          </pre>
          <p className="mb-4">Output:</p>
          <pre className="bg-gray-800 text-white p-4 rounded-lg mb-6">Sorted array: [5, 6, 11, 12, 13]</pre>

          {/* Time Complexity */}
          <h2 className="text-2xl text-blue-500 border-b-2 border-gray-300 pb-2 mb-6">Time Complexity</h2>
          <ul className="list-disc ml-5 mb-6">
            <li><strong>Best case:</strong> O(n) – when the array is already sorted.</li>
            <li><strong>Average case:</strong> O(n²) – for random order arrays.</li>
            <li><strong>Worst case:</strong> O(n²) – when the array is sorted in reverse.</li>
          </ul>

          {/* Advantages & Disadvantages */}
          <h2 className="text-2xl text-blue-500 border-b-2 border-gray-300 pb-2 mb-6">Advantages</h2>
          <ul className="list-disc ml-5 mb-6">
            <li>Efficient for small data sets</li>
            <li>Simple and easy to implement</li>
          </ul>

          <h2 className="text-2xl text-blue-500 border-b-2 border-gray-300 pb-2 mb-6">Disadvantages</h2>
          <ul className="list-disc ml-5">
            <li>Inefficient for large datasets</li>
            <li>O(n²) time complexity for average and worst case</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InsertionSort;
