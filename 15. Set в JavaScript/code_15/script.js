let a = new Set();
//a.push(1); -> arraye methods doesnt work on set 
a.add(1);
a.add(2);
a.add('Hello');
a.add(1);//no repited elements in set, set contains only unic elements
a.add('1');// ==
//a.clear();
a.delete('Hello'); // for deleting

console.log(a);
console.log(a[0]);//!!! referense by index doesnt work on set
console.log(a.length);//!!! doesnt work on set
console.log(a.size);

console.log(a.has(2));
console.log(a.has('2'));

//for(let i = o; i < a.length; i++) -> doesnt work on set

// for(let i in a){ -> doesnt work on set
//     console.log(i);
// }

for(let item of a){
    console.log(item)
}

let arr = [1, 2, 3, 4, 5, 'hello', 5, 1, 3];

let b = new Set(arr);
console.log(b);
console.log(b.size);

let bArr = Array.from(b);
console.log(bArr);












