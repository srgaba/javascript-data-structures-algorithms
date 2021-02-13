const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }

  const left = array.slice(0, array.length / 2);
  const right = array.slice(array.length / 2, array.length);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const sorted = [];
  let l = 0;
  let r = 0;

  while (left[l] || right[r]) {
    if ((left[l] && !right[r]) || left[l] < right[r]) {
      sorted.push(left[l]);
      l++;
    } else {
      sorted.push(right[r]);
      r++;
    }
  }

  return sorted;
}

const answer = mergeSort(numbers);
