// Function
// Parameter Type
// Return Type (void and never)
// never return type
// Optional Parameter


// Function :- Function is a set of statements that performs a task or calculates a value


// Function syntax of TypeScript 
//  function functionName(parameter1 : DataType, parameter2 : DataType, ...) : ReturnType{
//     code 
// }

// Function syntax of javaScript 
// function createProduct(name, price){
//     console.log(name, price);
// }
// createProduct("Pen Tablet", 50000);
// createProduct(100, "Pen Tablet");   this is wrong 


//  this is Parameter Type
// function createProduct (name:String,price:number){
//     console.log(name,price);
// }
// createProduct("Pen Tablet",50000);


// this is return type
// function createProduct ():String {
//   return "fghfghf"
// }
// let x = createProduct();
// console.log(x);


// this is void return type
// function createProduct ():void {
//     console.log("fghfghf")
//   }
//   let x = createProduct();
//   console.log(x);


// never return type
function erroHandler ():never {
    throw new Error("Error")
  }
  erroHandler();


// Return Type (void and never)
// void :- it is used when a function does not return any value
// never :- it is used when a function does not return any value and never reach the end of the function
