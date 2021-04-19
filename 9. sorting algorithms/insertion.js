const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  let currentIndex;
  for (let i = 0; i < array.length; i++) {
    currentIndex = i;
    for (let j = i + 1; j > 0; j--) {
      if (array[currentIndex] > array[j]) {
        const tmp = array[currentIndex];
        array[currentIndex] = array[j];
        array[j] = tmp;

        currentIndex--;
      } else {
        break;
      }
    }
  }
  return array;
}

insertionSort(numbers);
