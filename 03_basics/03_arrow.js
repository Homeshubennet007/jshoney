const user = {
    username:"honey",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
        
        
    }
}

//referring to context above by this

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

//console.log(this);


// function one(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// one()

//  const chai = function() {
//      let username = "hitesh"
//      console.log(this.username);
//  }

const chai = () => {
    let username = "hhh"
    console.log(this);
    
}

//chai()

// const addTwo = (num1,num2) => {
//     return num1 + num2               //explicit return
// }
//console.log(addTwo(3,4))



//const addTwo = (num1,num2) => num1 + num2  //implicit return
//const addTwo = (num1,num2) => (num1 + num2)  

const addTwo = (num1,num2) => ({username:"honey"})  


console.log(addTwo(3,4))

//const myArr = [2,3,4,5]
//myArray.forEach(() => {})