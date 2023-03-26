// let base = prompt("Enter base length")
// let height = prompt("Enter height")
// let area = (base * height)/2
// console.log(`The area of the traingle is ${area}`)

// function calcSlope([x1, y1], [x2, y2]) {
//     return (y2-y1)/(x2-x1)
// }
// console.log(calcSlope([2,2],[6,10]))

// let firstName = 'Anjolaoluwa'
// let lastName = 'Adeyemi'

// console.log(`Your ${firstName.length > lastName.length? `first name, ${firstName}` : `last name, ${lastName}`} is longer than your ${firstName.length > lastName.length ? `last name, ${lastName}` : `first name, ${firstName}`}`)

// Exercise 3

const now = new Date

console.log(now.getFullYear())
console.log(now.getMonth() + 1)
console.log(now.getDate())
console.log(now.getHours())

console.log(`${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()} ${now.getHours() > 9 ? now.getHours() : `0${now.getMinutes()}`}:${now.getMinutes() > 9 ? now.getMinutes() : `0${now.getMinutes()}`}`)

