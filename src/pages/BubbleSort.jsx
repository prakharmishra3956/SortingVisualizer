import React from "react";

const BubbleSort = () => {
  return (
    <>
      <div className="min-h-screen">
        <header className="text-blue-500 text-center py-5">
          <h1 className="text-3xl md:text-4xl font-bold">
            Bubble Sort Algorithm
          </h1>
        </header>

        <div className="container mx-auto p-5">
          <div className="bg-white p-8 shadow-lg rounded-lg">
            <h2 className="text-2xl text-blue-500 border-b-2 border-gray-300 pb-3 mb-5">
              Introduction to Bubble Sort
            </h2>
            <p className="text-lg mb-4">
              Bubble Sort is a simple sorting algorithm that repeatedly steps
              through the list, compares adjacent elements, and swaps them if
              they are in the wrong order. The pass through the list is repeated
              until no swaps are needed, which indicates that the list is
              sorted.
            </p>
            <p className="text-lg mb-4">
              This algorithm is known for its simplicity but is inefficient on
              large lists, with an average-case time complexity of O(n²). It is
              a stable sort, meaning that it maintains the relative order of
              equal elements.
            </p>

            <h2 className="text-2xl text-blue-500 border-b-2 border-gray-300 pb-3 mb-5">
              How Bubble Sort Works
            </h2>
            <p className="text-lg mb-4">
              In Bubble Sort, each pair of adjacent elements is compared, and
              the elements are swapped if they are in the wrong order. The
              process is repeated until no more swaps are required, which means
              the list is sorted.
            </p>

            <h2 className="text-2xl text-blue-500 border-b-2 border-gray-300 pb-3 mb-5">
              Steps of Bubble Sort
            </h2>
            <p className="text-lg mb-4">
              Let's use the following array as an example:
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded mb-5">
              [5, 3, 8, 4, 2]
            </pre>
            <ol className="list-decimal list-inside space-y-4">
              <li>
                Start with the first two elements (5 and 3). Since 5 {"<"} 3,
                swap them:
                <pre className="bg-gray-800 text-white p-4 rounded mt-2">
                  [3, 5, 8, 4, 2]
                </pre>
              </li>
              <li>
                Compare the next pair (5 and 8). Since 5 {"<"} 8, no swap is
                needed:
                <pre className="bg-gray-800 text-white p-4 rounded mt-2">
                  [3, 5, 8, 4, 2]
                </pre>
              </li>
              <li>
                Compare (8 and 4). Since 8 {"<"} 4, swap them:
                <pre className="bg-gray-800 text-white p-4 rounded mt-2">
                  [3, 5, 4, 8, 2]
                </pre>
              </li>
              <li>
                Compare (8 and 2). Since 8 {"<"} 2, swap them:
                <pre className="bg-gray-800 text-white p-4 rounded mt-2">
                  [3, 5, 4, 2, 8]
                </pre>
              </li>
              <li>
                Now the largest element (8) is in the correct position. Repeat
                the process for the remaining elements until the entire array is
                sorted.
              </li>
            </ol>

            <h2 className="text-2xl text-blue-500 border-b-2 border-gray-300 pb-3 mb-5">
              Bubble Sort in Code (Python)
            </h2>
            <pre className=" text-white rounded mb-5">
                <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*zCzRI2juWOjCU-8D3qOGZw.png1" alt="/"  />
            </pre>

            <h2 className="text-2xl text-blue-500 border-b-2 border-gray-300 pb-3 my-5">
              Time Complexity
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Best case:</strong> O(n) – when the array is already
                sorted.
              </li>
              <li>
                <strong>Average case:</strong> O(n²) – when the elements are in
                random order.
              </li>
              <li>
                <strong>Worst case:</strong> O(n²) – when the elements are
                sorted in reverse order.
              </li>
            </ul>

            <h2 className="text-2xl text-blue-500 border-b-2 border-gray-300 pb-3 my-5">
              Advantages of Bubble Sort
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Simple and easy to implement.</li>
              <li>Good for small data sets.</li>
              <li>Stable sort, maintaining the order of equal elements.</li>
            </ul>

            <h2 className="text-2xl text-blue-500 border-b-2 border-gray-300 pb-3 my-5">
              Disadvantages of Bubble Sort
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Not efficient for large data sets due to its O(n²) time
                complexity.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default BubbleSort;
