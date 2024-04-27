// Spread operator ... - arrays

const numbers = [1, 2, 3, 4, 5];

// Spread array values into a funtion/mehtod call
console.log(...numbers);

// Spread array values into a new array
const numbersCopy = [ ...numbers ];
console.log('numbersCopy', numbersCopy);




// Spread operator ... - objects
const user = {
  firstName: 'Adrian',
  lastName: 'Martin'
}

// Spread values of an object into a new object
const newObj = { ...user, age: 21, firstName: 'Jorge' };
console.log('newObj', newObj);


function printName(user) {
  console.log(user.firstName + ' ' + user.lastName);
}

printName( { ...user } )


