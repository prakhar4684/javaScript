// Nullish coalescing operation (??)
let val1;
//val1=5?? 10//->val1=5
//val1=null?? 10//->val1=10
val1=undefined?? 10//val1=10
console.log(val1)
//ager database se  null ya undefined value ati hai to usko avoid karke dusri vale asign kar deta hai (??) operator
// one  more case
//val1=null?10??22
  // it takes first value always val1-->>10
  //-----------ternary operator------------------ 
  //conddition?true:false;
  const  a=1===1?"hello":"chal bhak"
  console.log(a)