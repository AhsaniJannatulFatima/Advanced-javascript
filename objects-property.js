const students = [
    {id: 21, name: 'ahsani'},
    {id: 31, name: 'sarwar'},
    {id: 41, name: 'sharmi'},
    {id: 51, name: 'fatima'},
];
// const names = students.map( s => s.name);
// const ids = students.map( s => s.id );
// console.log(names);
const names = students.map( s => s.name);
const ids = students.map( s => s.id );
const bigger = students.filter( s => s.id>40);
const biggerOne = students.find( s => s.id>40);
console.log(biggerOne);
