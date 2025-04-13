//if
if(3!=2){
    //only when if block is exicuted when condition is true
    // now that depend on you what type of condition gives in ().
    //we can use diffrent comperision like: (<,>,<=,>=,==,!=,===)etc.
    console.log("yec condition block is true")
} 
else{
    console.log("yec condition block is false")
} 
// of with implicit scope
if(3<8)console.log("test")//when we have one one line then we introduce implicit scope 

//+++++nested if else++++++++
const balance=1000
if (balance<500){
    console.log("less than 500")
}
else if(balance<750)console.log("less than 750")
else if(balance<900)console.log("less than 900")
else console.log("less than 1200")


const userLoggedIn=true
const debitCard=true
if(userLoggedIn==true && debitCard==true){
    console.log("Allow to buy the course")
}
const loggedInFromEmail=false
if(userLoggedIn==true || loggedInFromEmail==false){
    console.log("user looged in")
}
else{
    console.log("plz try again /relogin")
}