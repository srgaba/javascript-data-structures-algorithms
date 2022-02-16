// const minSwapsminSwaps = () => {};

const binaryInsertionSort = (arr) => {
  const sorted = [];
  sorted.push(arr[0]);
  let swaps = 0;
  for (let i = 1; i < arr.length; i++) {
    const currentValue = arr[i];
    const sortedValue = sorted[sorted.length - 1];
    if (currentValue >= sortedValue) {
      sorted.push(currentValue);
      swaps += 1;
    } else {
      let pFound = false;
      let middleIndex = Math.floor((sorted.length - 1) / 2);
      while (!pFound) {
        const sortedMiddleValue = sorted[middleIndex];
        if (currentValue >= sortedMiddleValue) {
          sorted.splice(middleIndex + 1, 0, currentValue);
          pFound = true;
          swaps += 1;
        } else if (middleIndex === 0 && currentValue < sortedMiddleValue) {
          sorted.splice(middleIndex, 0, currentValue);
          pFound = true;
          swaps += 1;
        }
        middleIndex = Math.floor(middleIndex / 2);
      }
    }
  }
  console.log(swaps);
  console.log(sorted);
};

binaryInsertionSort([2, 8, 5, 4]);
