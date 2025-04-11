const name="prakhar"
const repoCount=1
console.log(name+repoCount+" shukla");//output->prakhar1 shukla
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);
console.log(typeof name)//String
console.log (name.toUpperCase())
const gameName=new String("hitesh")
console.log(typeof gameName)//object
console.log (gameName.length)
console.log (gameName.toUpperCase())
console.log (gameName.charAt(5))

const newString=gameName.substring(0,4);
// for making substring we use inbuilt function staingname.substring(start index,end index)
console.log(newString)
const anotherString=gameName.slice(-1,0)
console.log(`my name is ${anotherString}`)
//#trim()->to remove all the starting space nad end space .
const a='     aditya   '//here we can see we add space starting or also in end wit our string
console.log(a)//output with spaces->      aditya   
console.log(a.trim())//output without spaces-> aditya
// #replace()->to repace something what we want in our string.
// syntax ->> stringName.replace("what want to replace from string","what add after replace");
const url="https://jubilant-space-happiness-x5v9q564vpxqhqrr.github.dev/"

console.log(url.replace('https','ho-gya-replace'))
// #include-> use to check a give string is present in our sting or string or not.
// if string present then return true,otherwise false
// syntax->> stringame("what you want to seach in string ");
console.log(url.includes('https'));//return ture because its avilable
console.log(url.includes('chunnu'));//return false because its not present


//++++++++++++++++++++++++++++++++//
// if i want  our sting convert into array.
//for do this we are using split() method.
/* syntax->>>
split(separator)
split(separator, limit) */
const str = "The quick brown fox jumps over the lazy dog.";

const words = str.split(" ");
console.log(words[3]);
// Expected output: "fox"

const chars = str.split("");
console.log(chars);
/*Array ["T", "h", "e", " ", "q", "u", "i", "c", "k", " ", "b", "r", "o", "w", "n", " ", "f", "o", "x", " ", "j", "u", "m", "p", "s", " ", "o", "v", "e", "r", " ", "t", "h", "e", " ", "l", "a", "z", "y", " ", "d", "o", "g", "."] */
console.log(chars[8]);
// Expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]
