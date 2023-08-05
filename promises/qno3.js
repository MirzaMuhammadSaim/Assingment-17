// Set up the next function in the Promise with four then() instances,
// which should output a value into the counter function, and return a
// value which will provide input for the subsequent then() instance.
// The returned values should be one , then two , then three . The
// screen output in the console should be the following:



const startCountingPromise =  new Promise((resolve,reject)=>{
    resolve("startcounting");
})

startCountingPromise.then((value)=>{
    counter(value);
    return 1;
})
.then((value)=>{
    counter(value);
    return 2;
})
.then((value)=>{
    counter(value);
    return 3;
})
.then((value)=>{
    counter(value);
})
function counter(value) {
    console.log(value);
  }
