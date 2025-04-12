// singleton
 //const singlwton=Object.create()
//object literals
const mysym=Symbol("key1")
const jsUser={
    name:"prakhar",
    [mysym]: "shukla" //<<IF WE WANT TO MAKE SYMBOLE as a key  then we use [mysym] method>>
    ,
    age:20,
    "nickname":"golu"// it can not be access by (.) operator we can only use jsUser["nickname"].
    ,location:"kanpur",
    email:"prakhar@gmail.com",
    isLoginDays:"false",
    lastloginDay:["monday",'tuesday']
}
//console.log(jsUser)
//for accessing any individual key we use (.)
console.log(jsUser.lastloginDay)
//----------------or-----------
console.log(jsUser["lastloginDay"])
console.log(jsUser["email"])
console.log(jsUser[mysym])
//for change the value of any index in object
jsUser.age=19
console.log(jsUser.age)
//for making object unchangable we use freeze 
//Object.freeze(jsUser)

// making funtion as a key of objects
jsUser.greeting= function(){
    console.log("hello js user")
}
jsUser.greetingtwo= function(){
    console.log(`hello js user ${this.name}`)
}
console.log(jsUser.greetingtwo())