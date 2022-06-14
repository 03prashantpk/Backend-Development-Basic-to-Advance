console.log("Accessing Functions file");
const fs = require('fs');
const { json } = require('stream/consumers');

// Reading Json file
var getUserData = () => {
        var userDataString = fs.readFileSync('data.json');
        var userData = JSON.parse(userDataString);

        return userData;
    }
    //console.log(getUserData());



// Add new user informations
var addUser = (savingData) => {
    fs.writeFileSync('data.json', JSON.stringify(savingData));
}


// User Exist
var CheckIfUserExist = (userName, userPassword) => {
    console.log('Entered Details', `\Username: ${userName}, \Password:  ${userPassword}`);

    var user = false;
    var user = getUserData().find(function(user) {
        return user.userName === userName && user.userPassword === userPassword
    });

    var newUser = {
        userName,
        userPassword
    }

    if (user == null) {
        //console.log(newUser);
        savingData = getUserData();
        savingData.push(newUser);
        addUser(savingData);
    } else {
        console.log(`User exist: ${user.userName}`);
        //console.log(user);
        return true;
    }

}


// register function
var register = (userName, userPassword) => {
    CheckIfUserExist(userName, userPassword);
}

// Exporting all the functions as module
module.exports = {
    register,
    getUserData,
};