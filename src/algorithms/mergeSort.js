import sleep from "../utils/sleep";
import { animationDelay, abortAlgorithm } from "../App";

const mergeSort = async (
  array,
  setArray,
  colors,
  setColors,
  lo = 0,
  hi = array.length - 1
) => {
  if (lo < hi) {
    let m = Math.floor((lo + hi) / 2);

    for (let i = lo; i <= hi; i++) {
      colors[i] = 0;
    }
    if (abortAlgorithm) return;
    await mergeSort(array, setArray, colors, setColors, lo, m);
    if (abortAlgorithm) return;
    for (let i = lo; i <= m; i++) {
      colors[i] = 0;
    }
    setColors([...colors]);
    await sleep(animationDelay);
    if (abortAlgorithm) return;

    await mergeSort(array, setArray, colors, setColors, m + 1, hi);
    if (abortAlgorithm) return;
    for (let i = m + 1; i <= hi; i++) {
      colors[i] = 0;
    }
    setColors([...colors]);
    await sleep(animationDelay);
    if (abortAlgorithm) return;

    await merge(array, setArray, colors, setColors, lo, m, hi);
    if (abortAlgorithm) return;
    for (let i = lo; i <= hi; i++) {
      colors[i] = 2;
    }
    setColors([...colors]);
    await sleep(animationDelay);
    if (abortAlgorithm) return;
  }
};

const merge = async (array, setArray, colors, setColors, lo, mi, hi) => {
  const start = lo;
  let lo2 = mi + 1;

  if (abortAlgorithm) return;

  if (array[mi] <= array[lo2]) {
    // Everything sorted
    for (let i = lo; i <= hi; i++) {
      colors[i] = 2;
    }
    setColors([...colors]);
    await sleep(animationDelay);
    if (abortAlgorithm) return;
    return;
  }

  while (lo <= mi && lo2 <= hi) {
    if (array[lo] <= array[lo2]) {
      lo++;
      for (let i = start; i <= hi; i++) {
        if (i !== array.length - 1 && (i === lo || i === lo2)) {
          colors[i] = 1;
        } else if (i < lo) {
          colors[i] = 2;
        } else {
          colors[i] = 0;
        }
      }
      setColors([...colors]);
      await sleep(animationDelay);
      if (abortAlgorithm) return;
    } else {
      let value = array[lo2];
      let index = lo2;

      while (index !== lo) {
        array[index] = array[index - 1];
        index--;
        if (abortAlgorithm) return;
      }
      array[lo] = value;

      lo++;
      mi++;
      lo2++;

      setArray([...array]);
      for (let i = start; i <= hi; i++) {
        if (i !== array.length - 1 && (i === lo || i === lo2)) {
          colors[i] = 1;
        } else if (i < lo) {
          colors[i] = 2;
        } else {
          colors[i] = 0;
        }
      }
      setColors([...colors]);
      await sleep(animationDelay);
      if (abortAlgorithm) return;
    }
  }
};

export default mergeSort;
