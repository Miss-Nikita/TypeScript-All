// Topics
// Object 
// type Aliases
// readonly and optional properties
// union type

console.log("hello from Type script");

// this is normal object
var person = {
    name: "John",
    price:1000,
    brand: "logitech",
}
console.log(person)

// this is typescipt object 
var person1 : {name:string; price:number; brand:string}  = {
    name: "John",
    price:1000,
    brand: "logitech",
}
console.log(person1)
// is approch is  good but if we have to use this object in multiple places
//  then we have to write this object multiple times so we can use type Aliases


// type Aliases
// for single variable
type ID = number;
// for multiple variable
type Product = {name:string; price:number; brand:string};

// use like this 
var person2 : Product  = {
    name: "John",
    price:1000,
    brand: "logitech",
}
console.log(person2)

// if we use in function then we can use like this
function createProduct (product:Product): Product{
    return product;
}
           