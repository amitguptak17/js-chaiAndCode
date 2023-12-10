// not important    

const user = {
    _email : 'amit@i.com',
    _password : '12547',

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const amit = Object.create(user)
console.log(amit.email);
