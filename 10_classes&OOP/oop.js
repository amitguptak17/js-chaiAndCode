const user = {
    userName: 'Amit',
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log(`Username: ${this.userName}`);
    }
}

user.getUserDetails()