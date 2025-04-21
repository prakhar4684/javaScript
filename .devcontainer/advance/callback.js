//CALLBACK
//--->> A callback is a function passed as an arugument to another function;
//callbacks for syncronus programing
function sum(a,b){
    console.log(a+b);
}
function callculator(a,b,sumCallback){
    sumCallback(a,b);
}
callculator(2,3,sum)
// callbacks for Async programing
const hello=()=>{
    console.log('hello');
}
setTimeout(hello,3000)
//CALLBACK HELL
// Nested callbacks stacked below one another forming a pyramid structure (pyramid doom).
// This style of programming becomes  difficukt to understand & manage. 
function getData(dataID,getNextData){
    setTimeout(()=>{
        console.log("data",dataID)
    if(getNextData)getNextData();
    },2000)
}
//callbackhell->>nexted callbacks
getData(1,()=>{
    getData(2,()=>{
        getData(3,()=>{
            getData(4)})})
})
//they are very complex in java script then we move toward proomisec for making eay to usderstard code .