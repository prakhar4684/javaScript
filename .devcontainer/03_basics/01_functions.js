//function addtwonumbers(num1,num2){
   //  console.log(num2+num1)   }

//const a=addtwonumbers(3,4)
//console.log(a)//-->> undiined because fuction returns nothing

function addtwonumbers(num1,num2){
    return num2+num1
     
}
const a=addtwonumbers(3,4)
console.log(a)



function loginUserMessage(userName){
    if(userName===undefined){
        console.log("pplz enter a user name")
        return 
    }
    return `${userName} just logged in`
}
console.log(loginUserMessage())//if we send zero arguments the it return undefined
//output->> undefined just logged in
console.log(loginUserMessage('Prakhar'))
//output->>  prakhar just logged in


// if we dont know how mny number of agruments pass then we use res -->>(... num) operator it can manage it
function calculateCartPrice(...num){
    return num//returns an array
}
console.log(calculateCartPrice(12.200,303,23231,332))


//Passing objects as an argument in functions
const user={
    username:"prakhar",
    price:15803
}
function test(anyobject){
    console.log(`user name is ${anyobject.username} and price is ${anyobject.price}`)
}
test(user);
//Passing array as an argument in functions
const arr=[12,3,4,55,24]
function arrtest(getarr){
  console.log("array is :",getarr)//-->>array is : [ 12, 3, 4, 55, 24 ]
  return getarr[0]
}
console.log(`first element of array is :${arrtest(arr)}`)//-->>first element of array is :12