// //spread operator ... (ES2018)
// let a = [1, 2, 3];
// let b = [...a, 7, 8, 9];

// console.log (a);
// console.log (b);

// //ternary operator
// //condition? trueValue : falseValue;
// //let age = 19;
// /*if(age>18){
//     console.log ('Collage Student');
// }
// else{
//     console.log ('High School Student');
// }*/

// //const student = age > 18 ?'Collage' : 'High School';
// //console.log (student);

// //nullish coalescing operator (??)
// //leftOperand ?? rightOperand
// let username = null;
// console.log('Your Username : ' + username ?? 'Admin');

//throw
let x = -7;
// if(x < 0) throw new Error('Tidak boleh angka negatif');
// console.log(x);

//try / catch / finally
try{
    myFunction();
} catch(error){
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}