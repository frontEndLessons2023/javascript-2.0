//if we are going to use the function only once
// option-1
//document.querySelector('button').onclick = function() {

// }
// option-2
//document.querySelector('button').onclick = () => {

// }
document.querySelector('.button-1').onclick = myFunc;

function myFunc(){
    console.log(document.querySelector('#one').value);
    //style
    document.querySelector('.button-1').style.backgroundColor = 
    document.querySelector('#one').value
}

document.querySelector('#one').oninput = () => {
    console.log(document.querySelector('#one').value);
    document.querySelector('span').innerHTML = document.querySelector('#one').value;
}

document.querySelector('#btn-1').onclick = () => {
    console.log(document.querySelector('#i2').value);
    let myCheckBox = document.querySelector('#i2');
    console.log(myCheckBox.checked);
    if(myCheckBox.checked){
        console.log('checked');
    } else {
        console.log('not checked');
    }
}

document.querySelector('#btn-2').onclick = (event) => {
    event.preventDefault();
    // let text = document.querySelector('#two');
    // console.log(text.value);
    // text.value = 'one';
    let form = document.querySelector('form');
    console.log(form);
    console.log(form.elements.two.value);
    console.log(form.elements.three.value);
}
