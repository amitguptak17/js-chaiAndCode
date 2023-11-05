const mySym = Symbol('key1')

const jsUser = {
    name: 'Amit',
    'fullname': 'Amit Gupta',
    location: 'Kolkata',
    [mySym]: 'myKey1', // that's how refer symbol
    email: 'amit@google.com',
    isLoggedIn: false,
    lastLoginDays: ['Monday', 'Saturday']
}

jsUser.email = 'amit@netflix.com'
//Object.freeze(jsUser);
jsUser.email = 'amit@microsoft.com'
//console.log(jsUser);

// console.log(jsUser.email);
// console.log(jsUser['email']);
// console.log(jsUser['fullname']);
// console.log(jsUser[mySym]);

jsUser.greetings = function(){
    console.log("Hello JS USer");
}

jsUser.greetingsTwo = function(){
    console.log(`Hello JS User ${this.name}`);
}

//console.log(jsUser);
// console.log(jsUser.greetings);
console.log(jsUser.greetings());
console.log(jsUser.greetingsTwo())