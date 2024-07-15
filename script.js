/*

In JavaScript, the find function is used to find the first element 
in an array that satisfies a provided testing function.
*/


/*
const persons = [
  { name: 'Florin', age: 25 },  // Object representing the first person
  { name: 'Ivan', age: 20 },    // Object representing the second person
  { name: 'Lian', age: 18 }     // Object representing the third person
];

const age = persons.find(findFlorin).age; //returnTheAge

function findFlorin(person) {
  return person.name === 'Florin';
}

console.log(age); //25
*/


/*
const persons = [
  { name: 'Florin', age: 25 },  // Object representing the first person
  { name: 'Ivan', age: 20 },    // Object representing the second person
  { name: 'Lian', age: 18 }     // Object representing the third person
];
const age = persons.find(findFlorin).age; //returnTheAge

function findFlorin(person) {
  return person.name === 'Florin';
}
console.log(age); //25

//25   const age = persons.find(findFlorin).age; //returnTheAge

*/


/*
const persons = [
  { name: 'Florin', age: 25 },  // Object representing the first person
  { name: 'Ivan', age: 20 },    // Object representing the second person
  { name: 'Lian', age: 18 }     // Object representing the third person
];
const age = persons.find(findFlorin); //withhout.age

function findFlorin(person) {
  return person.name === 'Florin';
}
console.log(age); //output := object {name:'florin',age:25}
*/

/*
const persons = [
  { name: 'Florin', age: 25 },  // Object representing the first person
  { name: 'Ivan', age: 20 },    // Object representing the second person
  { name: 'Lian', age: 18 }     // Object representing the third person
];
const age = persons.find(findFlorin); //withhout.age

function findFlorin(person) {
  return person.age === 25;
}
console.log(age);   //output := object {name:'florin',age:25}   
*/



/*
const persons = [
  { name: 'Florin', age: 25 },  // Object representing the first person
  { name: 'Ivan', age: 20 },    // Object representing the second person
  { name: 'Lian', age: 18 }     // Object representing the third person
];
const age = persons.find(findFlorin).name; //.name

function findFlorin(person) {
  return person.age === 25;
}
console.log(age);   //output : Florin
*/

/*
const persons = [
  { name: 'Florin', age: 25 },
  { name: 'Ivan', age: 20 },
  { name: 'Lian', age: 18 },
];

const florin = persons.find(person => person.name === 'Florinnnn');

if (florin) {
  console.log(florin); // Output: { name: 'Florin', age: 25 }
} else {
  console.log('Florin not found');
}

//Florin not found
*/


/*
const ages = [3, 10, 18, 20];


function checkAge(age) {
  return age > 18;
}


console.log(ages.find(checkAge)); //18
*/

/*
const ages = [3, 10, 18, 20];
function checkAge(age) {
  return age > 18;
}
console.log(ages.find(checkAge)); //output :20
*/






