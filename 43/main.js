"use strict";
//Q.No.43
/*43. Unchanged Magicians: Start with your work from Exercise 40. Call the
function make_great() with a copy of the array of magicians’ names. Because the
original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original
names and one array with the Great added to each magician’s name.
*/
//Define a function
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
function make_great(magicians) {
    return magicians.map(name => `The Great ${name}`);
}
let magician_name = [
    "Michael Ammar",
    "David Blaine",
    "Criss Angel"
];
let copy_Magician_Name = magician_name.slice();
let copy_Great_Magician = make_great(copy_Magician_Name);
//Original 
console.log("\nOriginal array\n");
show_magicians(magician_name);
//Copied
console.log("\nCopied array\n");
show_magicians(copy_Great_Magician);
