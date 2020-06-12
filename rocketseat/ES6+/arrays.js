// Map
const array = [1, 3, 4, 5, 8, 9]

const newArray = array.map((item, index) => {
    return item + index
})

console.log(newArray)

// Reduce
const sum = array.reduce((total, next) => {
    return total + next
})

console.log(sum)

// Filter
const filter = array.filter((item) => {
    return item % 2 === 0;
})

console.log(filter)

// Find
const find = array.find((item) => {
    return item === 4
})

console.log(find)