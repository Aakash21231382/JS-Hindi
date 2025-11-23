// singleton

//object literals
// Object.create()



const mySym = Symbol("key1")

const JsUser = { 
    name: "Aakash",
    age:18,
    location: "meerut",
    "full name": "aakash kumar",
    [mySym]:"mykey1",
    email:"aakashkumar@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monsay", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log( JsUser[mySym]);


// JsUser.email= "his@gak.com"
// Object.freeze(JsUser)
// JsUser.email = "jdsjkkd@gmil.com"
// console.log(JsUser);

JsUser.greeting = function (){
    console.log("Hello Js User");
}
JsUser.greeting2 = function (){
    console.log(`Hello Js User, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());
