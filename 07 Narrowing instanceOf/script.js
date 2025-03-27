// Narrowing 
// Type Narrowing 
// using IN  operator
// using instanceof 
// Narrowing
// Narrowing is a technique in TypeScript that allows you to be more specific about the type of a variable.
// This is useful when you have a union type and you want to narrow it down to a specific type.
//Narrowing means ki data kis type ka hai usko pata krne ka tareeka
// isme if else ka use hota hai
// isme hume data ko narrow krna hota hai
// isme hume data ko type specific krna hota hai
// typechecking krne ka tareeka
function getData(data) {
    if (typeof data === "string") {
        console.log(data.toUpperCase());
    }
    else if (typeof data === "number") {
        console.log(data.toFixed(2));
    }
    else {
        console.log(!data);
    }
}
function Human(person) {
    person;
    if ("nobirth" in person) {
        person;
    }
    else {
        person;
    }
}
// using instanceof
function valueType(x) {
    if (x instanceof Date) {
        console.log(x.toLocaleDateString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
valueType(new Date());
valueType("hello");
