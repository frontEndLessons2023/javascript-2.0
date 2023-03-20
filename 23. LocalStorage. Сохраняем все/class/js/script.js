localStorage.setItem('data', 5);
localStorage.getItem('data');
console.log(localStorage.getItem('data'));

const a = [3, 4, 5];
localStorage.setItem('a', a);
let b = localStorage.getItem('a');

console.log(a[1]);// -> 4
console.log(typeof a);// -> object

console.log(b[1]);// -> ,
console.log(typeof b);// -> string

localStorage.setItem('c', JSON.stringify(a));
let c = localStorage.getItem('c');
c = JSON.parse(c);
console.log(c[1]);// -> 4
console.log(typeof c);// -> object

const e = {
    hello: 5,
    k: 2,
    4: 'hi'
}
localStorage.setItem('d', JSON.stringify(e));
let d = localStorage.getItem('d');
d = JSON.parse(d);
console.log(d);
console.log(typeof d);// -> object

window.addEventListener('storage', function(e) {
    console.log('change');
    document.querySelector('.out').textContent = 
    localStorage.getItem('b1')
});



