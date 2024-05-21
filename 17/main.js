"use strict";
//Q.no.17
/*17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
of your program*/
//Creating a Guest List array
let guestList = ["Umama", "Atiya", "Bisma", "Warda"];
let dontCome = guestList[0];
//print the guest of name who cant come
console.log(dontCome, "Dont join us");
//Add or Remove Value 
guestList.splice(0, 1, "Anam");
console.log("Good News ! We have found a bigger table for Dinner");
//Add a starting index of array
guestList.unshift("Saba");
//Add a ending index of array
guestList.push("Fizza");
//Add a value middle of array
let middleIndex = Math.floor(guestList.length / 2);
//Adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "Rabia");
console.log("Updated list of our Guest");
//Sanding a invitation message to our guest one by one with their name
guestList.forEach(guest => console.log(`Salam ${guest} would you like to Dinner with me`));
//Inform that only two guest can be invite for Dinner
console.log("I cant invite only two people to dinner");
while (guestList.length > 2) {
    let removeGuest = guestList.pop();
    console.log(`Sorry ${removeGuest}  I Cant invite you to Dinner`);
}
//Printing a Invitation to the last to guest on the list
console.log("Invitation to the last to Guest");
guestList.forEach(lastTwo => console.log(`Luckly ${lastTwo} you are still invited to dinner `));
//Remove last two guest from the list
guestList.pop();
guestList.pop();
console.log("Empty list", guestList);
