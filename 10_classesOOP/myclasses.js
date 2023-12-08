class User {
    constructor(userName, email, password) {
        this.userName = userName
        this.email = email
        this.password = password
    }

    encryptedPassword(){
        return `${this.password}abc987`
    }

    changeUserName(){
        return `${this.userName.toUpperCase()}`
    }
}

const chai = new User('chai', 'chai@gmail.com', 'strongMan' )
console.log(chai);

console.log(chai.userName); 
console.log(chai.encryptedPassword());
console.log(chai.changeUserName());

//behind the scene

function user1(userName, email, password){
    this.userName = userName
    this.email = email
    this.password = password
}

user1.prototype.encryptedPassword = function(){
    return `${this.password}abc987`
}

user1.prototype.changeUserName = function(){
    return `${this.userName.toUpperCase()}`
}

const tea = new user1('tea', 'tea@fb.com', '14582')
console.log(tea);
console.log(tea.encryptedPassword());
console.log(tea.changeUserName());