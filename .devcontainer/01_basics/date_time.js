//Date
let myDate=new Date()
console.log(myDate.toString())//-->Fri Apr 11 2025 17:09:39 GMT+0000
console.log(myDate.toDateString())//->>Fri Apr 11 2025
console.log(myDate.toLocaleDateString())//-->>4/11/2025
console.log(typeof myDate)//->>Object

let myCreatedDate =new Date(2023,4,15 ,1)//our mounths is started from 0;
console.log(myCreatedDate.toDateString())
let ndate=new Date("2023-01-14")
console.log(ndate.toLocaleString())

//<<----time--->>
let mytimeStamp = Date.now()
console.log(mytimeStamp)//gives output in miliseconds;
//console.log(mytimeStamp.getTime())//that getTime() convert all milisecond into time
// if i want to change our miliseconds in seconds
console.log(`vlaue in seconds ${Math.floor(Date.now()/1000)}`)

//some easy methods
let newDate=new Date()
console.log(newDate.getDate)
console.log(newDate.getMonth)
console.log(newDate.getVarDate)
console.log(newDate.getFullYear)
// very important 
newDate.toLocaleDateString('default',{
    weekday:"long",
    
})
