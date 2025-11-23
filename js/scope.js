
let a = 300
 if (true){
   let a = 10
   const b =20
//    console.log("Inner:", a);
   
}


// console.log(a);
// console.log(b);
// console.log(c);

//Nested scope

function one(){
    const username = "aakash"
    function  two(){
        const website = "Youtube"
        console.log(username);
        
    }
    // console.log(website);
    
    two()
}
// one()

if (true){
    const username = "aakash"
    if(username === "aakash"){
        const website = "youtube"
        // console.log(username + website);
        
    }
    // console.log(website); error
    
}
// console.log(username); error

//+++++++++++++++ interesting +++++++++++
console.log (addone(5))
function addone (num){
    return num + 1

}

addtwo(5)
const addtwo = function(num){
    return num + 2
}


