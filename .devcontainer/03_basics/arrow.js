const user={
    username:"prakhar",
    price:999,
    welcomeMassage:function(){
        console.log(`${this.username},welcome to website`)
        console.log(this)
    }
}
//user.welcomeMassage()
//user.username="shukla"
//user.welcomeMassage()


// this only can working in objects only.
//ex-->>
function chai(){
    username="prakhar shukla"
    //console.log(this.username)//-->>undeined
}
chai()

//--------------arrow function----------------//
const ch=()=>{
     username="prakhar shukla"
     console.log(this.username)//-->>undefined
     console.log(this)//-->>{}
}
//ch()
//explicitly return 
const addtwo=(num1,num2)=>{
    return num1+num2
}
console.log(addtwo(2,6))

// emplicite return 
//const mulTwo=(num1,num2)=> (num1*num2)
// if we have one line of code then no required return just write operation only.
//console.log(mulTwo(3,4))
// if we are wrap in {} braces ther return should be nessary.


// if we required to return an object using emplicite method.then we need to using () bracket
const ad =()=>({user:"iam",
    bankbalance:"bahut-sara"
})
//console.log(ad())








