//or 
for (let i = 0; i<=10; i++ ){

    //console.log(i)
    if(i==5){
       // console.log("5 is lunch break")
    }
    
}
var c=0
for (let i = 10; i<=20; i++){
   // console.log(`outer loop value : ${i}`)
    for (let j = 1; j<=10; j++){
        
        c=c+1
      //  console.log(`${i}*${j}=${i*j}`)
    }
}
//console.log(`number of total iterations ${c}`)
// printing array elements
const arr=[1,2,3,4,5,6,7,"prakhar"]
for( let i=0;i<arr.length;i++){
    //console.log(arr[i])
}
// break and continue
//brak->terminate at given break condition
for (let i = 0; i<=10; i++ ){

    console.log(i)
    if(i==5){
       console.log("here we apply the break")
       break
    }
    
}
//continue-> skip a given iterataion only
for (let i = 0; i<=10; i++ ){

    
    if(i==5){
      
      continue
    }
    else{
        console.log(i)
    }
    
}