const coding = ['js', 'ruby', 'java', 'python', 'cpp']

// coding.forEach( function(item){
//     console.log(item)
// })

// coding.forEach((item) => {
//     console.log(item);
// })

function printMe(item){
    console.log(item);
}

//coding.forEach(printMe)

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        langaugeName: "Javascrispt",
        langaugeFileName: 'js'
    },
    {
        langaugeName: "Python",
        langaugeFileName: 'py'
    },
    {
        langaugeName: "Java",
        langaugeFileName: 'java'
    }
]


myCoding.forEach((val)=>{
    console.log(`Filename of ${val.langaugeName} is ${val.langaugeFileName}`);
})
