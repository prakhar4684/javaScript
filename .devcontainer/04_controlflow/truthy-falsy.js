const name="prakhar"
if(name){
    print("contion is true")
}

//+++++++++++++++++ FALSY values+++++++++++++++++
//false,0,-0,0n,null,undefined,Nan,BigInt 0n.
//+++++++++++++++++ TRUTHY values+++++++++++++++++
//"0","false"," ",[],{},function(){},all nonzero numbers


// to check array is empty or not
const arr=[]
if (arr.length===0){
    console.log("yes that is empty")
}
//to check object is empty  or not
const obj={}
if(Object.keys(obj).length===0){
    console.log("yes that is empty")
}
else console.log("yes that is not empty")