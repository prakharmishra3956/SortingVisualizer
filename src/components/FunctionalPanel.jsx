import React, { useEffect, useState } from "react";
import InformationalPanel from "./InformationalPanel";

export const FunctionalPanel = () => {
  const [arraySize, setArraySize] = useState(10);
  const [array, setArray] = useState([]);
  const [speed, setSpeed] = useState(100);
  const [comparisons, setComparisons] = useState(0);
  const [swaps, setSwaps] = useState(0);
  const [sorting,setSorting] = useState("Select Algorithm")
  const [algorithm, setAlgorithm] = useState("");

  const handleArraySizeChange = (event) => {
    const size = parseInt(event.target.value, 10);
    if (size >= 0) {
      setArraySize(size);
    }
  };
  const generateArray = () => {
    const newArray = Array.from(
      { length: arraySize },
      () => Math.floor(Math.random() * 100) + 20
    );
    setArray(newArray);
    setSwaps(0);
    setComparisons(0);
  };

  useEffect(() => {
    resetArray();
  }, []);

  // setSorting(algorithm?<p>Start Sorting</p>:<p>Select Alogorithm</p>)

  const resetArray = () => {
    const newArray = Array.from(
      { length: 10 },
      () => Math.floor(Math.random() * 100) + 20
    );
    setArray(newArray);
    setComparisons(0);
    setSwaps(0);
    setAlgorithm("")
  };

  const bubbleSort = async () => {
    let arr = [...array];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        setComparisons((prev) => prev + 1);
        if (arr[j] > arr[j + 1]) {
          // Swap elements
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          setArray([...arr]);
          setSwaps((prev) => prev + 1);
          await new Promise((resolve) => setTimeout(resolve, speed));
        }
      }
    }
  };
  const selectionSort = async () => {
    let arr = [...array];
    for (let i = 0; i < arr.length; i++) {
      let minIndex = i;
      for (let j = i + 1; j < arr.length; j++) {
        setComparisons((prev) => prev + 1);
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        const temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
        setArray([...arr]);
        setSwaps((prev) => prev + 1);
        await new Promise((resolve) => setTimeout(resolve, speed));
      }
    }
  };

  const mergeSort = async () => {
    let arr = [...array];
    await mergeSortHelper(arr, 0, arr.length - 1);
    setArray(arr);
  };

  const mergeSortHelper = async (arr, left, right) => {
    if (left >= right) return;
    const middle = Math.floor((left + right) / 2);
    await mergeSortHelper(arr, left, middle);
    await mergeSortHelper(arr, middle + 1, right);
    await merge(arr, left, middle, right);
  };

  const merge = async (arr, left, middle, right) => {
    const temp = [];
    let i = left,
      j = middle + 1;
    while (i <= middle && j <= right) {
      setComparisons((prev) => prev + 1);
      if (arr[i] <= arr[j]) {
        temp.push(arr[i++]);
      } else {
        temp.push(arr[j++]);
      }
    }
    while (i <= middle) temp.push(arr[i++]);
    while (j <= right) temp.push(arr[j++]);

    for (let i = left; i <= right; i++) {
      arr[i] = temp[i - left];
      setSwaps((prev) => prev + 1);
      setArray([...arr]);
      await new Promise((resolve) => setTimeout(resolve, speed));
    }
  };
  const quickSort = async () => {
    let arr = [...array];
    await quickSortHelper(arr, 0, arr.length - 1);
    setArray(arr);
  };

  const quickSortHelper = async (arr, low, high) => {
    if (low < high) {
      const pi = await partition(arr, low, high);
      await quickSortHelper(arr, low, pi - 1);
      await quickSortHelper(arr, pi + 1, high);
    }
  };

  const partition = async (arr, low, high) => {
    let pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
      setComparisons((prev) => prev + 1);
      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
        setSwaps((prev) => prev + 1);
        setArray([...arr]);
        await new Promise((resolve) => setTimeout(resolve, speed));
      }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    setSwaps((prev) => prev + 1);
    setArray([...arr]);
    await new Promise((resolve) => setTimeout(resolve, speed));
    return i + 1;
  };

  const insertionSort = async () => {
    let arr = [...array];
    for (let i = 1; i < arr.length; i++) {
      let key = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > key) {
        setComparisons((prev) => prev + 1);
        arr[j + 1] = arr[j];
        j--;
        setArray([...arr]);
        await new Promise((resolve) => setTimeout(resolve, speed));
      }
      arr[j + 1] = key;
      setSwaps((prev) => prev + 1);
      setArray([...arr]);
      await new Promise((resolve) => setTimeout(resolve, speed));
    }
  };

  const heapSort = async () => {
    let arr = [...array];
    let n = arr.length;

    // Build max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      await heapify(arr, n, i);
    }

    // Extract elements from heap
    for (let i = n - 1; i > 0; i--) {
      [arr[0], arr[i]] = [arr[i], arr[0]]; // Swap
      setSwaps((prev) => prev + 1);
      setArray([...arr]);
      await new Promise((resolve) => setTimeout(resolve, speed));

      await heapify(arr, i, 0);
    }
    setArray(arr);
  };

  const heapify = async (arr, n, i) => {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) {
      setComparisons((prev) => prev + 1);
      largest = left;
    }

    if (right < n && arr[right] > arr[largest]) {
      setComparisons((prev) => prev + 1);
      largest = right;
    }

    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]]; // Swap
      setSwaps((prev) => prev + 1);
      setArray([...arr]);
      await new Promise((resolve) => setTimeout(resolve, speed));

      await heapify(arr, n, largest);
    }
  };

  // Function to handle the sorting based on the selected algorithm
  const runSort = () => {
    switch (algorithm) {
      case "bubbleSort":
        bubbleSort();
        break;
      case "selectionSort":
        selectionSort();
        break;
      case "mergeSort":
        mergeSort();
        break;
      case "quickSort":
        quickSort();
        break;
      case "insertionSort":
        insertionSort();
        break;
      case "heapSort":
        heapSort();
        break;
      default:
        break;
    }

  };

  return (
    <main className="px-8">
      <div class="bg-white my-6 text-xs md:text-base">
        <div class="flex justify-between items-center mb-4 flex-col md:flex-row">
          <button
            class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 m-2 solway hover:-translate-y-1 hover:scale-110 ease-in duration-300"
            onClick={generateArray}
          >
            Generate
          </button>
          <div class="flex items-center space-x-2">
            <label
              for="arraySize"
              class="text-gray-700 text-pretty mr-1 solway"
            >
              Array Size:{arraySize}
            </label>
            <input
              type="range"
              class="md:w-64 w-44 solway"
              id="arraySize"
              min="3"
              max="15"
              value={arraySize}
              onChange={handleArraySizeChange}
            />
          </div>
          <div class="flex items-center space-x-2 m-2">
            <label for="Speed" class="text-gray-700 text-pretty mr-1 solway">
              Speed :{speed} ms
            </label>
            <input
              type="range"
              id="Speed"
              class="md:w-64 w-44 solway"
              min="1"
              max="500"
              value={speed}
              onChange={(e) => setSpeed(e.target.value)}
            />
          </div>
        </div>

        <div class="flex justify-between items-center flex-col md:flex-row">
          <select
            class="border border-gray-300 rounded outline-none px-6 py-2 m-2 solway"
            onChange={(e) => setAlgorithm(e.target.value)}
            value={algorithm}
          >
            <option className="solway outline-none " value="">
              Select Algorithm
            </option>
            <option className="solway outline-none " value="bubbleSort">
              Bubble Sort
            </option>
            <option className="solway outline-none " value="selectionSort">
              Selection Sort
            </option>
            <option className="solway outline-none " value="insertionSort">
              Insertion Sort
            </option>
            <option className="solway outline-none " value="mergeSort">
              Merge Sort
            </option>
            <option className="solway outline-none " value="quickSort">
              Quick Sort
            </option>
            <option className="solway outline-none " value="heapSort">
              Heap Sort
            </option>

            {/* Add other algorithm options as needed  */}
          </select>
          <button
            class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 hover:-translate-y-1 hover:scale-110 m-2 solway ease-in duration-300"
            onClick={runSort}
          >
           {algorithm ? `Start Sorting` : 'Select Algorithm'}
          </button>
          <button
            class="bg-white hover:text-white text-gray-700 border border-gray-300 px-4 py-2 rounded hover:bg-red-600 active:bg-red-600 hover:-translate-y-1 hover:scale-110 solway m-2 ease-in duration-300"
            onClick={resetArray}
          >
            Stop/Reset
          </button>
        </div>
      </div>
      <div className="h-1/2 flex justify-center items-center flex-wrap gap-2 my-10">
        {array.map((value, idx) => (
          <div
            className="bg-[turquoise] text-black solway font-medium flex justify-center border rounded-full items-center transition duration-100 ease-in-out p-6"
            key={idx}
            style={{
              width: `${value * 0.8}px`,
              height: `${value * 0.8}px`,
            }}
          >
            {value}
          </div>
        ))}
      </div>
      <InformationalPanel
        comparisons={comparisons}
        swaps={swaps}
        speed={speed}
        algorithm={algorithm}
      />
    </main>
  );
};
