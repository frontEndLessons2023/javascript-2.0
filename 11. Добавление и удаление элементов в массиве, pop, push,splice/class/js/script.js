const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const b = ['a', 'b', 'c', 'd', 'e', 'f'];

console.log(a.length);
/***************************************** */
//return 10; add 10 to end of array a:
// const c = a.push(10);
// console.log(c);
// console.log(a);

console.log(a.push(10, 11, 44, 55, 66));
console.log(a);

b.push('j', 'e');
console.log(b);

/***************************************** */
//return last element in array; deleting last element from end of array
b.pop();
b.pop();
console.log(b)

/***************************************** */
//to delete element in the middle of array:
//on index 3 will be 'empty'; length of array will be same
delete a[3];
console.log(a);//on index 3 will be 'empty'

/***************************************** */
//to delete element in the middle of array:
//splice(x, y) where x - index/position; y - how many elements to delete
//return element that was deleted

let aNew = a.splice(3, 3);
console.log(a);
console.log(aNew);//return elements was deleted
//splice can delete and insert elements to array

//delete 2 elements starting from index 3, 
//and inserting element 'hi' to index 3
let anew2 = a.splice(3, 2, 'hi');
console.log(a);
console.log(anew2);

/***************************************** */
//shift + unshift
//delete and insert elements into the start of an array



