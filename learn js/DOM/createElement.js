// const p = document.createElement('p');
// p.className = 'description';
// p.id = 'form-description';

// let pText = document.createTextNode('Fill in this form to add new faculty');

// p.appendChild(pText);

// const main = document.querySelector('#main');
// const form = document.querySelector('#faculty-form');

// main.insertBefore(p, form);

// console.log(p);

const p = document.createElement('p');
p.className = 'description';
p.id = 'form-description';
p.style.color = 'red';

let pText = document.createTextNode('Daftar Fakultas yang ada di Universitas Klabat');

p.appendChild(pText);

const main = document.querySelector('#main');
const faculties = document.querySelector('#faculties');

main.insertBefore(p, faculties);

console.log(p);