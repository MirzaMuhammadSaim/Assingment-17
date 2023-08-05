// Create an array of allowed passwords.
const allowPassword = [
    'saim123',
    'ali123',
    'hello123',
    'open123',
];


// QUESTION N0 2
// Create a login function that will check if the argument is a value that is
// included in the passwords array. You can use indexof() or the
// includes() method to check the array for a value and return a
// Boolean value of the result.


function login(password)
{
    const allowPassword = [
        'saim123',
        'ali123',
        'hello123',
        'open123',
    ];
    return allowPassword.includes(password);
}

const passwordCheck = 'hello123';
const islogin = login(passwordCheck);
console.log(islogin);

//QUESTION NO 3
// Add a function that returns a Promise. Using resolve and reject ,
// return a JavaScript object with the Boolean of true or false to
// indicate the password validity status

function checkPasswordValidity(password){
    const allowPassword = [
        'saim123',
        'ali123',
        'hello123',
        'open123',
    ];
    return new Promise((resolve,reject) => {
        if(allowPassword.includes(password)){
            resolve ({isValid:true});
        }else{
            reject ({isValid:false});
        }
    });
}

const passwordToCheck = 'hello123';
checkPasswordValidity(passwordToCheck)
.then((result) => {
    console.log(result.isValid);
})
.catch((error) => {
    console.log(error.isValid)
});


// QUESTION NO4 
// Create a function that checks the password, sending it to the login
// function, and using then() and catch() , outputs the result of either
// the rejected password or the resolved password.


// function checkPassword(password) {
//     login(password)
//       .then((islogin) => {
//         console.log('Password is valid:', islogin);
//       })
//       .catch(() => {
//         console.log('Invalid password');
//       });
//   }
//   const passwordToChk = 'hello123';
// checkPassword(passwordToChk);

// function checkPassword(password) {
//     login(password)
//       .then((islog) => {
//         console.log('Password is valid:', islog);
//       })
//       .catch(() => {
//         console.log('Invalid password');
//       });
//   }
//   const passwordtCheck = 'hello123';
//   checkPassword(passwordtCheck);

function checkPassword(password) {
    
       function login(password){
        checkPassword.then((isValid) => {
        console.log('Result:', isValid ? 'Password is valid' : 'Invalid password');
      })
      .catch(() => {
        console.log('Invalid password');
      });
    }
  }
  const passwordTCheck = 'hello123';
  checkPassword(passwordTCheck);


  function checkPassword(password) {
    login(password)
      .then((isValid) => {
        console.log('Result:', isValid ? 'Password is valid' : 'Invalid password');
      })
      .catch(() => {
        console.log('Invalid password');
      });
  }
  
  const passwordsToCheck = [
    'saim123',
    'ali123',
    'hello123',
    'open123',
  ];
  
  passwordsToCheck.forEach((password) => {
    checkPassword(password);
  });
