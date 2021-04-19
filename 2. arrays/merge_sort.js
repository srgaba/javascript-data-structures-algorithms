//Work, but can improve the Big O
function mergeSortedArrays(arr1, arr2){
    if(!arr1.length || !arr1.length){
      return 'ho no';
    }
  
    const numbers = [];
  
    arr1.forEach((i) => {
      numbers.push(i);
    });
    arr2.forEach((i) => {
      numbers.push(i);
    });
  
    for(let i = 0; i < numbers.length; i++){
      for(let x = 0; x < numbers.length; x++){
        if(numbers[i] < numbers[x]){
          const actual = numbers[i];
          numbers[i] = numbers[x];
          numbers[x] = actual;
        }
      }
    };
    
    return numbers;
}
  
mergeSortedArrays([0, 1, 4, 6, 30], [5, 9, 23]);

