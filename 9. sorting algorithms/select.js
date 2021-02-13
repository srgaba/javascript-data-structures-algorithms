const numbers = [99, 44, 6, 2, 1];
//               i
function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let minimaIndex = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < minimal) {
        minimaIndex = j;
      }
    }

    const tmp = array[i];
    array[i] = array[minimaIndex];
    array[minimaIndex] = tmp;
  }

  return array;
}

selectionSort(numbers);
