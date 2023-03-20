let f1 = document.querySelector('.f-1');
function one(){
    console.log('work');
}

one();
//f1.onckick = one;
f1.onclick = function () { //anonymous function
    console.log('Hello')
}
f1.onclick = () => { //analog of anonymous function - arrow function
    console.log('arrow Hello')
}

document.querySelector('.f-2').onclick = function () {
    console.log('+++++++++');
}
document.querySelector('.f-2').onclick = () => {
    console.log('arrow+++++++++');
}
console.log(one());//undefined
console.log(1 + one());//NaN

//*********************************************** */
function two(){
    console.log('work 22222');
    return 54;
}

two();
console.log(1 + two());

//*********************************************** */
let a = 8;
let b = 9;

function multi(){
    return a * b;
}
let c1 = multi();
let c2 = 10 * multi();
console.log(c1, c2);

function multi2(x = 9, y = 8){
    return x * y;
}

let res = multi2(a, 5);
console.log(res);
let res2 = multi2();
console.log(res2);

//*********************************************** */
function anyFunc(a){
    return 'Hello' + a;
}
(a) => 'Hello' + a;