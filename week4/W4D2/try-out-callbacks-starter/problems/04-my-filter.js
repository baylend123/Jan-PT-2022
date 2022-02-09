/*******************************************************************************
Write a function `myFilter` that accepts an array and a callback as arguments.
The function should call the callback on each element of the array, passing in
the element. The function should return a new array containing
the elements that result in true when passed to the callback.

Do not use the built in Array#filter.

Examples:

let result1 = myFilter([5, 7, 4, 3, 8], function (n) {
    return n % 2 === 0;
});
console.log(result1);       // [ 4, 8 ]

let result2 = myFilter(['choose', 'big', 'words', 'only'], function (s) {
    return s.length > 3;
});
console.log(result2);      // ['choose', 'words', 'only']
*******************************************************************************/
// write a function that takes an array and a callback 
// create a new array
// loop through the array
// create a variable that is equal to each element in isolation 
// create a variable that is the result of passing the element into the callback 
// check if the callback variable results in true
// if so push the element into the new array 
// return the new array 
let myFilter = function(array, callback) {
    let myResult = [] 

    for(let i = 0; i < array.length; i++){
        let myElement = array[i]
        let myCBResult = callback(myElement)
        if(myCBResult){
            myResult.push(myElement)
        }
    }
    return myResult
};  

let result1 = myFilter([5, 7, 4, 3, 8], function (n) {
    return n % 2 === 0;
});
console.log(result1);       // [ 4, 8 ]

let result2 = myFilter(['choose', 'big', 'words', 'only'], function (s) {
    return s.length > 3;
});
console.log(result2);      // ['choose', 'words', 'only']





/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = myFilter;
