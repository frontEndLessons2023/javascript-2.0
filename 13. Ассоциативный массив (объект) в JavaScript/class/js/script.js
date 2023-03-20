const a = {
    "a" : 5,
    "b" : 'Hello',
    "z2" : 'Hi',
    y43 : 1999,
    'villa de' : 3040
}

console.log(a);
console.log(a.z2);

delete a.a;

let k = 'y43';
console.log(a[k]);

a.yyyy = 555;
console.log(a);

a.b = 'uuu';

//document.querySelector('.out').innerHTML = a;// Object object
let out = '';
for(let key in a){
    out += `${key} --- ${a[key]} <br>`
}
document.querySelector('.out').innerHTML = out;
