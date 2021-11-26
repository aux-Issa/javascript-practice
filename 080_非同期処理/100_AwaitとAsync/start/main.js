function sleep(val) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log(val++);
      resolve(val);
    }, 1000);
  });
}

async function init(){
  let val = await sleep(0)
  console.log(val)
  return val
}
init().then(function(val){
  console.log(val, 'thenだよ')
  return init(val)
}).then(function(val){
  console.log(val, 'then2なり')
})
const issa = init().then(function(val){return val})
console.log(issa, 'issa')
// sleep(0).then(function(val) {
//   return sleep(val);
// }).then(function(val) {
//   return sleep(val);
// }).then(function(val) {
//   return sleep(val);
// }).then(function(val) {
//   return sleep(val);
// }).then(function(val) {
//   return sleep(val);
// })
