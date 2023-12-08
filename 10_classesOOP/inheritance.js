class User {
    constructor(userName){
        this.userName = userName
    }

    logMe(){
        console.log(this.userName);
    }
}

class teacher extends User{
    constructor(userName, email, password){
        super(userName)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`new course was added by ${this.userName}`);
    }
}

const chai = new teacher('chai', 'chai@t.com', '4585')
console.log(chai);
chai.addCourse();

const masalaChai = new User('masalaChai')

chai.logMe()
masalaChai.logMe()

console.log(chai instanceof teacher)
console.log(chai instanceof User)
