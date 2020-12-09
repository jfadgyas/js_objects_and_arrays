//Variables
let person = {
    name: 'Janos',
    age: 42,
    evaluations: [7,10, 9]
};

let colors = ['groen', 'blauw', 'rood'];

//Person data
console.log(person);
console.log(person.name);
console.log(person['age']);
console.log(person.evaluations);

//colors
console.log(colors);
console.log(colors.length);
console.log(colors[0]);
console.log(colors[colors.length-1]);

//adding to array
colors.push('geel');
colors.push(5);
colors.push({greeting: 'Hi ik ben een object'});

console.log(colors[colors.length-1].greeting);