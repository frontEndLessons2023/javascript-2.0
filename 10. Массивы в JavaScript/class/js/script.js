// let a = 'Ivan';
// let b = '37';
// let z7 = 'Oven';
// let c = ['Ivan', 37, 'Oven'];
// let d = [];
// console.log(c[0]);
// console.log(c[5]);
// console.log(c);
// console.log(c.length);

/******************************************** */

// let a = 'Ivan';
// let b67 = 43;
// let iinNumber = 2324;

// let zodiak = ['Kozerog', 1, 1, 19];
// let man = ['Ivan', 'male', 176, 93, 'Ivanov'];
// console.log(zodiak);
// console.log(man);
// console.log('array length: ' + zodiak.length);
// console.log('array length: ' + man.length);
// man[0] = 'Sergey';
// console.log(man);

/******************************************** */

let a = [1, 2, 3, 4];
console.log(a);
let tmp = a[0];
a[0] = a[a.length - 1];
a[a.length - 1] = tmp;
console.log(a);

for(let i = 0; i < a.length; i++){
    document.querySelector('.out-1').innerHTML += a[i] + ' ';
}

let out = '';
for(let i = 0; i < a.length; i++){
    //out += a[i] + ' ';
    if(a[i] % 2 === 0){
        out += a[i] + ' ';
    }
}
document.querySelector('.out-1').innerHTML = out;

let b = [45, 2, 5, 23, 43, 1, 2, 6, 12];
res = b[0];
for(let i = 1; i < b.length; i++){
    if(res < b[i]){
        res = b[i];
    }
}
document.querySelector('.out-1').innerHTML = 'max: ' + res;

let sum = 0;
for(let i = 0; i < b.length; i++){
    sum += b[i];
}
document.querySelector('.out-1').innerHTML = 'sum: ' + sum;




