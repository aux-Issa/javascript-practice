function sleep(val) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log(val++);
      resolve(val);
    }, val*1000);
  });
}
Promise.all([sleep(1),sleep(2),sleep(3)])
sleep(0).then(function(val) {
  return Promise.all([sleep(1),sleep(2),sleep(3)])
}).then(function(val) {
  console.log(val)
  return sleep(val);
}).then(function(val) {
  return sleep(val);
})
