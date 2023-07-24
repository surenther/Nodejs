//Objects
const person = {
    name:'Surenther',
    age: 23,
    greet() {
        console.log ('Hi, I am ' + this.name);
    }
};

//calling Objects
console.log(person);
person.greet();

//array
const hobbies = ['Sports','Cooking'];
// for (let hobby in hobbies) {
//     console.log(hobby)
// }
console.log(hobbies.map(hobby => {
    return 'Hobby: ' + hobby;
}))