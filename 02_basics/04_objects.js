//const tinderUser = new Object()   //singleton object
const tinderUserr = {}   //non-singleton

tinderUserr.id = "123nn"
tinderUserr.name = "rocky"
tinderUserr.isLoggedIn = false
//console.log(tinderUserr)

const regularUser = {
    email:"some@gmail.com",
    fullname:{
        usersfullname:{
            firstname :"honey",
            lastname:"bennett"
        }
    }
}

//console.log(regularUser.fullname.usersfullname.firstname);

const obj1 = {1:"a",2:"b"
}

const obj2 = {3:"c",4:"d"}

//const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1,...obj2}
//console.log(obj3);


const users = [
    {
        id:1,
        email:"b@h.com"
    },
    {
        id:3,
        email:"b@h.com"
    },
    {
        id:2,
        email:"b@h.com"
    },
]

users[1].email
console.log(tinderUserr);

// console.log(Object.keys(tinderUserr));
// console.log(Object.values(tinderUserr));
// console.log(Object.entries(tinderUserr));


// console.log(tinderUserr.hasOwnProperty('isLoggedIn'));

const course = {
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"honey"
}

//course.courseInstructor

const {courseInstructor:instructor} = course

//console.log(courseInstructor)
console.log(instructor);





























 /* const navbar = () => {
 }
 navbar(company = "hitesh")
*/