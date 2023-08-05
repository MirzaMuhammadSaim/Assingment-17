// Set up a Promise that resolves with a value of Start Counting 


const startCountingPromise = new Promise((resolve, reject) => {
  resolve("Start Counting");
});

startCountingPromise.then((value) => {
  console.log(value);
});
