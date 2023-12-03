const promiseOne = new Promise(function(resolve,reject){
    // simply do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        
        console.log('Async task is complete');
        resolve()
       
    },2000)
})


promiseOne.then(()=>{
    console.log('Promise is completed');
})


new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log('Async task 2 loaded');
        resolve()
    }, 2000)
}).then(()=>{
    console.log('async task 2 also completed');
})

const promiseThree = new Promise((resolve, reject)=>{
    setInterval(function(){
        resolve({userName: 'chai', userEmail: 'user@example.com'})
    }, 2000)
})

promiseThree.then((user) => {
    console.log(user);
    console.log(user.userName);
})

const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = false
        if(!error){
            resolve({userName: 'Amit', password: '12345'})
        } else {
            reject('Error! Something went wrogn')
        }
    },4000)
})

promiseFour.then((user)=>{
  return user.userName

}).then((username)=>{
    console.log(username);
}).catch((error) => {
    console.log(error);
}).finally(()=>console.log('The Promise is either resolved or rejected'))

const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true
        if(!error){
            resolve({userName: 'JavaScript', password: '12345'})
        } else {
            reject('Error! JavaScript went wrogn')
        }
    },3000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

async function getAllUsers(){
   try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data[0].name);
   } catch (error) {
    console.log(`E: ${error}`);
   }
}

getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data[0].email);
}).catch((error)=>{
    console.log('something went wrogn');
})

//console.log(fetch('https://jsonplaceholder.typicode.com/users'));

