// const user = {
//     userName: 'Amit',
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         console.log(`Username: ${this.userName}`);
//     }
// }

// user.getUserDetails()
// console.log(this);

function user(userName, logginCount, isLoggedIn) {
    this.userName = userName
    this.logginCount = logginCount
    this.isLoggedIn = isLoggedIn

    this.greetings = function(){
        console.log(`welcome ${this.userName}`);
    }

    return this
}

const userOne = new user('Amit', 8, true)
const userTwo = new user('Shikha', 12, false)
console.log(userOne);
console.log(userTwo);
console.log(userTwo.greetings());
console.log(userOne.constructor);