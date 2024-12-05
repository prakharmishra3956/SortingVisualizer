import React from 'react';

const QuickSort = () => {
  return (
    <div>
      {/* Header */}
      <header className="text-blue-500  text-center py-6">
        <h1 className="text-4xl font-bold">Quick Sort Algorithm</h1>
      </header>

      {/* Main Container */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          
          {/* Introduction Section */}
          <h2 className="text-2xl text-blue-500 border-b-2 border-gray-300 pb-2 mb-6">Introduction to Quick Sort</h2>
          <p className="mb-4">
            Quick Sort is an efficient, comparison-based sorting algorithm. It uses the divide-and-conquer approach to sort elements by partitioning the array and then recursively sorting the partitions.
          </p>
          <p className="mb-6">
            It has a time complexity of O(n log n) on average, making it very efficient for large datasets.
          </p>

          {/* How Quick Sort Works */}
          <h2 className="text-2xl text-blue-500 border-b-2 border-gray-300 pb-2 mb-6">How Quick Sort Works</h2>
          <p className="mb-4">The algorithm picks a pivot element and partitions the array such that elements smaller than the pivot are on the left and larger elements on the right.</p>

          {/* Steps of Quick Sort */}
          <h2 className="text-2xl text-blue-500 border-b-2 border-gray-300 pb-2 mb-6">Steps of Quick Sort</h2>
          <p className="mb-4">Let's use the following array as an example:</p>
          <pre className="bg-gray-800 text-white p-4 rounded-lg mb-4">[10, 80, 30, 90, 40, 50, 70]</pre>

          <ol className="list-decimal ml-5 mb-6">
            <li className="mb-2">Select a pivot (e.g., 50), partition the array, and swap elements:
              <pre className="bg-gray-800 text-white p-4 rounded-lg mb-2">[10, 30, 40, 50, 90, 80, 70]</pre>
            </li>
            <li className="mb-2">Recursively apply the same process to the sub-arrays on the left and right of the pivot.</li>
          </ol>

          {/* Python Code Example */}
          <h2 className="text-2xl text-blue-500 border-b-2 border-gray-300 pb-2 mb-6">Quick Sort in Code (Python)</h2>
          <pre className="bg-gray-800 text-white p-4 rounded-lg mb-4">
{`def partition(arr, low, high):
    i = low - 1
    pivot = arr[high]
    for j in range(low, high):
        if arr[j] <= pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1

def quick_sort(arr, low, high):
    if low < high:
        pi = partition(arr, low, high)
        quick_sort(arr, low, pi - 1)
        quick_sort(arr, pi + 1, high)

arr = [10, 80, 30, 90, 40, 50, 70]
quick_sort(arr, 0, len(arr) - 1)
print("Sorted array:", arr)`}
          </pre>
          <p className="mb-4">Output:</p>
          <pre className="bg-gray-800 text-white p-4 rounded-lg mb-6">Sorted array: [10, 30, 40, 50, 70, 80, 90]</pre>

          {/* Time Complexity */}
          <h2 className="text-2xl text-blue-500 border-b-2 border-gray-300 pb-2 mb-6">Time Complexity</h2>
          <ul className="list-disc ml-5 mb-6">
            <li><strong>Best case:</strong> O(n log n)</li>
            <li><strong>Average case:</strong> O(n log n)</li>
            <li><strong>Worst case:</strong> O(n²) – when the pivot is the smallest or largest element.</li>
          </ul>

          {/* Advantages & Disadvantages */}
          <h2 className="text-2xl text-blue-500 border-b-2 border-gray-300 pb-2 mb-6">Advantages</h2>
          <ul className="list-disc ml-5 mb-6">
            <li>Efficient for large datasets</li>
            <li>In-place sorting</li>
          </ul>

          <h2 className="text-2xl text-blue-500 border-b-2 border-gray-300 pb-2 mb-6">Disadvantages</h2>
          <ul className="list-disc ml-5">
            <li>O(n²) in the worst case</li>
            <li>Not stable</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QuickSort;
