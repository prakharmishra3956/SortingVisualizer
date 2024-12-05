import React from 'react';

const MergeSort = () => {
  return (
    <div>
      {/* Header */}
      <header className="text-blue-500 text-center py-6">
        <h1 className="text-4xl font-bold">Merge Sort Algorithm</h1>
      </header>

      {/* Main Container */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          
          {/* Introduction Section */}
          <h2 className="text-2xl text-blue-500 border-b-2 border-gray-300 pb-2 mb-6">Introduction to Merge Sort</h2>
          <p className="mb-4">
            Merge Sort is an efficient, stable, comparison-based sorting algorithm that uses the divide-and-conquer approach. It divides the array into two halves, recursively sorts each half, and then merges the sorted halves.
          </p>
          <p className="mb-6">
            Merge Sort has a time complexity of O(n log n) and is particularly efficient for large datasets.
          </p>

          {/* How Merge Sort Works */}
          <h2 className="text-2xl text-blue-500 border-b-2 border-gray-300 pb-2 mb-6">How Merge Sort Works</h2>
          <p className="mb-4">The algorithm recursively splits the array into two halves, sorts them, and merges the sorted halves into a single sorted array.</p>

          {/* Steps of Merge Sort */}
          <h2 className="text-2xl text-blue-500 border-b-2 border-gray-300 pb-2 mb-6">Steps of Merge Sort</h2>
          <p className="mb-4">Let's use the following array as an example:</p>
          <pre className="bg-gray-800 text-white p-4 rounded-lg mb-4">[38, 27, 43, 3, 9, 82, 10]</pre>

          <ol className="list-decimal ml-5 mb-6">
            <li className="mb-2">Divide the array into two halves:
              <pre className="bg-gray-800 text-white p-4 rounded-lg mb-2">[38, 27, 43] and [3, 9, 82, 10]</pre>
            </li>
            <li className="mb-2">Recursively divide the halves until each half contains a single element.</li>
            <li className="mb-2">Merge the sorted halves back together:
              <pre className="bg-gray-800 text-white p-4 rounded-lg mb-2">[3, 9, 10, 27, 38, 43, 82]</pre>
            </li>
          </ol>

          {/* Python Code Example */}
          <h2 className="text-2xl text-blue-500 border-b-2 border-gray-300 pb-2 mb-6">Merge Sort in Code (Python)</h2>
          <pre className="bg-gray-800 text-white p-4 rounded-lg mb-4">
{`def merge_sort(arr):
    if len(arr) > 1:
        mid = len(arr) // 2
        L = arr[:mid]
        R = arr[mid:]

        merge_sort(L)
        merge_sort(R)

        i = j = k = 0
        while i < len(L) and j < len(R):
            if L[i] < R[j]:
                arr[k] = L[i]
                i += 1
            else:
                arr[k] = R[j]
                j += 1
            k += 1

        while i < len(L):
            arr[k] = L[i]
            i += 1
            k += 1

        while j < len(R):
            arr[k] = R[j]
            j += 1
            k += 1

arr = [38, 27, 43, 3, 9, 82, 10]
merge_sort(arr)
print("Sorted array:", arr)`}
          </pre>
          <p className="mb-4">Output:</p>
          <pre className="bg-gray-800 text-white p-4 rounded-lg mb-6">Sorted array: [3, 9, 10, 27, 38, 43, 82]</pre>

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
            <li>Stable sort</li>
            <li>Efficient for large datasets</li>
          </ul>

          <h2 className="text-2xl text-blue-500 border-b-2 border-gray-300 pb-2 mb-6">Disadvantages</h2>
          <ul className="list-disc ml-5">
            <li>Requires additional space for merging</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MergeSort;
