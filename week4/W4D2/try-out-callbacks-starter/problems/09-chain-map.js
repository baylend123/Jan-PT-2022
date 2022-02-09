/*******************************************************************************
Write a function `chainMap` that accepts a value and any number of callbacks as
arguments. The function should return the final result of passing the value through
all of the given callbacks. In other words, if three callbacks are given then:

- the value is given to the first callback
- the result of the first callback is given to the second callback
- the result of the second callback is given to the third callback
- the result of the third callback is the final result

Examples:

let add5 = function(n) {
    return n + 5;
};

let half = function(n) {
    return n / 2;
};

let square = function(n) {
    return n * n;
};

console.log(chainMap(25, add5));                // 30
console.log(chainMap(25, add5, half));          // 15
console.log(chainMap(25, add5, half, square));  // 225
console.log(chainMap(4, square, half));         // 8
console.log(chainMap(4, half, square));         // 4
Write a function `chainMap` that accepts a value and any number of callbacks as
arguments. The function should return the final result of passing the value through
all of the given callbacks. In other words, if three callbacks are given then:


- the value is given to the first callback
- the result of the first callback is given to the second callback
- the result of the second callback is given to the third callback
- the result of the third callback is the final result

Examples:
our input is going to be a number,  an array of callbacks(...callbacks)
our output is going to be a number
*******************************************************************************/



let chainMap = function(num, ...cbs) {
    // iterate through all of the callbacks 
    // let myNewValue;
    console.log(num)
    for(let i = 0 ; i < cbs.length; i++){
        // an individual callback 
        let cb = cbs[i]
        // showing that we are accessing each callback
        // console.log(cb)
        // after each iteration we num is going to equal the result of the number passed through the callback
        // reassigning num to the return value of passing the current num into the callback 
        // console.log(num, 'inside the loop')
        // console.log(i)
        num = cb(num)
        // console.log(num, 'after the reassignment' )
    }
    // after we have iterated through all of the callbacks and exit the for loop
    // we are left with the result of num being pass through all of the callbacks 
    console.log(num, 'finally')
    return num
};
// let add5 = function(n) {
//     return n + 5;
// };

// let half = function(n) {
//     return n / 2;
// };

// let square = function(n) {
//     return n * n;
// };

// // console.log(chainMap(25, add5));                // 30
// // console.log(chainMap(25, add5, half));          // 15
// console.log(chainMap(25, add5, half, square));  // 225
// // console.log(chainMap(4, square, half));         // 8
// // console.log(chainMap(4, half, square));         // 4





/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = chainMap;
