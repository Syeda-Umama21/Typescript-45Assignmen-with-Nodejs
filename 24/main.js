"use strict";
//Qs.no.24
/*24. More Conditional Tests: You don’t have to limit the number of tests you create to 10.
If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array
*/
let a = "\nHello";
let b = "hello";
console.log(a !== b); // True
console.log(a === b); //False
let fruit1 = "\nApple";
let fruit2 = "apple";
//• Tests using the lower case function
console.log(fruit1.toLowerCase() === fruit2); //True  
//Numerical Tests
let ten = 10;
let twenty = 20;
console.log(ten == twenty); //False
console.log(ten != twenty); //True
console.log(ten > 9); //False
console.log(twenty < 10); //True
console.log(ten >= 5); //True
console.log(twenty <= 10); //False
//Using && (and) Operator
let condition1 = true;
let condition2 = false;
console.log(condition1 && !condition2);
console.log(condition1 && condition2);
console.log(condition1 || condition2);
console.log(!condition1 || condition2);
//Test weather an item is include and not include in array
let city = ["Karachi", "Lahore", "Islamabad"];
console.log(city.includes("Lahore"));
console.log(!city.includes("Lahore"));
// Test whether an item is not in a array
let lang = ["JavaScript/TypeScript", "PHP", "C++"];
console.log(lang.includes("PHP"));
console.log(lang.includes("Php"));
