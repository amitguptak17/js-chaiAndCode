function user(email,password){
    this._email = email
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return `${this._email} is a nice email`
        },
        set: function(value){
            this.email = value
        }
    })

    Object.defineProperty(this, 'password', {
        get: function(){
            return `${this._password}8542`
        },
        set: function(value){
            this.password = value
        }
    })

}

const amit = new user('amit@1.com', '4585')
console.log(amit.email, amit.password );
