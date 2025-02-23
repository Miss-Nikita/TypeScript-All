// Function
// Parameter Type
// Return Type (void and never)
// Optional Parameter


// Function :- Function is a set of statements that performs a task or calculates a value

// Function syntax of TypeScript 
//  function functionName(parameter1 : DataType, parameter2 : DataType, ...) : ReturnType{
    // code 
// }

// Function syntax of javaScript 
// function createProduct(name, price){
//     console.log(name, price);
// }
// createProduct("Pen Tablet", 50000);
// createProduct(100, "Pen Tablet");   this is wrong 



function createProduct (name:String,price:number){
    console.log(name,price);
}
createProduct("Pen Tablet",50000);