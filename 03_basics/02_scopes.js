
 let a = 300
if(true){
    let a = 20
    const b = 30
    var c = 40
   // console.log("inner:",a);
    
}

// console.log(a);
// //console.log(b);
// //console.log(c);

//closure example not 100% but yes
function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    //console.log(website);

    two()
    
}

//one()


if(true) {
    const username = "honey"
    if(username === "honey"){
        const website = "youtube"
        //console.log(username + website);
        
    }
    //console.log(website);
    
}

//console.log(username);


//+++++++++++++++++++++++interesting++++++++++++++++
console.log(addone(5))
function addone(value){
    return value + 1
}



addTwo(5)                              //hoisting
const addTwo = function(num){       //addtwo = expression
    return num + 2
}


