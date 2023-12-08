function setuserName(userName){
   this.userName = userName
   console.log('called');
}


function createUser(username, email, password){

    setuserName.call(this, username)

    this.email = email
    this.password = password
}

const chai = new createUser('chai', 'chai@fb.com', 'chai1234')
console.log(chai);