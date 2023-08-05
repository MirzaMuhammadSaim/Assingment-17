// Send the full-name array to the greet() function created in the first
// step


function greet(fullName) {
    const greeting = `Hello, ${fullName.join(' ')}!`;
    console.log(greeting);
  }
  
  function processUser(fullName, callback) {
    callback(fullName);
  }
  
  const fullNameArray = ['ali', 'hamza'];
  processUser(fullNameArray, greet);
  