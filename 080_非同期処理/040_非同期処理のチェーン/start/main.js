function sleep(callback, value){
    setTimeout(
        function(){
            console.log(value++);
            callback(value);
        }, 1000);
}
sleep(function(){
    console.log('callback done')
})