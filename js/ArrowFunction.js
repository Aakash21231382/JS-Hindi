// const user = {
//     username: "aakash",
//     price : 999,

//     welcomeMessage: function(){
//         console.log(`${this.username}, Welome to website`);   
        
//     }
    
// }
// console.log(this);

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

// function chai(){
//     let username= "aakash"
//     console.log(this.username);
    
// }
// chai()

// const chai = function (){
//     let username = "aakash"
//     console.log(this.username);
    
// }
// chai()


const chai =  () => {
    let username = "aakash"
    console.log(this);
    
}
chai()

//Explicity return
// const addone = (num1, num2) =>{
//     return num1 + num2
// }


// emplicity return
//const addone = (num1, num2) =>  num1 + num2
// const addone = (num1, num2) =>  (num1 + num2)


const addone = (num1, num2) =>  ({username : "aakash"})

console.log(addone(3,4));
const myArray = [ 2, 3,4 ,5 ,6,]
myArray.forEach
addone()