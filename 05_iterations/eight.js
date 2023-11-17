const myNumbers = [1,2,3,4,5,6,7,8,9,10];
const numWithInitialNum = myNumbers.reduce((accumulator, value) => {
    //console.log(`accumulator: ${accumulator}, current Value: ${value}`);
     return accumulator + value},
    0)

//console.log(numWithInitialNum);

const shoppingCart =[
{
    itemName : 'JS Course',
    price : '2999'
},
{
    itemName: 'Py Course',
    price : '999'
},
{
    itemName : 'Mobile Development Course',
    price : '5999'
},
{
    itemName : 'Data Science Course',
    price : '12999'
}
]

const cartTotal = shoppingCart.reduce((acc,curPrice) => acc + Number(curPrice.price), 0)

console.log(cartTotal);