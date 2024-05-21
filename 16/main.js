"use strict";
//Q.No.16
/*16. More Guests: You just found a bigger dinner table, so now more space is
available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.*/
//Creating a Guest List array
let guestList = ["Umama", "Atiya", "Bisma", "Warda"];
let dontCome = guestList[0];
console.log(dontCome, "Dont join us");
//Add or remove value
guestList.splice(0, 1, "Anam");
console.log("Good News ! We have found a bigger table for Dinner");
//Add a starting index of array
guestList.unshift("Saba");
//Add a ending index of array
guestList.push("Fizza");
//Add a value middle of array 
let middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, "Rabia");
//Print message of update list
console.log("Updated list of our Guest");
//Sanding a invitation message to our guest one by one with their name
guestList.forEach(guest => console.log(`Salam ${guest} would you like to Dinner with me`));
