const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI')
console.log(descriptor);
descriptor.writable = true
console.log(descriptor);

let chai = {
    name: 'ginger Chai',
    price: 250,
    isAvailable: true,

    order: function(){
        console.log('chai nhi bni');
    }
}

console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai, 'name'));


Object.defineProperty(chai, 'name', {
   // writable: false,
    //enumerable: true,
    //configurable: false

})

// console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

 chai.name = 'mocha tea'

for (const [key,value] of Object.entries(chai)) {
    if (typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
}

// console.log(chai);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);