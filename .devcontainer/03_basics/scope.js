function one(){
    const userName="prakhar"

    function two(){
        const website ="github"
        console.log(userName)
    }
    //console.log(website)// it can not run gives error
    two()
}
one()

if(true){
    const username="shukla"
    if(username==="shukla"){
        const wedsite="yahooo"
        console.log(username+wedsite)
    }
}


//++++++++++++++++instresting++++++++++++++++++++
// basic function
function addone(n){
    return n+1
}
addone(5)

// exprestion 
//that can not be access before declaration because it is function expresion it store in variable while basic function can access
//console.log(addtwo(8))-->>error
const addtwo=function(n){
    return n+2
}
addtwo(8)