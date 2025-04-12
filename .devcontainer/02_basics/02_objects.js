//const tinderUser=new Object()//singleton object
const tinderUser={}//object literals
tinderUser.id="123abc"
tinderUser.name="samm"
tinderUser.isLoggedIN=false
//console.log(tinderUser)
const regularUser={
    email:"some@gamil.com",
    fullname:{
            usrFullname:{
                firstname:"prakhar",
                lastname:"shukla"
            }
    }
}
//console.log(regularUser.fullname.usrFullname.lastname)



//+++++++++++++++++for merg two objects+++++++

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3={obj1,obj2}
//console.log(obj3)-->>{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// assign()->> copy the value o all of the enumerable own properties from one or more source objects to a target object.
const obj4=Object.assign({},obj1,obj2)
//console.log(obj4)-->>{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }



// but we are prefer to use (spard-->> {...})operator;
const obj5={...obj1,...obj2}
//console.log(obj5)-->>{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


// if we want to ask is that property is avilable or not the we use.
//console.log(tinderUser.hasOwnProperty('isLogged'))//-->true


// object destructuring
const course={
    courseName:"js in hindi",
    price:"999",
    courseInstructure:"hitesh"
}
//console.log(course.courseInstructure) or 
const {courseInstructure: instructor}=course// that is object destructureing.
console.log(instructor)

//---basics off API-json------//
/*{
    "name" :"prakhar",
    "coursename": "js in hindi",
    "price": "free"
}// it is not treated like object its treated like json 
*/
