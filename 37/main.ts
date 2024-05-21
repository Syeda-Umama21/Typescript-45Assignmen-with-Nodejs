//Q.No.37
/*37. Large Shirts: Modify the make_shirt() function so that shirts are large
by default with a message that reads I love TypeScript. Make a large shirt and a
medium shirt with the default message, and a shirt of any size with a different
message.
*/

//Make a Function
function make_shirt (size: string = "Large" , printMessage: string = "Code is life"){
    console.log(`Crating a ${size} t-shirt with the message ${printMessage} print on shirt.`);
}
//Calling a function by defualt values
make_shirt();

//Calling a function now with medium size and defualt message
make_shirt("Medium");

//Calling a function now with small size and also print different message

 make_shirt("Small","I love JAvaScript");