// Destructuring assignemnt - objects
const user = {
  name: 'Bob',
  age: 21,
  city: 'Barcelona',
  country: 'Spain'
};

// const name = user.name;
// const age = user.age;
// const city = user.city;

const { name: firstName, age, city } = user;


console.log('firstName', firstName);
console.log('age', age);
console.log('city', city);

