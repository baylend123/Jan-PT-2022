// <=  that is a comment

// console.log() prints to the terminal 
console.log("Hey I am Baylen")
console.log(12345)
console.log(true)
console.log(false)

// Examples of strings
console.log('hey', ' I am Baylen')
console.log('Hey' + ' I am Baylen')

// Compute arithmetic using +, -, *, /, %,
console.log(1 + 2)
console.log(100 - 99)
console.log(100 - 200)
console.log(5 * 3)
console.log(15 / 3)
console.log(22 % 2)
console.log(true + 2)
console.log(2 + '3')
console.log(3 + '2')
console.log(100 / 0)

// Examples of NaN
console.log(undefined + 1)
console.log(10 / 0)
console.log(isNaN('Hello'))
console.log(isNaN(Number('2')))
console.log(isNaN(Number('Hello')))
console.log(isNaN(NaN))
console.log(Number('2'))

// EXamples of boolean operators &&, ||, !
console.log(true && false)
console.log(true && true)
console.log(false && false)
console.log(true || false)
console.log(false || false)
console.log(true || true)
console.log(!true)
console.log(!false)
console.log(!true || false)
console.log(!false && true)
console.log(!(true || false))

// Examples of comparison operators >, >=, ===, <, <=,
console.log(100 > 10)
console.log(100 < 10)
console.log(10 <= 10)
console.log(100 >= 10)
console.log(100 === 100)
console.log(100 === 99)
console.log(10 <= 100)
//  De Morgans law
console.log(!(true || false) === (!true && !false))
console.log(!(true || false) === (!true || !false))
console.log(!(true && false) === (!true && !false))
console.log(!(true && false) === (!true || !false))


// Examples of Pemdas
// Parens Exponent Multiplication Division Addition Subtraction 
console.log(2+3*4)
console.log((2+3)*4)
console.log(2+3^2)
console.log(2+3*4/2)
console.log(2+2-1)


// Difference between == and === 
console.log(5 === '5')
console.log(5 == '5')

//  Examples of ++, --, +=, -=, /=, 
let myNum = 0
console.log(myNum++)
console.log(myNum--)
console.log(myNum+=5)
console.log(myNum-= 1)
console.log(myNum /=2)

// let a few variables string, int, and bool,  print their values to the console 

let myString = 'Baylen'
let myNum = 100
let myBool = true

let num = 31;
let isPositive = num > 0;
let isEven = num % 2 === 0;
console.log(isPositive && isEven);