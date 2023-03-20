for(let i = 0; i < 6; i++){
    console.log(i);
}

let k = 0;
while(k < 5){
    console.log('k: ' + k);
    //if(k == 3) continue;//will make cycle infinity
    k++;
}

/********************************************* */
let sum = 0;
let p = 0;
while(p <= 10) {
    sum = sum + p;
    p++;
}
console.log('sum = ' + sum);

/********************************************* */
let out = document.querySelector('.out');
p = 0;
let outStr = '';
while(p < 4){
    let p1 = 0;
    while(p1 < 4) {
        outStr += '*';
        p1++;
    }
    outStr += '<br>';
    p++;
}
out.innerHTML = outStr;

/********************************************* */
let out2 = document.querySelector('.out-2');
let flag = 3;
outStr = '';
p = 0;
while(p < 4){
    let p1 = 0;
    while(p1 < 4) {
        if (p1 < flag) {
            //outStr += '&nbsp'; //no space....?
            outStr += '!';
        } else {
            outStr += '*';
        }
        p1++;
    }
    flag--;
    outStr += '<br>';
    p++;
}
out2.innerHTML = outStr;





