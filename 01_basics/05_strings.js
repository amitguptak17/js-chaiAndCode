const gameName = new String('Amit-nv');
const myName = 'honey'
console.log(gameName);

//console.log(gameName.charAt(2))
//console.log('bharat'.charAt(2))
//console.log(gameName.indexOf('u'))

let newGameName = gameName.substring(0,4)
console.log(newGameName);

const anotherGameName = gameName.slice(-8,4)
console.log(anotherGameName)

const newStringOne = '      Amit        '
console.log(newStringOne);
console.log(newStringOne.trim());

const url = 'https://amit.com/amit%20gupta'
console.log(url);
console.log(url.replace('%20','-'));
console.log(url.includes('amit'));

const newStringTwo = 'Amit-hc-kr'
console.log(newStringTwo.split('-'));


