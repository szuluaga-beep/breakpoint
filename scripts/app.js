// const person = {
//   name: "Germán",
//   age: 33,
//   getNameText() {
//     return `Mi nombre es ${this.name}`;
//   },
// };

// console.log(person.getNameText());
// // Mi nombre es Germán

// person.getAgeText = function () {
//   return `Mi edad es ${this.age}`;
// };

// console.log(person.getAgeText());
// // Mi edad es 33

// person.hobby = "Beber cerveza";
// console.log(`Me gusta ${person.hobby.toLowerCase()}, yay!`);
// // Me gusta beber cerveza, yay!
// console.log(person.getNameText());

function Person (name,age,color) {
  this.name = name;
  this.age = age;
  this.color = color;
  this.getInfo = function () { 
    return `${this.name}, ${this.age}, ${this.color}`;

  }

}

let father = new Person('Jhon', 18, 'red');
let mother = new Person('Juana', 19, 'green');

Person.prototype.getName = function () {
  return `Name: ${this.name}`
}


console.log(mother.getInfo())
console.log(father.getName())
console.log(mother)