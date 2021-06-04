/*
    CIT 281 Project 1
    Name: Will Mosher
*/
let letters = "qwertyuiopasdfghjklzxcvbnm";
let emptyLetters = "";
for (let i = 0; i < Math.floor(Math.random() * (26 - 5) + 5); i ++) {
    emptyLetters += letters[Math.floor(Math.random() * (26 - 5) + 5)]
}
console.log(emptyLetters);

