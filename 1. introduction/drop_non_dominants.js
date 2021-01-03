//In cases where functions has 
//a multiples notations included,
//and between their there's notation O(n^2),
//basic does not matter the other's notations
//because the others don't change the 
//central representation of O(n^2) in a graphic 
//for example;
function print(numbers){
    console.log('these are the numbers');
    numbers.forEach((number) => console.log(number));

    console.log('and these are their numbers');
    numbers.forEach((firstNumber) => {
        numbers.forEach((secondNumber) => console.log(firstNumber + secondNumber));
    });
}   

numbers([1, 2, 3, 4]);
