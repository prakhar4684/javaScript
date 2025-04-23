//Promises
//promise is for "eventual" compition of task . it is an object in js .
//it is a solution of callback
// syntax
//let promise =new Promise((resolve,reject)=>{
//    console.log("Iam a promise")// if we write only that then the state of promise is pending.
//    //resolve("prakhar")
//    reject("something went wrong");
//})
function  getData(dataId,getNextData){
    return new promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId)
            resolve("success")
        if(getNextData)getNextData();
        },2000)
    })
}
getData(10);
getData(20);
// a java script Promise object can be:
//pending:the result is undefined
//resolve: the result is a value (fulfilled)
//rejected: the result is n erroe object

// HOW PROOMICE USE IN APIs
function asynFunc(){
    return (new promise((resolve,reject)=>{
        setTimeout(()=>{
                console.groupCollapsed(data1)
                resolve('success')
        },3000)
    }))
}
console.log("fetching data1....")
let p1=asynFunc();
p1.then((res)=>{
    console.log(res);
})