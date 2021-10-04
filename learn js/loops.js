//while
// let i=1;
// while(i<=10){
//     console.log(i);
//     i++;
// }

// //do/while
// do{
//     console.log(i);
//     i++;
// } while(i<=10);

//for
// for(let i = 1; i<=10; i++){
//     console.log(i);
// }

//for/of(ES6) - array
// let data = [25, 17, 80, 9, 15, 16];
// let sum = 0;
// // for(let element of data){
// //     sum+= element;
// // }

// for(let i = 0; i< data.length; i++){
//     sum+= data[i];
// }
// console.log(sum);

// //for/in
const student = {
    nim : 105011910006,
    noreg : 'S21910008',
    firstName : 'Brenda',
    lastName : 'Abuno'
};
for(let prop in student){
    console.log(`${prop}: ${student[prop]}`)
}