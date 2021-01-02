//O(n^2)
function checkerPair(array1, array2){
    for(let i = 0; i < array1.length; i++){
      for(let x = 0; i < array2.length; i++){
        if(array1[i] === array2[x]){
          return true;
        }
      }
    }
  }
  checker(['A', 'B', 'C'],['A', 'D', 'E']);
  
  
  //O(a + b);
  function checkerPairGood(array1, array2){
    const formattedEntries = [];
  
    for(const value of array1){
      const pair = [value, true];
      formattedEntries.push(pair);
    }
  
    const objArray1 = Object.fromEntries(formattedEntries);
  
    for(const value of array2){
      if(objArray1[value]){
        return true;
      }
    }
  }
  
  checkerPairGood(
    [1, 2, 3, 5, 6, 7, 8, 9, 10], 
    [11, 12, 13, 15, 16, 17, 18, 19, 10],
  );
  
  