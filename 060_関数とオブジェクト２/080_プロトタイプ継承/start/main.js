function Person(name, age) {
  this.name = name;
  this.age = age;
}
const bob = new Person('Bob', 14)
Person.prototype.hello = function() {
  console.log('hello ' + this.name);
}


function Japanese(name, age){

}
Japanese.prototype = Object.create(Person.prototype)
const taro = new Japanese('')