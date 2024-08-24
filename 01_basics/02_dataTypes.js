"use strict"; //treat all js code as newer version

//alert(hello) //we are using node.js not browser

console.log(3
    +
    3); //code readability should be high
 console.log("honey");
//tc39.es,mdn// javascript original documentation

let name = "honey" //string
let age = 25 //number
let isLoggedIn = true //boolean

//primitive data types
// number => 2 to the power53
//bigint
//string => ""
//boolean => true or false
//null = standalone value
//undefined //value not assigned
//symbol => unique


//object

console.log(typeof null);     //object
console.log(typeof undefined);  //undefined


/*
JavaScript has several data types, which can be categorized into **primitive** and **non-primitive** types. Here's a breakdown:

### **Primitive Data Types**
1. **Number**:
   - Represents both integer and floating-point numbers.
   - Example: `let num = 42;` or `let floatNum = 3.14;`

2. **String**:
   - Represents sequences of characters enclosed in single, double, or backticks (for template literals).
   - Example: `let str = "Hello, World!";` or `let name = `John Doe`;`

3. **Boolean**:
   - Represents logical values: `true` or `false`.
   - Example: `let isTrue = true;`

4. **Undefined**:
   - A variable that has been declared but not assigned a value.
   - Example: `let x; // x is undefined`

5. **Null**:
   - Represents an intentional absence of any object value.
   - Example: `let y = null;`

6. **Symbol** (introduced in ES6):
   - Represents a unique identifier.
   - Example: `let sym = Symbol('description');`

7. **BigInt** (introduced in ES2020):
   - Represents whole numbers larger than the range of the `Number` type.
   - Example: `let bigIntNum = 123456789012345678901234567890n;`

### **Non-Primitive (Reference) Data Types**
1. **Object**:
   - Collections of key-value pairs.
   - Includes more complex data structures like arrays, functions, and objects.
   - Example: `let obj = { name: "Alice", age: 25 };`

2. **Array**:
   - A special type of object that holds an ordered collection of values.
   - Example: `let arr = [1, 2, 3, 4];`

3. **Function**:
   - Represents reusable blocks of code.
   - Functions themselves are objects in JavaScript.
   - Example: `function greet() { return "Hello!"; }`

4. **Date**:
   - Represents date and time.
   - Example: `let now = new Date();`

5. **RegExp**:
   - Represents regular expressions for pattern matching.
   - Example: `let pattern = /ab+c/;`

### **Type Conversion**
- **Implicit Conversion**: JavaScript automatically converts data types when necessary, e.g., adding a number and a string results in a string.
- **Explicit Conversion**: Using functions like `Number()`, `String()`, `Boolean()`, etc., to convert between types explicitly.

Understanding these data types and how they behave is crucial for working effectively with JavaScript.
*/

