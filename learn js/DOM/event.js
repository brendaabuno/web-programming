/**
 * event handling
 * 
 * click
 * mousemove
 * keyup
 * 
 */

//click
// const btnTest = document.querySelector('#testButton')

//mousemove
const kotak = document.querySelector('#kotak');
kotak.addEventListener('mousemove', myEventHandler);

function myEventHandler(event){
    console.log(event.type);

    const outputX = document.querySelector('#outputX');
    const outputY = document.querySelector('#outputY');

    outputX.textContent = `${event.offsetX}`;
    outputY.textContent = `${event.offsetY}`;

    document.body.style.backgroundColor = `rgb(${event.offsetX}, ${event.offsetY}, 20)`;
}
//keyup
