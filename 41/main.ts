//Q.No.41
/*41. Magicians: Make a array of magician’s names. Pass the array to a function
called show_magicians(), which prints the name of each magician in the array.
*/

//Define array
let magicians_name = [
    "Michael Ammar",
    "David Blaine",
    "Criss Angel"];

//Define Function
function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}
//Call the Function
show_magicians(magicians_name);