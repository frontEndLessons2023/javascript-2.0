let arr = [4, 7, 9];
// ******************************option-1
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }
// ******************************option-2
// for(let key in arr){
//     console.log(key);//index
//     console.log(arr[key]);//value
// }
// ******************************option-3
for(let item of arr){
    console.log(item);
    console.log(arr[item]);//undefined
}

let allP = document.getElementsByTagName('p');//HTMLCollection
console.log(allP);//same as array
console.log(allP.length);//same as array
console.log(allP[0]);//same as array
//******************************option-1
// for(let i = 0; i < allP.length; i++){
//     console.log(allP[i]);
// }
// ******************************option-2 - not work for HTMLCollection
// for(let key in allP){
//     console.log(key);
// }
// ******************************option-3
for(let item of allP){
    console.log(item);
    console.log(allP[item]);//undefined
}

let qP = document.querySelectorAll('p');//NodeList
console.log(qP);
//******************************option-1
// for(let i = 0; i < qP.length; i++){
//     console.log(qP[i]);
// }
// ******************************option-2 - not work for NodeList
// for(let key in qP){
//     console.log(key);
// }
// ******************************option-3
for(let item of qP){
    console.log(item);
    console.log(qP[item]);//undefined
}