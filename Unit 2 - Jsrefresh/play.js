var name = 'Surenther';
var age = 38;
var hasHobbies = true;

function summarizeUser(UserName, UserAge, UserHobbies) {
    return (
      "Name is " +
      UserName +
      ",age is " +
      UserAge +
      " and the user has hobbies: " +
      UserHobbies
    );
}

console.log(summarizeUser(name, age, hasHobbies));