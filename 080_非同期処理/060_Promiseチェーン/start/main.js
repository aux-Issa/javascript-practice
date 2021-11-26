function sleep(val) {
  return new Promise(function(resolve){
    setTimeout(function() {
      console.log(val++);
      resolve(val)
    }, 1000);
  })
}
sleep(1).then(function(val){
  return sleep(val)
}).then(function(val){
  console.log(val)
  return val
}).then(function(val){
  return sleep(val)
})