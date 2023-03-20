// let a = 6;

// // >= <= == !=
// if(a > 9) {
//     //true
//     console.log('Yes');
// } else {
//     console.log('No');
// }

const button = document.querySelector('button');
const input = document.querySelector('.age');

//anonimus function
// button.onclick = function(){

// }
let num
button.onclick = () => {
    num = +input.value;
    if (num >= 16 && num <= 60) {
        console.log("Welcome");
    } else if (num > 60) {
        console.log('Are you sure you comming here?')
    } else {
        console.log("You will not in");
    }
    input.value = '';
}

switch (num) {
    case 15: console.log('Wait one more year.'); break;
    case 16: console.log('Yeah, you can come in.'); break;
    default: console.log('oook');
}

let b = 5;
console.log(b == 7);