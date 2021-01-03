//We can also use big O notation to analyze space complexity;
//how much additional memory do we need to allocate in order
//to run the code in our algorithm?


// The size of the space stored in this code snippet, always
// will be constant, no matter the size of the value informed in
// parameters;
// which represents an O(1) notation
function sum(arr){
    let total = 0; //this is a space;
    for(let i = 0; i < arr.length; i++){ //this is a space;
        total += arr[i];
    }
    return total;
}

// The size of the space stored in this code snippet, 
//grows according to the size of the input values;
// which represents an O(n) notation
function sum(arr){
    let newArr = [];//this is a space
    for(let i = 0; i < arr.length; i++){ //this is a space;
        newArr.push(2 * arr[i]);
    }
    return total;
}