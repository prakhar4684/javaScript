//Async function always returns a promise.
// async function myFunc(){....}
// Await pause the execution of its surrounding async function until the promise is settled. 
//Example->>
function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("data",dataId)
            resolve("success")
        }, (2000));
    })
}
(async ()=>{
    console.log("fetching data1.....")
    await getData(1);
    console.log("fetching data2.....")
    await getData(2);
    console.log("fetching data3.....")
    await getData(3);
})()