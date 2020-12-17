//this code represents the notation of O(1);
//that means: does not matter the number of N, 
//the the amount of operations is constant
function addUpTo(n) {
    return n * (n + 1) / 2;
  }
  
  var time1 = performance.now();
  addUpTo(1000000000);
  var time2 = performance.now();
  console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`);
  
  
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
  
  var t1 = performance.now();
  addUpTo(1000000000);
  var t2 = performance.now();
  console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)
  
  
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
  
  var t1 = performance.now();
  addUpTo(1000000000);
  var t2 = performance.now();
  console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)