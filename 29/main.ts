//Qs.no.29
/* 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check
 for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array.
 If the fruit is in your array, the if block should print a statement,
such as You really like bananas!
 */

//Define array
let favorite_Fruits : string[] = ["Mango","Orange","Grapes"];

//Using If Else Statement
if ( favorite_Fruits.includes("Mango")){
console.log("Mango is one of my favorite fruits");
}
if(favorite_Fruits.includes("Orange")){
    console.log("Orange is one of my favorite fruits.");
}
if(favorite_Fruits.includes("Banana")){
    console.log("Banana are not of my favorite fruits.");
}
if((favorite_Fruits.includes("Grapes"))){
    console.log("Grapes is one my favorites fruits.");
}
if((favorite_Fruits.includes("Guava"))){
    console.log("Guava are not of my favorit fruit.");
}   