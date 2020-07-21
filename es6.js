// > $ node es6.js

// let redefined
// const binding is not changing

//global
let x = 0;
x = 1;
x = 'apple';

const dontReassignMe = 'banana';
// dontReassignMe = 'cucumber';

const constList = [];
// constList = 'something else';
constList.push('new stuff');

const constObj = {foo:'bar'};
constObj.foo == 'baz';

//block / local
for(let i =0; i < 5; i++){
    let innerVar = 'apple'
    console.log(innerVar)
}

// console.log(innerVar)
innerVar = 'banana'
// console.log(innerVar)

//fat arrow functions
function oldSchool(a,b){
    console.log(this)
}
oldSchool();

// fat arrow functions have no 'this'
// 'this' here would work if inside another function
const newSchool = (a,b) => console.log(this);
newSchool();

date = '6.26.2020'
let long = 'release date' + date
let short = `release date ${date}`
