

function sayMyName () {
    console.log("H");
    console.log("o");
    console.log("n");
    console.log("e");
    console.log("y");
    console.log("H");
}

//sayMyName()

// function addTwoNumbers(num1, num2){         //parameters
//     console.log(num1 + num2);
// }
function addTwoNumbers(num1, num2){         
//    let result = num1 + num2
//    return result
        return num1+num2  
}

const result = addTwoNumbers(3,5)                          //arguments

//console.log("result",result);


function loginUserMessage(username = "hon"){
        if(!username){
            console.log("please enter a username");
            return
        }

    return `${username} just logged in`
}

//console.log(loginUserMessage("honey"))
//console.log(loginUserMessage())

function calcualteCartPrice(...num1){
    return num1
}

//console.log(calcualteCartPrice(200,400,500,1000))

const user = {
    username : "hitesh",
    price:199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is  ${anyobject.price}`);
    
}

//handleObject(user)
handleObject({
    username:"sam",
    price:399
})


const myNewArr = [200,400,500,690]

function returnSecondVal(getArray){
        return getArray[1]

}

//console.log(returnSecondVal(myNewArr));
console.log(returnSecondVal([200,460,560,780]));
