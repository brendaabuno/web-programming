// literal object - {}
// new Object()
// Object.create()

const students = {
    nim : 105011910006,
    noreg : 'S21910008',
    faculty : 'FIK',
    prodi : 'Sistem Informasi',
    firstName : 'Brenda',
    lastName : 'Abuno',
    email : 's21910008@student.unklab.ac.id',
    address : {
        city : 'Airmadidi',
        postalCode : 95371,
        province : 'Sulawesi Utara'
    },
    hobby : ['Menulis', 'Traveling']
};

//console.log(students.hobby[0]);

//destructuring
const {firstName, lastName, hobby} = students;
console.log(hobby); 
console.log(firstName);