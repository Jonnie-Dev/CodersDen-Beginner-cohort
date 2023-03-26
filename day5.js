// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
// ]

// const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB'
// ]

// let text =
// 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// let words = text.replace(/[^a-zA-Z0-9 ]/g, "").split(" ")
// console.log(words)
// console.log(words.length)

const ages = [19, 22, 19, 24, 20,12,23,3,4,5,5,67, 25, 26, 24, 25, 24]

const sortedAge = (ages.sort((a,b) => a-b))
console.log(sortedAge)
sortedAge[(sortedAge.length / 2) + 1]

if(sortedAge.length % 2 == 0) {
    console.log((sortedAge[sortedAge.length/2] + (sortedAge[sortedAge.length/2] + 1))/2)
} else {
    console.log(sortedAge[((sortedAge.length +1) /2)])
}

console.log((sortedAge.reduce((a,b) => a+b))/sortedAge.length)

console.log(sortedAge[sortedAge.length - 1] - sortedAge[0])

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]

  if (countries.length % 2 !== 0) {
      console.log(countries.slice(0, (countries.length+1)/2), countries.slice((countries.length+1)/2))
  } else {
    console.log(countries.slice(0, (countries.length)/2), countries.slice((countries.length)/2))
  }