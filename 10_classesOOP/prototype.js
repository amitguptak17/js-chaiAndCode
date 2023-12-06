let myName = 'Amit    '

console.log(myName.length);


// Object.prototype.trueLength = function (word){
//     console.log(word.trim().length);    
// }

// myName.trueLength()

let myHeroes = ['thor', 'spiderMan']

let heroPower = {
    thor : 'hammer',
    spiderMan: 'sling',

    getSpiderPower : function(){
        console.log(`Spider power is ${this.spiderMan}`);
    }
}

Object.prototype.amit = function(){
    console.log(`I am the best coder of 2024`);
}

Array.prototype.heyAmit = function(){
    console.log('Hey Amit');
}

heroPower.getSpiderPower()
heroPower.amit()
myHeroes.amit()
myName.amit()
myHeroes.heyAmit()
//myName.heyAmit()


const user = {
    userName: 'chai',
    useremail: 'chai@gmail.com'
}

const teacher = {
    makeVideo : true
}

const Teachingsupport = {
    isAvailable : true
}

const TaSupport = {
    makeAssignment : 'JS Assignment',
    fullTime: true,
    __proto__ : user
}

// teacher.__proto__ = user

console.log(TaSupport.makeAssignment);
//console.log(TaSupport.userName, TaSupport.useremail);


// modern Syntax

Object.setPrototypeOf(teacher, user)
console.log(teacher.userName, teacher.useremail);

let anotherName = 'jasmina       '

String.prototype.truelength = function(){
    console.log(this);
    //console.log(this.name);
    console.log(`The trimmed length is ${this.trim().length}`);
}

anotherName.truelength()

'amit   '.truelength()