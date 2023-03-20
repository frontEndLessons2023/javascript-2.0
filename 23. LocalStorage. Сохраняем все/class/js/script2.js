let count = 1;

document.querySelector('.b-1').onclick = () => {
    count++;
    console.log(count);
    localStorage.setItem('b1', count);
}





