const myNoCode = {
    webDesign: 'Webflow',
    WebDev: 'Wized',
    Backend: 'FireBase'
}

for (const key in myNoCode) {
   //console.log(myNoCode[key])
}
const myObject = {
    javascript: 'js',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by Apple'
}

for (const key in myObject) {
    //console.log(`Key for ${key} is ${myObject[key]}`);
}

const IndPlayers = ['Dhoni', 'Virat', 'Rohit', 'Shami', 'Bumrah']


for (const key in IndPlayers) {
   //console.log(IndPlayers[key]);
        
    }

    const map = new Map()
    map.set('IN', "India")
    map.set('USA', "United States of America")
    map.set('Fr', "France")
    map.set('IN', "India")

    for (const key in map) {
        console.log(key);
    }