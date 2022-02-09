/*******************************************************************************
Write a function `multiMap` that accepts a value, a number n, and a callback.
The function should return the new value that results from running the original value
through the callback n times.

Examples:

let result1 = multiMap(7, 2, function(n) {
  return n * 10;
});
console.log(result1); // 700

let result2 = multiMap(7, 3, function(n) {
    return n * 10;
});
console.log(result2); // 7000

let result3 = multiMap("hi", 5, function(s) {
  return s + "!";
});
console.log(result3); // hi!!!!!
*******************************************************************************/
//  write a function that takes a value a number and a cb
// create a variable to store my ew value every time
// creat a for lop that loops n times
// on each iteration, im going to reassign my variable the that variable passed into the callback 
// return that value

let someFunc = function(n) {
  return n * 10;
}
let multiMap = function(value, number, callback) {
    // let myValue = value 
    for(let i = 0; i < number; i++){
      value= callback(value)
    }
    return value
};


let result1 = multiMap(7, 2, someFunc);
console.log(result1); // 700




/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = multiMap;
