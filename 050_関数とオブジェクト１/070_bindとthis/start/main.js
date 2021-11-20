window.name = 'Issa';

const person = {
    name: 'Tom',
    hello: function(name) {
        console.log('Hello ' + name);
    }
}
person.hello();

// function fn(ref) {
//     ref();
// }

// fn(person.hello);

const Issa = {
    name: 'Issa',
    address: 'Otsu'
}
const greeting = person.hello.bind(null, 'Issa')
greeting()