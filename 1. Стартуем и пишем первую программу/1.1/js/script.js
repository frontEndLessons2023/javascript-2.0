console.log('Hello');//for coments
console.log("Hello World");
console.log("123");
console.log(123);
console.log("Hello" + " " + "World" + "!");//concatination
console.info('Hello');
// alert('Hello');//cmd + / -> for comenting
// alert('Hello');
// alert('Hello');
document.getElementById('out').innerHTML = 'Hello';
document.getElementById('out').innerHTML = 2019;
document.getElementById('out').innerHTML = '<b>2020</b>';

document.querySelector('h2').innerHTML = 5; //will catch first element h2 in html
document.querySelector('h2.header').innerHTML = 15;
document.querySelector('.header').innerHTML = 20;

document.querySelector('#one').innerHTML = 777;//with #
document.getElementById('one').innerHTML = 888;//without #

let b;
let a = document.querySelector('#one');
let c = document.querySelector('.header');
a.innerHTML = 999;
c.innerHTML = 6666;



