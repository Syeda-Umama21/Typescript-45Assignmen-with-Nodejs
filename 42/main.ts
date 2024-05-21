//Q.No.42
/*42. Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians by adding
the phrase the Great to each magician’s name. Call show_magicians() to
see that the list has actually been modified.
*/

//Define a function
function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

function make_great(magicians: string[]){
    return magicians.map(name => `The Great ${name}`);
}

let magician_name = [
    "Michael Ammar",
    "David Blaine",
    "Criss Angel"];

let great_magicians = make_great(magician_name);

show_magicians(great_magicians);