class User  {
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        return 'no access'
    }

    set password(value){
        this._password = value
    }
}

const amit = new User('amit@if.com', '1452')
console.log(amit.password + ', ' + amit.email);