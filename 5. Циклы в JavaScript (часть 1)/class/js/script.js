//for
//while
//do while

// for(let i = 0; i < 5; i++) {
//     if(i == 4) break;
//     console.log(i);
// }

// let div = document.querySelectorAll('.one');//selectorAll -> array (NodeList)
// console.log(div);
// for(let i = 0; i < div.length; i++){
//     div[i].style.background = 'red';
//     div[i].onclick = two;
// }

// function two() {
//     console.log('work!!!');
// }

// let b = document.getElementsByClassName('one');//array (HTMLCollection)
// let c = document.getElementsByTagName('div');//array (HTMLCollection)
// console.log(b);
// console.log(c);

// for(let i = 0; i < b.length; i++){
//     b[i].style.border = '3px solid black';

// }

document.querySelector('button').onclick = () => {
    let r = document.querySelectorAll('input[type="radio"]');
    console.log(r);
    for(let i = 0; i < r.length; i++){
        if(r[i].checked) {
            console.log(r[i].value);
        }
    }
}

let out = '';
for(let i = 0; i < 10; i++){
    if(i == 6) continue;//6 will be missed in array
    out += i + ' ';
    //if(i == 6) break;
}
document.querySelector('#out').innerHTML = out;