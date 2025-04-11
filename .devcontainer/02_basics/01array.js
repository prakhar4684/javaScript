//array
const myArray=[0,1,2,3,4]//decleration method 1
//it can store different data types in java stricpt.
//it can resize in java script
//it follow ZERO base indexing
// shallow copy -->> it gives same refrences
// deep copp-->>it does not share the same refrence 
const myarr=new Array(1,2,3,4)// decleration method 2
console.log(`value  in array at index 3 is:${myarr[3]}`)
// Array methods
//1.push() -->> add at last index
myarr.push(8)
myarr.push(7)
console.log(myarr)
//pop()-->remove last value from array
myarr.pop()
console.log(myarr)
// unshift() -->insert a value at  the begining of array
// its is not good to use because we need to shift all array value for insert at begining. 
myarr.unshift(10)
console.log(myarr)
//shift()-->> remove value from the begining of the array
myarr.shift()
myarr.shift()
console.log(myarr)
//includes()--> use for asking qusetion is that element is present or not it gives answer i boolean values
console.log(myarr.includes(10))//-->>false
console.log(myarr.includes(3))//-->>true
//indexof()--> it gives index if element is present otherwise gives -1;
console.log(myarr.indexOf(10))//-->>-1
console.log(myarr.indexOf(4))//-->>2
//to convert array into string 
const newarr=myarr.join()
console.log(myarr)//->[ 2, 3, 4, 8 ]
console.log(newarr)//->2,3,4,8

console.log(typeof newarr)//->string


// slice,splice
//slice
const my1=myarr.slice(1,3)
console.log(my1)//->>[ 3, 4 ]
console.log(myarr)//-->>[ 2, 3, 4, 8 ]
//splice->it change our array 
//after apply splice function only those elements are in main array which are not in splice range
const my2=myarr.splice(1,3)
console.log(my2)//-->>[ 3, 4, 8 ]
console.log(myarr)//-->[ 2 ]

