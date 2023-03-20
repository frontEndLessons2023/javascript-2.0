let a = 5;
a = a * 2;
try {
    document.querySelector('.test').innerHTML = a;
} catch (err) {
    alert('error!!!!');
    console.log(err);
    console.log('catch');
} finally {
    console.log('its always work!');
}

console.log(a);
t1();

function t1(){
    console.log('hello');
}



