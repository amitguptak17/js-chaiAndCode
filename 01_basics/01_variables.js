const accountId = 12543;
let acountEmail = "amit@gmail.com";
var accountPassword = '12536';
accountCity = 'Kolkata'

// accountId = 52413; -- not allowed

acountEmail = 'amit@navya.com';
accountPassword = '25413';
accountCity = 'Mumbai' // allowed in JS but don't use it

let accountState;

console.table([acountEmail, accountPassword, accountCity, accountState])

/*
Prefer not to use var 
because  of issue in  block scope and fucntional scope
*/