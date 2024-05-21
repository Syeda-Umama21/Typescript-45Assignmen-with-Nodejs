//Qs.no 27
/* . Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.
• If the alien is yellow, print a message that the player earned 10 points.
• If the alien is red, print a message that the player earned 15 points.
*/

//Define Variable
let alienColor = "green";
//Using If and Else if Statements.
if(alienColor === "green"){
    console.log("(Version 1)Player just earn 5 point.");
}
else if(alienColor === "yellow"){
console.log("Player just earned 10 points.");
}
else if(alienColor === "red"){
    console.log("Player just earned 15 points..");
}

//Version 2

let alienColor2 = "yellow";
if(alienColor2 === "green"){
    console.log("You shot down green alien you have 5 points.");
}
else if(alienColor2 === "yellow"){
    console.log("(Version 2) You shot down yellow alien you have 10 points.");
}
else if(alienColor2 === "red"){
    console.log("You shot down red alien you have 15 points.");
}
//Version 3

let alienColor3 = "red";
if(alienColor3 === "green"){
    console.log("You shot down green alien you have 5 points.");
}
else if(alienColor3 === "yellow"){
    console.log("You shot down red alien you have 15 points.");
}
else if(alienColor3 === "red"){
    console.log("(Version 3) You shot down red alien you have 15 points.");
}