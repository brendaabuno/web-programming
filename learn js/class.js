//class
class Person {
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

//instantiate an object
const p1 = new Person ('Brenda', 'Abuno', '01')
console.log(p1.getFullName());
console.log(p1.dob.getFullYear());