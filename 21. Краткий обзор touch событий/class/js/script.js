document.querySelector('.block-1').addEventListener('touchstart', myTouch);
document.querySelector('.block-1').addEventListener('touchend', myTouchEnd);
document.querySelector('.block-2').addEventListener('touchmove', myTouchMove);

function myTouch(event){
    console.log(event)
    console.log('touch');
    document.querySelector('.out-1').innerHTML += 'work ';
    document.querySelector('.out-2').innerHTML = event.touches.length;
}

function myTouchEnd(event){
    document.querySelector('.out-3').innerHTML += 'end ';
}
function myTouchMove(event){
    event.preventDefault();
    console.log(event)
    document.querySelector('.out-2').innerHTML += 'move ';
    return false;
}







