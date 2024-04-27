const matrix = [
  ['bob', 'sarah'],
  ['anna', 'marc']
];

const [ ,[winner, ] ] = matrix;

console.log('winner', winner);


const students = [
  { name: 'Mimmy', course: 'WD'},
  { name: 'Alex', course: 'WD'},
  { name: 'Bob', course: 'UX'},
]

const [ , { name }] = students;

console.log('name', name)