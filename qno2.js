// . Create a second function that has two arguments: the first one is a
// string for the user's full name, and the second is the callback
// function.

function processUser(fullName, callback) {
    callback(fullName);
  }
  function greet(fullName) {
    const greeting = `Hello, ${fullName}!`;
    console.log(greeting);
  }
  
  const fullNameString = 'saim nasir';
  processUser(fullNameString, greet);