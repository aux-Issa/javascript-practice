new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('promise');
        resolve()
    }, 1000)
}).then(function(){
    console.log('then1')
}).then(function(){
    console.log('then2')
    throw new Error();
}).catch(function(){
    console.log('catch')
}).finally(function(){
    console.log('finally')
})

console.log('out of Promise');