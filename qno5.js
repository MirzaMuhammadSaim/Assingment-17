// Invoke the process of the callback function.


function greet(fullName) {
    const greeting = `Hello, ${fullName.join(' ')}!`;
    console.log(greeting);
  }
  
  function processUser(fullName, callback) {
    callback(fullName);
  }
  
  const fullNameArray = ['abdullah', 'amjad'];
  processUser(fullNameArray, greet);
  