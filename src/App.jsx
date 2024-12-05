import "./App.css";
import Navbar from "./components/Navbar";
import { FunctionalPanel } from "./components/FunctionalPanel";
import { Route,Routes } from "react-router-dom";
import BubbleSort from "./pages/BubbleSort";
import HeapSort from "./pages/HeapSort";
import SelectionSort from "./pages/SelectionSort";
import InsertionSort from "./pages/InsertionSort";
import QuickSort from "./pages/QuickSort";
import MergeSort from "./pages/MergeSort";
import About from "./pages/About";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<FunctionalPanel />} />
        <Route path="/about" element={<About />} />
        <Route path="/bubblesort" element={<BubbleSort />} />
        <Route path="/heapsort" element={<HeapSort />} />
        <Route path="/selectionsort" element={<SelectionSort />} />
        <Route path="/insertionsort" element={<InsertionSort />} />
        <Route path="/quicksort" element={<QuickSort />} />
        <Route path="/mergesort" element={<MergeSort />} />

      </Routes>
    </>
  );
}

export default App;
