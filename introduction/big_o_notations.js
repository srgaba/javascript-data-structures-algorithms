//this code represents the notation of O(1);
//that means: does not matter the number of N, 
//the the amount of operations is constant
function addUpTo(n) {
    return n * (n + 1) / 2;
  }
  
addUpTo(1000000000);
  
  
//this code represents the notation of O(n);
//it means that the numbers of operations 
//is in agreement follows a scale of N
  function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
      total += i;
    }
    return total;
  }
  
addUpTo(1000000000);


//This code represents the O(A + B),
//beause each argument will have
//your own numbers of operations
function n(arg1, arg2){
    let iTotal = 0;
    let xTotal = 0;
    for(let i = 0; i < arg1.length; i++){
      iTotal += i;
    }
  
    for(let x = 0; x < arg2.length; x++){
      xTotal += x;
    }
  
    console.log(iTotal, xTotal);
}
  
n([1, 1, 1, 1, 1], [1, 1, 1]);



//this code represents the notation of O(n²);
//it means that the numbers of operations 
//follows a squared scale
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
      for (let x = 1; i <= n; x++) {
          total =+ i*x;
      }
  }
  return total;
}

addUpTo(1000000000);
