class Person {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  hello(){
    console.log('hello ' + this.name)
  }
}
const issa = new Person('Issa', 21)
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.hello = function() {
//   console.log('hello ' + this.name);
// }