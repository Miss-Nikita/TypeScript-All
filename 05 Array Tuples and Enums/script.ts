// Array
// Tuple
// Enum


// Array
let dayname  = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
console.log(dayname);
// this is a generic array but i pass different type of data like
let monthname = ['January', 'February', 'March', 34 ,45,67];   //  this also work fine but this is wrong na 


// so we can define or write the type of array like this
let dayname1: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let monthname1: Array<number> = [1, 2, 3, 4, 5, 6, 7];  // also write like this
// if you try to pass the number in this array then it will give you an error 
dayname1.push('January');
// dayname1.push(34);  // this will give you an error



// Tuple : Tuple is more and refind advance part of  array
// tuple means data type or length of array is fixed 
// like this
let tuple: [number, string, boolean] = [7, "hello", true]; // 7: number, "hello": string, true: boolean
tuple.push("how was the day") // push is not allowed in tuple but it will not give you an error    
// error dena chahiye tha but nhi de rha to typescript me aisa hi hota hai pata nhi kyu pr hota hai
console.log(tuple);

// isme hum iska type bhi bana skte hai 
type product = [string, number, boolean];  
let tuple1: product = ['hello', 45, true]; 
tuple1.push('how was the day');  



// Enum
// enum hamara constent value ko hold krne ka tareeka hai
// hume constent value ka collection banane hai to hum enum use karte hai
enum Color {
    yes,
    no
}
console.log(Color.yes);  // 0   by default value hoti hai
console.log(Color.no);   // 1   by default value hoti hai


enum Month {
    January = "jan",
    February = "feb",
    March = "mar",  
    April = "apr",
    May = "may",
}
// Month.January = 55;  // this is not allowed because enum is read only you cannot update the value of enum
console.log(Month.January); 
console.log(Month)
