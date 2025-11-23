// function myFunction(){  
//     console.log("Aakash")
//     console.log("Rahul")
//     console.log("Monu")
//     console.log("Sonu")
// }
// myFunction()
 //method 1
// function addTwonumbers(num1, num2){
//    console.log(num1 + num2); 
// }

// addTwonumbers(3,4)
// addTwonumbers("3", "4")
// addTwonumbers(3,"4")
// addTwonumbers(3,"a")
// addTwonumbers(3,null)


//method2
// function addTwonumbers(num1, num2){
    // let result = num1 + num2
    // console.log("Aakash");//Result kea baad ma kuch bhi print nahi hota hai
    
    // return result

//     return num1 + num2
// }
// const result = addTwonumbers(3,5);
// console.log("Result:",result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in `
}
// console.log(loginUserMessage("Aakash"))
console.log(loginUserMessage())


function calculateCartPrice(val1, val2,...num1){
    return num1
}
// console.log(calculateCartPrice(200, 200,400,27,788))
const user = {
    username:"Aakash",
    prices:199
}
function handelObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
// handelObject(user)
handelObject({
    username:"sam",
    price:399
})


const myNewArray = [ 200,400,100,600]
function returnSecondValue(getArray){
    return getArray[2]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,300,100,500]));

