import React from 'react';

const HeapSort = () => {
  return (
    <>
      {/* Header */}
      <header className="text-blue-500 bg-white text-center py-6">
        <h1 className="text-4xl font-bold">Heap Sort Algorithm</h1>
      </header>

      {/* Main Container */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          
          {/* Introduction Section */}
          <h2 className="text-2xl text-blue-500 border-b-2 border-gray-300 pb-2 mb-6">Introduction to Heap Sort</h2>
          <p className="mb-4">
            Heap Sort is a comparison-based sorting algorithm that uses a binary heap data structure. It converts the input array into a heap structure, then repeatedly extracts the maximum (or minimum) element from the heap and rebuilds the heap until all elements are sorted.
          </p>
          <p className="mb-6">
            This algorithm has an average-case time complexity of O(n log n) and is particularly efficient for large datasets.
          </p>

          {/* How Heap Sort Works */}
          <h2 className="text-2xl text-blue-500 border-b-2 border-gray-300 pb-2 mb-6">How Heap Sort Works</h2>
          <p className="mb-4">The process of Heap Sort involves two main phases: building a heap from the array and then sorting the array by repeatedly extracting elements from the heap.</p>

          {/* Steps of Heap Sort */}
          <h2 className="text-2xl text-blue-500 border-b-2 border-gray-300 pb-2 mb-6">Steps of Heap Sort</h2>
          <p className="mb-4">Let's use the following array as an example:</p>
          <pre className="bg-gray-800 text-white p-4 rounded-lg mb-4">[12, 11, 13, 5, 6, 7]</pre>

          <ol className="list-decimal ml-5 mb-6">
            <li className="mb-2">Build a max heap from the input array:
              <pre className="bg-gray-800 text-white p-4 rounded-lg mb-2">[13, 11, 12, 5, 6, 7]</pre>
            </li>
            <li className="mb-2">Swap the root of the heap (13) with the last element of the heap (7):
              <pre className="bg-gray-800 text-white p-4 rounded-lg mb-2">[7, 11, 12, 5, 6, 13]</pre>
            </li>
            <li className="mb-2">Rebuild the heap:
              <pre className="bg-gray-800 text-white p-4 rounded-lg mb-2">[12, 11, 7, 5, 6]</pre>
            </li>
            <li className="mb-2">Repeat the process of swapping and rebuilding until all elements are sorted:
              <pre className="bg-gray-800 text-white p-4 rounded-lg mb-2">[5, 6, 7, 11, 12, 13]</pre>
            </li>
          </ol>

          {/* Python Code Example */}
          <h2 className="text-2xl text-blue-500 border-b-2 border-gray-300 pb-2 mb-6">Heap Sort in Code (Python)</h2>
          <pre className="bg-gray-800 text-white p-4 rounded-lg mb-4">
{`def heapify(arr, n, i):
    largest = i
    left = 2 * i + 1
    right = 2 * i + 2

    if left < n and arr[left] > arr[largest]:
        largest = left

    if right < n and arr[right] > arr[largest]:
        largest = right

    if largest != i:
        arr[i], arr[largest] = arr[largest], arr[i]
        heapify(arr, n, largest)

def heap_sort(arr):
    n = len(arr)

    for i in range(n // 2 - 1, -1, -1):
        heapify(arr, n, i)

    for i in range(n - 1, 0, -1):
        arr[i], arr[0] = arr[0], arr[i]
        heapify(arr, i, 0)

arr = [12, 11, 13, 5, 6, 7]
heap_sort(arr)
print("Sorted array:", arr)`}
          </pre>
          <p className="mb-4">Output:</p>
          <pre className="bg-gray-800 text-white p-4 rounded-lg mb-6">Sorted array: [5, 6, 7, 11, 12, 13]</pre>

          {/* Time Complexity */}
          <h2 className="text-2xl text-blue-500 border-b-2 border-gray-300 pb-2 mb-6">Time Complexity</h2>
          <ul className="list-disc ml-5 mb-6">
            <li><strong>Best case:</strong> O(n log n)</li>
            <li><strong>Average case:</strong> O(n log n)</li>
            <li><strong>Worst case:</strong> O(n log n)</li>
          </ul>

          {/* Advantages & Disadvantages */}
          <h2 className="text-2xl text-blue-500 border-b-2 border-gray-300 pb-2 mb-6">Advantages</h2>
          <ul className="list-disc ml-5 mb-6">
            <li>In-Place Sorting</li>
            <li>Not Recursive</li>
          </ul>

          <h2 className="text-2xl text-blue-500 border-b-2 border-gray-300 pb-2 mb-6">Disadvantages</h2>
          <ul className="list-disc ml-5">
            <li>Not Stable</li>
            <li>Overhead</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HeapSort;
