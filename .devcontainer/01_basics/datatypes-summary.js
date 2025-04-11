//premitive
//7 Types:String ,Number,Booliean,Symbol,Bigint,null,undefined 
const score=100
const scoreValue=100.3
const isLoggedIn=false
const outsideTemp =null
let userEmail=undefined;
const id=symbol('123')
const anotherId=symbol('123')
console.log(id===anotherId)
const bigInt=9483978938399270932749233984
//Refrence type
//3 types: Array,objects,functions

const heros=["shaktiman","krish","doga"]
let myobj={
    name:"prakhar",
    age:20,
    wt:55
}
const myfunction= function(){
    console.log("hello guys")
}
console.log(typeof myfunction)
//+++++++++++++++++++++++++++++++++++++///
//#premitive data types always use STACK (to asign copy value to another variable)
//#Non-premitive data types always use HEAP (to asign refrence of a value to another value)
//ex-of premitive datatypes
let myname="prakhar"
let yourname=myname
yourname="adarsh"
console.log(yourname,myname)// here we can see copying value to another variable 
//ex-of Non-premitive datatypes
let obj1={
    naam:"prakhar",
    work:"student",
    age:20
}
let obj2=obj1;
obj12.work="software engineer"
//here obj1,obj2 point to the same contianer of object that creat in memory i.e both have same refrence.  