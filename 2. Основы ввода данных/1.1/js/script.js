let a = 6;
let b = 'Hello';

console.log(a);
let inputIn = document.querySelector('.input-in');
let button = document.querySelector('button');
let div = document.querySelector('div.out');

button.onclick = function () {
    //when the button will be clicked
    console.log('It works');
    //console.log(inputIn.value);//input from the user
    //let b = inputIn.value;
    let b = +inputIn.value; //input getting string from the user
    // + -> convert a string to a number.
    console.log(b + 2);//'66' + 10 = 6610;
    div.innerHTML = b;
    inputIn.value = '';
}




