import { useState } from "react";
import ArrayVisualization from "./components/ArrayVisualization";
import HeadMenu from "./components/HeadMenu";
import generateRandomArray from "./utils/generateRandomArray";
import selectionSort from "./algorithms/selectionSort";
import bubbleSort from "./algorithms/bubbleSort";
import mergeSort from "./algorithms/mergeSort";
import quickSort from "./algorithms/quickSort";
import heapSort from "./algorithms/heapSort";

// Is needed for Async Algorithms
export let animationDelay;
let setAnimationDelay;
export let abortAlgorithm;
let setAbortAlgorithm;

const App = () => {
  const min = 1,
    max = 200;

  [animationDelay, setAnimationDelay] = useState(5);
  const [arraySize, setArraysize] = useState(50);
  const [array, setArray] = useState(generateRandomArray(arraySize, min, max));
  const [colors, setColors] = useState(new Array(arraySize).fill(0));
  const [isRunning, setIsRunning] = useState(false);
  [abortAlgorithm, setAbortAlgorithm] = useState(false);

  const onRandomArray = () => {
    if (!isRunning) {
      setArray(generateRandomArray(arraySize, min, max));
      setColors(new Array(arraySize).fill(0));
    }
  };

  const onArraySizeChange = async (size) => {
    if (!isRunning) {
      setArraysize(size);
      onRandomArray();
    }
  };

  const onAnimationDelayChange = () => {
    if (animationDelay === 5) {
      setAnimationDelay(100);
    } else if (animationDelay === 100) {
      setAnimationDelay(5);
    }
  };

  const onStopAnimation = async () => {
    await setAbortAlgorithm(true);
    setColors(new Array(arraySize).fill(0));
  };

  const onSelectionSort = async () => {
    if (!isRunning) {
      setIsRunning(true);
      await setAbortAlgorithm(false);
      await setColors(new Array(arraySize).fill(0));
      await selectionSort([...array], setArray, setColors);
      setIsRunning(false);
    }
  };

  const onBubbleSort = async () => {
    if (!isRunning) {
      setIsRunning(true);
      await setAbortAlgorithm(false);
      await setColors(new Array(arraySize).fill(0));
      await bubbleSort([...array], setArray, setColors);
      setIsRunning(false);
    }
  };

  const onMergeSort = async () => {
    if (!isRunning) {
      setIsRunning(true);
      await setAbortAlgorithm(false);
      await setColors(new Array(arraySize).fill(0));
      await mergeSort([...array], setArray, [...colors], setColors);
      setIsRunning(false);
    }
  };

  const onQuickSort = async () => {
    if (!isRunning) {
      setIsRunning(true);
      await setAbortAlgorithm(false);
      await setColors(new Array(arraySize).fill(0));
      await quickSort([...array], setArray, [...colors], setColors);
      setIsRunning(false);
    }
  };

  const onHeapSort = async () => {
    if (!isRunning) {
      setIsRunning(true);
      await setAbortAlgorithm(false);
      await setColors(new Array(arraySize).fill(0));
      await heapSort([...array], setArray, [...colors], setColors);
      setIsRunning(false);
    }
  };

  return (
    <div className="App">
      <HeadMenu
        isRunning={isRunning}
        animationDelay={animationDelay}
        onRandomArray={onRandomArray}
        onSelectionSort={onSelectionSort}
        onBubbleSort={onBubbleSort}
        onMergeSort={onMergeSort}
        onQuickSort={onQuickSort}
        onHeapSort={onHeapSort}
        onAnimationDelayChange={onAnimationDelayChange}
        onArraySizeChange={onArraySizeChange}
        onStopAnimation={onStopAnimation}
      />
      <ArrayVisualization array={array} colors={colors} className="UiElement" />
    </div>
  );
};

export default App;
