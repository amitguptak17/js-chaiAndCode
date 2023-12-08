class User {
    constructor(userName){
        this.userName = userName
    }

    logMe(){
        console.log(`Username: ${this.userName}`);
    }

    static createID(){
        return `1251441juyhh`
    }
}

const Amit = new User('Amit')
//console.log(Amit.createID())

class teacher extends User {
    constructor(userName, email){
        super(userName)
        this.email = email
    }
}

const iPhone = new teacher('iPhone', 'i@phone.com')
console.log(iPhone);
iPhone.logMe()

console.log(iPhone.createID());
