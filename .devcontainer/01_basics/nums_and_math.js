const score=400
console.log(score)
const balance= new Number(100)
console.log(balance)

//if we want to chnage our number into string.
//numbervariable.toString();
console.log(balance.toString())
console.log(balance.toString().length)
// #tofixed()->> is use for print limited decimal digits in console.
//ex->> a=400.22222222
//console.log(a.toFixed(2))
//output->>400.22
a=400.22222222
console.log(a.toFixed(2))
//#toPrecision()
//ex-> a=44.8954
//a.toPrecision(4)
//precision value is :44.89
//a.toPrecision(2)->>>45
const otherNumber=123.8966
console.log(otherNumber.toPrecision(3))
const hundereds=100000
//toLocaleString -->>use for seprate the digit in number values
console.log(hundereds.toLocaleString('en-IN'))


//+++++++++++++++++MATHS+++++++++++++++++
//math is a object with distict bulck properties .
// for ex-> max ,min,flloor,ciel,pow,round etc.
console.log(Math.abs(-10))//->>10
console.log(Math.round(-5.7))//->>-6
console.log(Math.round(-5.3))//->>-5

console.log(Math.ceil(5.3))//->>6
console.log(Math.floor(5.3))//->>5
console.log(Math.min(1,2,3,4,5,6))//->>1
console.log(Math.max(1,2,3,4,5,6))//->>6

// math.random= its give always random values between 0 to 1;
console.log(Math.random());
//for generating random values from 1 to 10
console.log((Math.random()*10)+1)
// imp when we have to generating random number in a perticular range.
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min)