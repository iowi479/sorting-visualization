import sleep from "../utils/sleep";
import { animationDelay, abortAlgorithm } from "../App";

const heapSort = async (array, setArray, colors, setColors) => {
  if (abortAlgorithm) return;
  const length = array.length;

  for (let i = Math.floor(length / 2 - 1); i >= 0; i--) {
    await heapRoot(array, setArray, colors, setColors, length, i);
    if (abortAlgorithm) return;
  }

  for (let i = length - 1; i > 0; i--) {
    await swap(array, setArray, colors, setColors, 0, i);
    if (abortAlgorithm) return;

    for (let j = length; j >= i; j--) {
      colors[j] = 2;
    }
    setColors([...colors]);
    await sleep(animationDelay);
    if (abortAlgorithm) return;

    await heapRoot(array, setArray, colors, setColors, i, 0);
    if (abortAlgorithm) return;
  }

  for (let j = length; j >= 0; j--) {
    colors[j] = 2;
  }
  setColors([...colors]);
  await sleep(animationDelay);
  if (abortAlgorithm) return;
};

const heapRoot = async (array, setArray, colors, setColors, length, i) => {
  if (abortAlgorithm) return;
  let lo = 2 * i + 1;
  let hi = 2 * i + 2;
  let max = i;

  colors[lo] = colors[lo] === 2 ? 2 : 1;
  colors[max] = colors[max] === 2 ? 2 : 1;
  setColors([...colors]);
  await sleep(animationDelay);
  if (abortAlgorithm) return;

  if (lo < length && array[lo] > array[max]) {
    colors[max] = 0;
    max = lo;
  }

  colors[lo] = colors[lo] === 2 ? 2 : 0;
  colors[hi] = colors[hi] === 2 ? 2 : 1;
  colors[max] = colors[max] === 2 ? 2 : 1;
  setColors([...colors]);
  await sleep(animationDelay);
  if (abortAlgorithm) return;

  if (hi < length && array[hi] > array[max]) {
    colors[max] = 0;
    max = hi;
  }

  colors[hi] = colors[hi] === 2 ? 2 : 0;
  colors[max] = colors[max] === 2 ? 2 : 0;
  setColors([...colors]);
  await sleep(animationDelay);
  if (abortAlgorithm) return;

  if (max != i) {
    await swap(array, setArray, colors, setColors, i, max);
    await heapRoot(array, setArray, colors, setColors, length, max);
  }
};

const swap = async (array, setArray, colors, setColors, i1, i2) => {
  if (abortAlgorithm) return;
  colors[i1] = 1;
  colors[i2] = 1;
  setColors([...colors]);
  await sleep(animationDelay);
  if (abortAlgorithm) return;

  const temp = array[i1];
  array[i1] = array[i2];
  array[i2] = temp;

  setArray([...array]);
  colors[i1] = 0;
  colors[i2] = 0;
  setColors([...colors]);
  await sleep(animationDelay);
  if (abortAlgorithm) return;
};

export default heapSort;
