const arr = [4, 2, 1, 5, 7, 3, 10, 6];

let lastIndex = arr.length;
while (lastIndex > 0) {
  for (let i = 0; i < lastIndex; i++) {
    if (arr[i] > arr[i + 1]) {
      const next = arr[i + 1];
      arr[i + 1] = arr[i];
      arr[i] = next;
    }
  }
  lastIndex--;
}

console.log(arr);
