import sleep from "../utils/sleep";
import { animationDelay, abortAlgorithm } from "../App";

const bubbleSort = async (array, setArray, setColors) => {
  let length = array.length;
  array = [...array];
  let noSwaps = true;

  for (let i = 0; i < length; i++) {
    noSwaps = true;
    for (let j = 0; j < length - i - 1; j++) {
      const curr = array[j];
      const next = array[j + 1];

      const newColors = new Array(length).fill(0);
      for (let k = length - 1; k > length - i - 1; k--) {
        newColors[k] = 2;
      }
      newColors[j] = 1;
      newColors[j + 1] = 1;
      setColors(newColors);
      await sleep(animationDelay);
      if (abortAlgorithm) return;

      if (curr > next) {
        array[j] = next;
        array[j + 1] = curr;
        noSwaps = false;
      }
      setArray(array);
    }
    if (noSwaps) {
      i = length - 1;
    }
    const newColors = new Array(length).fill(0);
    for (let k = length - 1; k >= length - i - 1; k--) {
      newColors[k] = 2;
    }
    setColors(newColors);
    setArray(array);
    console.log(i);
  }
};

export default bubbleSort;
