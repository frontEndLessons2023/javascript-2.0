let a = [4, 5, 12, 200, 1, 0, -2];

// let b = a.map(function(item, index){
//     return item * 5;
// });
let b = a.map(item => item * 5);

// let c = a.filter(function (item, index) {
//     return true;//will return full coppy of array
// });

// let c = a.filter(item => {
//     if(item % 2 == 0){
//         return true;
//     } else {
//         false;
//     }
// });

let c = a.filter(item => item > 0);




console.log(c);

