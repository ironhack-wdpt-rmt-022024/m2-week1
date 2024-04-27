function sum (a, b, c) {
  return a + b + c;
}

// const res = sum(10, 5, 25);
// console.log('res', res);


// Rest parameters ...
function dynamicSum (a, ...args) {
  console.log('args', args);
  let sum = a;

  args.forEach((arg) => {
    sum += arg;
  });

  return sum;
}


// const res2 = dynamicSum(5, 100, 1000);
// console.log('res2', res2); 


function foo (...values) {
  // arguments
  console.log('arguments', arguments)
  console.log('values', values);
}

foo(1, { name: 'bob'}, [1,2,3], "hello")