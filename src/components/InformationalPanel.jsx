import React from "react";

const complexities = {
  bubbleSort: {
    time: {
      best: "O(n)",
      average: "O(n²)",
      worst: "O(n²)",
    },
    space: "O(1)",
  },
  selectionSort: {
    time: {
      best: "O(n²)",
      average: "O(n²)",
      worst: "O(n²)",
    },
    space: "O(1)",
  },
  insertionSort: {
    time: {
      best: "O(n)",
      average: "O(n²)",
      worst: "O(n²)",
    },
    space: "O(1)",
  },
  mergeSort: {
    time: {
      best:"O(n logn)",
      average: "O(n logn)",
      worst: "O(n logn)",
    },
    space: "O(n)",
  },
  quickSort: {
    time: {
      best:"O(n logn)",
      average: "O(n logn)",
      worst: "O(n²)",
    },
    space: "O(log n)",
  },
  heapSort: {
    time: {
      best: "O(n logn)",
      average: "O(n logn)",
      worst: "O(n logn)",
    },
    space: "O(1)",
  },
};

const InformationalPanel = ({ comparisons, swaps, speed, algorithm }) => {
  const complexity = complexities[algorithm] || {}
  return (
    <div className="bg-white rounded-lg">
      <h2 className="text-2xl font-bold rem text-center mb-4">Statistics</h2>
      <div className="flex justify-around mb-6 flex-col md:flex-row text-center">
        <div className="w-42 flex gap-6 my-1 md:my-0 justify-center border-0 outline-none bg-[#f2f2f2] rounded p-6">
          <p className="rem">Comparisons :</p>
          <p className="text-xl solway">{comparisons}</p>
        </div>
        <div className="flex gap-6 my-1 md:my-0 justify-center border-0 outline-none bg-[#f2f2f2] rounded py-6 px-14">
          <p className="rem">Swaps :</p>
          <p className="text-xl solway">{swaps}</p>
        </div>
        <div className="min-w-fit flex gap-6 my-1 md:my-0 justify-center border-0 outline-none bg-[#f2f2f2] rounded p-6">
          <p className="rem">Elapsed Time :</p>
          <p className="text-xl solway">{speed}ms</p>
        </div>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <h2 className="text-lg font-semibold my-4 rem">Algorithm Complexity</h2>
        <p className="solway">
          <span className="font-semibold rem">Current Algorithm:- </span>
          {algorithm.toUpperCase()}
        </p>
        <p className="mt-2 solway">
          <span className="font-semibold rem">Time Complexity:</span>
        </p>
        <ul className="list-disc list-inside ml-4 solway">
          <li>Best: {complexity.time ? complexity.time.best : "N/A"}</li>
          <li>Average: {complexity.time ? complexity.time.average : "N/A"}</li>
          <li>Worst: {complexity.time ? complexity.time.worst : "N/A"}</li>
          
        </ul>
        <p className="mt-2 solway font-semibold">
          <span className="rem">Space Complexity:</span> {complexity.space || "N/A"}
        </p>
      </div>
    </div>
  );
};

export default InformationalPanel;
