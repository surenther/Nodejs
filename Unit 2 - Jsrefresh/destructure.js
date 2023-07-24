//Objects
const person = {
    name:'Surenther',
    age: 23,
    greet() {
        console.log ('Hi, I am ' + this.name);
    }
};

//destructure Object in Arg
const printName = ({ name }) => {
    console.log (name)
};
printName(person);

//destructure Object in const
const {name, age } = person;
console.log (name,age);

///destructure Array
const hobbies = ['Sports','Cooking'];
const [hoby1,hoby2] = hobbies;
console.log (hoby1,hoby2);