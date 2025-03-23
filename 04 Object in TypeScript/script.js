// Topics
// Object
// type Aliases
// readonly and optional properties
// union type
console.log("hello from Type script");
// this is normal object
var person = {
    name: "John",
    price: 1000,
    brand: "logitech",
};
console.log(person);
// this is typescipt object
var person1 = {
    name: "John",
    price: 1000,
    brand: "logitech",
};
console.log(person1);
//   this is the example 
var person3 = {
    id: 1,
    name: "John",
    price: 1000,
    brand: "logitech",
    Discount: 10,
    stock: 343,
    category: "sdfg"
};
// optional properties
// ? means user can use this property or not use bhi kr skta hai or nhi bhi kr skta it upto user choice
// suppose you have to use discount in some places and some places not
// readonly and optional properties
// readonly means we can not change the value of id
// id can be number or string so you can use like this
// use like this
var person2 = {
    id: 1,
    name: "John",
    price: 1000,
    brand: "logitech",
    Discount: 10,
};
// suppose you can change the value of name then it will give error
// but you can change the value of id
// example of name change
person2.name = "jane"; // it will work
// person2.id = 2 // it will not work
console.log(person2);
// if we use in function then we can use like this
function createProduct(product) {
    return product;
}
