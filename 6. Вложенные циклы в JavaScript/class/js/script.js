
let out = document.querySelector('.out');


// for(let i = 0; i < 5; i++){
//     for(let j = 0; j < 10; j++){
//         out.innerHTML += '*';
//     }
//     out.innerHTML += '<br>';
    
// }

for(let i = 0; i < 10; i++){
    for(let k = 0; k < 10; k++){
        //concatination
        //out.innerHTML += '3*' + i + '=' + (i * 3) + '<br>';
        out.innerHTML += `${i} * ${k} = ${i * k}<br>`;
    }
    out.innerHTML += '<br>'
}