document.querySelector('.one').onclick = function(event){
    console.log(event);
    console.log('click-1');
}

document.querySelector('.two').onclick = function(e){
    console.log('click-2');
}

document.querySelector('.two').ondblclick = () => {
    console.log('double');
}

document.querySelector('.two').oncontextmenu = () => {
    console.log('right button');
    return false;// => to block context menu for user
}

// let w = 75;
// document.querySelector('.three').onmousemove = () => {
//     console.log('+');
//     document.querySelector('.three').style.width = w + 'px';
//     w++;
// }

document.querySelector('.three').onmouseenter = () => {
    document.querySelector('.three').style.background = 'red';
    console.log(1);
}

document.querySelector('.three').onmouseleave = () => {
    document.querySelector('.three').style.background = 'green';
    console.log(2);
}

document.querySelector('.three').onmousedown = () => {
    document.querySelector('.three').style.background = 'orange';
    console.log(3);
}

document.querySelector('.three').onmouseup = () => {
    document.querySelector('.three').style.background = 'blue';
    console.log(3);
}

let p = 10;
document.querySelector('button').onclick = function(e){
    p++;
    document.querySelector('progress').value = p;
}









