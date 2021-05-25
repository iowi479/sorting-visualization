const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const generateRandomArray = (size, min, max) => {
  const generatedArray = [];
  for (let i = 0; i < size; i++) {
    generatedArray.push(randomInt(min, max));
  }
  return generatedArray;
};

export default generateRandomArray;
