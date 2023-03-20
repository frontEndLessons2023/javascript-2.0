let a = 'hello,hi,mahai';
console.log(a.split(','));

let b = [8, 9, 7];
console.log(b.join('-'));

b.forEach(function(elem, index) {
    console.log(index);
    //console.log(elem * 2);// not changing sourse array
    console.log(elem = elem * 2); // not changing sourse array
    console.log('--');
})

console.log(b);