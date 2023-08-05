// // Create a function named greet() that takes one argument, fullName .
// That argument should be an array. Output the items of the array into
// the console interpolated into a greeting message string.



function greet(fullName) {
  const greeting = `Hello`+ fullName;
  console.log(greeting);
}
const fullNameArray = ['John', 'Doe'];
greet(fullNameArray);