//Async code
setTimeout (() => {
    console.log ('Timer is Done')
},2000);

//Sync code
console.log('Hello');
console.log('Hi');

//Async dependency

// const fetchdata = callback => {
//     setTimeout (() => {
//         callback ('!done again')
//     },1500);
// };

// setTimeout(() => {
//     console.log ('Second Timer is done');
//     fetchdata (text => {
//         console.log(text)
//     });
// },2000);

//Promise test

const fetchdata = () => {
    const promise = new Promise((resolve,reject)=> {
        setTimeout (() => {
           resolve('!done again')
        },1500);
    });
    return promise;
};

setTimeout(() => {
    console.log ('Second Timer is done');
    fetchdata().then(text => {
        console.log(text);
        return fetchdata();
    })
    .then(text2 => {
        console.log(text2)
    });
},2000);
