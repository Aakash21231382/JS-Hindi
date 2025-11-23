// const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "aakash"
tinderUser.isLoggedIn = false
// console.log(tinderUser);
const regularUser = {
    email:"some@example.com",
    fullname:{
    userfullname:{
    firstname:"aaksh",
    lastname:"kumar"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2}
// const obj3 =Object.assign({} obj1, obj2)

const obj3 = {...obj1, ...obj2}
console.log(obj3);

const users = [ 
    {
        id: 1,
        email:"aakash@gamil.com"
    },
    {
        id: 1,
        email:"aakash@gamil.com"
    },
    {
        id: 1,
        email:"aakash@gamil.com"
    },
    {
        id: 1,
        email:"aakash@gamil.com"
    },
    {
        id: 1,
        email:"aakash@gamil.com"
    },

]
users[1].email
// console.log(tinderUser);
// console.log();
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "aakash"
}
// course.courseInstructure
const {courseInstructor }= course
console.log(courseInstructor);

console.log(instructor);





