import sleep from "../utils/sleep";
import { animationDelay, abortAlgorithm } from "../App";

const quickSort = async (
  array,
  setArray,
  colors,
  setColors,
  start = 0,
  end = array.length - 1
) => {
  if (abortAlgorithm) return;
  if (start < end) {
    let index = await partition(array, setArray, colors, setColors, start, end);

    if (abortAlgorithm) return;

    await quickSort(array, setArray, colors, setColors, start, index - 1);

    for (let i = start; i <= index; i++) {
      colors[i] = 2;
    }
    setColors([...colors]);
    await sleep(animationDelay);
    if (abortAlgorithm) return;

    await quickSort(array, setArray, colors, setColors, index + 1, end);

    for (let i = start; i <= end; i++) {
      colors[i] = 2;
    }
    setColors([...colors]);
    await sleep(animationDelay);
    if (abortAlgorithm) return;
  }
};

const partition = async (
  array,
  setArray,
  colors,
  setColors,
  start = 0,
  end = array.length - 1
) => {
  let i = start - 1;
  let pivot = array[end];
  colors[end] = 3;
  setColors([...colors]);
  await sleep(animationDelay);
  if (abortAlgorithm) return;

  for (let j = start; j < end; j++) {
    for (let k = start; k < end; k++) {
      colors[k] = 0;
    }
    if (i !== start - 1) {
      colors[i] = 1;
    }
    colors[j] = 1;
    colors[end] = 3;
    setColors([...colors]);
    await sleep(animationDelay);
    if (abortAlgorithm) return;
    if (array[j] <= pivot) {
      i++;

      for (let k = start; k < end; k++) {
        colors[k] = 0;
      }
      colors[i] = 0;
      colors[j] = 1;
      colors[end] = 3;
      setColors([...colors]);
      await sleep(animationDelay);
      if (abortAlgorithm) return;

      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
      await setArray([...array]);
      if (abortAlgorithm) return;
    }
  }

  let temp = array[i + 1];
  array[i + 1] = array[end];
  array[end] = temp;
  await setArray([...array]);
  //clear colors
  for (let i = start; i <= end; i++) {
    colors[i] = 0;
  }
  setColors([...colors]);
  await sleep(animationDelay);
  if (abortAlgorithm) return;
  return i + 1;
};
export default quickSort;
