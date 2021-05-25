import sleep from "../utils/sleep";
import { animationDelay, abortAlgorithm } from "../App";

const selectionSort = async (array, setArray, setColors) => {
  // arraycopy
  array = [...array];
  const length = array.length;

  for (let i = 0; i < length; i++) {
    let max = 0;
    let maxValue = 0;

    for (let j = 0; j < length - i; j++) {
      const newColors = new Array(length - 1).fill(0);
      newColors[max] = 3;
      newColors[j] = 1;
      for (let k = length - 1; k > length - 1 - i; k--) {
        newColors[k] = 2;
      }
      setColors(newColors);
      await sleep(animationDelay);
      if (abortAlgorithm) return;
      console.log(abortAlgorithm);

      if (maxValue <= array[j]) {
        maxValue = array[j];
        max = j;
      }
    }

    let last = length - 1 - i;
    array[max] = array[last];
    array[last] = maxValue;

    array = [...array];
    setArray(array);
  }

  const newColors = new Array(length).fill(2);
  setColors(newColors);
  await sleep(animationDelay);
  if (abortAlgorithm) return;
};

export default selectionSort;
