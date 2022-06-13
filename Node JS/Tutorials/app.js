console.log("Hello World!");

const fs = require("fs");
const os = require('os');
const notes = require('./notes.js');

// fs METHOD 1
// fs.appendFile("Greetings.txt", "Hello World\n", function(err) {
//     if (err) {
//         console.log("Error Occured");
//     }
// });

// fs METHOD 2
//     fs.appendFileSync("abc" + i + ".txt", "Hello LPU...!");

// for (var i = 0; i < 1000; i++) {
//     fs.appendFileSync("abc" + i + ".txt", "Hello LPU...!");
// }

// os METHOD 1 and fatch user data
// var user = os.userInfo();
// console.log(user);
// fs.appendFileSync("msg.txt", `Hello ${user.username}..!`);


// using multifile and modules (exports)
// var user = os.userInfo();
// fs.appendFileSync("new.txt", `Hello ${user.username} You are ${notes.age}.`);

console.log(`Result is :- ${notes.add(12,10)}`);