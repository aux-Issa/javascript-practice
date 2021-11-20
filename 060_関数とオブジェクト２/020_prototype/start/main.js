function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.hello = function(){
    console.log(`Hello!, ${this.name}'s age is ${this.age}`)
}
const bob = new Person('Bob', 18);
bob.hello()
const tom = new Person('Tom', 33);
const sun = new Person('Sun', 20);
