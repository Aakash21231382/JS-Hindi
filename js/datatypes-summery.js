// Primitive

// 7 types :String , Number , Boolean, Null , undefined , symbol , BigInt

const score = 100
const scoreValue=100.878
const isLoggedIn= false
const outstdeTemp = null
let userEmail ;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigint = 9780587905485783789950788750n
//Reference Types(non-permitive)

//Array ,Object , Function

const heros= ["shaktiman", "salmal", "naagraj", "doga"];
let myObj = {
    name:"aakash"
    
}

const myFunction= function(){
    console.log("hello world");
}

console.log(typeof(heros))
