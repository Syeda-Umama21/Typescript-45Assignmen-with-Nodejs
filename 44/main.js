"use strict";
//Q.No.44
/*44. Sandwiches: Write a function that accepts a array of items a person wants
on a sandwich. The function should have one parameter that collects as many
items as the function call provides, and it should print a summary of the sandwich
that is being ordered. Call the function three times, using a different number
of arguments each time.
*/
//Define a function with a rest parameter
function make_Sandwich(...item) {
    console.log("\nMaking a sandwich with the following item:\n");
    item.forEach(oneItem => console.log("-" + oneItem));
    console.log("\nNow enjoy sandwich\n");
}
make_Sandwich("chicken", "cheese", "mayo", "egg");
make_Sandwich("Bread", "Butter");
make_Sandwich("Bread", "egg", "Butter", "Tomato", "mayo");
