function processUser(fullName, callback) {
    const fullNameArray = fullName.split(' ');
    callback(fullNameArray);
  }
  function greet(fullName) {
    const greeting = `Hello`+  fullName;
    console.log(greeting);
  }
  
  const fullNameString = 'Saim';
  processUser(fullNameString, greet);
  
  