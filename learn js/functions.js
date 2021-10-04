//function declaration
// function hello(){
//     console.log('Hello World');
// }
// hello();

//function expression
// let greeting = function(name){
//     return `hi, ${name}`;
// }
// console.log(greeting('Brenda'));

// const fct = function factorial(number){
//     if(number <= 1){
//         return 1;
//     }else{
//         return number * factorial(number-1);
//     }
// }
// console.log(fct(5));

//IIFE - Immediate Invoked Function Expres
// const squared = (function(number){
//     return number * number;
// })(7);
// console.log (squared);

//arrow funtion
const hello = name => `hello ${name}`;
console.log(hello('Brenda'));

const addNumbers = (num1, num2) => num1+num2
console.log(addNumbers(5,9));

