//Objects
const person = {
    name:'Surenther',
    age: 23,
    greet() {
        console.log ('Hi, I am ' + this.name);
    }
};

console.log(person);
person.greet();