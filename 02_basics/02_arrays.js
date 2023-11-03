const marvelHeroes = ['thor', 'captainAmerica', 'spiderman'];
const dcheroes = ['batman', 'superman', 'flash'];
// marvelHeroes.push(dcheroes)
const newheroes = marvelHeroes.concat(dcheroes)
//console.log(newheroes);
const allNewHeroes = [...marvelHeroes, ...dcheroes]
// console.log(allNewHeroes);

const anotherArray = [2, 5, 1, [5, 2, 6], 7, [4, 8, [7, 2], 3]];
const realAnotherArray = anotherArray.flat(Infinity)
// console.log(realAnotherArray);

// console.log(Array.from('Amit'));

const score1 = 100;
const score2 = 200;
const score3 = 300;

console.log(Array.of(score1, score2, score3));


