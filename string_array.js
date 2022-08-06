const items = [
    { name: "Rice", price: 5 },
    { name: "Book", price: 20 },
    { name: "Chicken", price: 10 },
    { name: "monitor", price: 100 },
]

// let totalPrice = 0
// items.forEach(item => {
//     totalPrice += item.price
// })

const totalAmount = items.reduce((total, item) => { // acumulator
    // console.log(total)
    // console.log(item)

    return total + item.price
}, null)

// console.log(totalAmount)


const people = [
    { name: 'Kyle', age: 25 },
    { name: 'Spagetti', age: 34 },
    { name: 'Jon', age: 21 },
    { name: 'Muki', age: 21 },
]

const result = people.reduce((groupedPeople, person) => {
    // console.log('Grouped people: ', person)
    const age = person.age
    // console.log(age);
    if (groupedPeople[age] == null) groupedPeople[age] = []
    // console.log(groupedPeople[age]);
    groupedPeople[age].push(person)
    return groupedPeople

}, {})

// console.log(result)


// console.log(totalPrice)

const array = [13, 2, 5, []]

const sum = array.reduce((total, item) => {
    console.log(total);
    return total + item
}, 0)

console.log(sum);

// print(1+1==='2' && 1+1==='2')
// print('hello')


// const reverseSeq = (n) => {
//     for (let i=n; i>0; i++) {
//     console.log(i)
//     }
//   };

  
//   console.log(Array(5, '3', ['4', 3], {}, Array('4', 3)))


// let a = 1
// let b = 1
// let c = 1

// function expressionMatter(a, b, c) {
//     let result1 = a * (b + c)
//     console.log('result1:', result1)
//     let result2 = a * b * c
//     console.log('result2:', result2)
//     let result3 = a + b * c
//     console.log('result3:', result3)
//     let result4 = (a + b) * c
//     console.log('result4:', result4)
//     let result5 = a + b + c
//     console.log('result5:', result5)
//     let result6 = a * b + c
//     console.log('result6:', result6)


//     let biggest = result1
//     console.log('biggest here:', biggest)
//     if (biggest < result2){
//         biggest = result2
//     console.log('biggest first if:', biggest)
//     } if (biggest < result3){
//         biggest = result3
//     console.log('biggest second if:', biggest)
//     } if (biggest < result4){
//         biggest = result4
//     console.log('biggest third if:', biggest)
//     } if (biggest < result5){
//         biggest = result5
//     } if (biggest < result6){
//         biggest = result6
//     }

//     console.log(biggest)
//     return biggest
//     // console.log(biggest)
    
//     // return // highest achievable result
// }

//   expressionMatter(a, b, c)