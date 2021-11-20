function a(name, name1) {
    console.log('hello ' + name + name1);
}
const Tim = {
    name: 'Tim'
}
const b = a.bind(Tim);
b();
a.apply(null, ['Tim', 'Bob'])
a.call(null, 'Tim', 'Issa')
const arry = [1,2,1,3,45];
const biggestNum = Math.max(...arry)
console.log(biggestNum)