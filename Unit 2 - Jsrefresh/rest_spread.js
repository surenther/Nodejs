//Objects
const person = {
    name:'Surenther',
    age: 23,
    greet() {
        console.log ('Hi, I am ' + this.name);
    }
};

const hobbies = ['Sports', 'Cooking'];
//Copy way
const copiedArray = hobbies.slice();
console.log (copiedArray);

//spred to copy
const copied_spread = [...hobbies];
console.log (copied_spread);

//rest operator explanation
const toArray = (arg1,arg2,arg3) => {
    return [arg1,arg2,arg3]
};
console.log (toArray(1,2,3))

const toArray_rest = (...args) => {
    return args;
};
console.log (toArray_rest(1,2,3,4,5))