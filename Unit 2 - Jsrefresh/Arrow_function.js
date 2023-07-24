const name = 'Surenther';
let age = 38;
const hasHobbies = true;

age = 30;

// Arrow Function
const summarizeUser = (UserName, UserAge, UserHobbies) => {
    return (
        "Name is " +
        UserName +
        ",age is " +
        UserAge +
        " and the user has hobbies: " +
        UserHobbies
      );
};

// Another way
// const add = (a,b) => {
//   return a + b;
// }

//Short hand way
const add = (a,b) => a + b;

//One Arugument
const addOne = a => a + 1;

//No Arugment
const addRandom = () => 1 + 2;


console.log(summarizeUser(name, age, hasHobbies));
console.log(add(1,3));
console.log(addOne(5));
console.log(addRandom());