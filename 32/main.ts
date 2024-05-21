//Q.No.32
/*32.Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a
new username. If a username has not been used, print a message saying that the username is available.*/

let currentUser = ["Wania","Sana","Saman","Fatima","Sania"];

let newUser = ["Zainab","Fatima","Aisha","Sana","Kanwal"];

newUser.forEach(new_one_User => {
    let condition = currentUser.some(current_one_User => current_one_User.toLowerCase() === new_one_User.toLowerCase());
    if(condition){
        console.log(`Sorry ${new_one_User} is already taken`);
    }else{
        console.log(`This username ${new_one_User} is available`);
    }

})
