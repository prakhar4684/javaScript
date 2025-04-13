// IIFE by using basic function
(function chai(){
    // it is known as named IIFE.
    console.log("Here, Immediately Invoked Function Expression (IIFE) by basic function")
})();// for stop the function we need to add a (;) semicolon. for exicuting new IIFE  .
// IIFE by using arror function
(()=>{
    // it is known as named IIFE.
    console.log("Here, Immediately Invoked Function Expression (IIFE) by arrow function")
})();
((name)=>{
 console.log(`database connect to ${name}`)
})('prakhar')
