// Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more

function calculateBMI(weight, height) {
  let bmi = (weight / (height ** 2))
  console.log(bmi)
  // if (bmi < 18.5) return "You are underweight"
  // else if (bmi < 24.9) return "You are normal weight"
  // else if (bmi < 29.9) return "You are overweight"
  // else return "Alaye mi, you are obese"


  return (bmi < 18.5) ? "You are underweight" : (bmi < 24.9) ? "You are normal weight" : (bmi < 29.9) ? "You are overweight" : "Alaye mi, you are obese"

  // return conditon ? result : else
}
// 
console.log(calculateBMI(120, 3.5));


// Write a function called checkSeason, 
// it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
// The seasons are defined as 
// spring (March, April, May), 
// summer (June, July, August), 
// autumn (September, October, November) and
//  winter (December, January, February).

//Arrow function template
// const nameoffunction = (parameter) => {

// }

const checkSeason = (month) => {
  let months = ["december", "january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november"]
  let monthIndex = months.indexOf(month.toLowerCase())
  if (monthIndex == -1) return "Enter a valid month"
  return monthIndex < 3 ? "It's Winter" : monthIndex < 6 ? "It's Spring" : monthIndex < 9 ? "It's Summer" : "Its Autumn"

  // switch(months) {
  //   case ("march", "april", "may") : 
  //     return "It's Spring"
  //     break;
  //   case ("june", "july", "august") : 
  //     return "It's Summer"
  //     break;
  //   case ("september", "october", "november") : 
  //     return "It's Autumn"
  //     break;
  //   case ("december", "january", "february") : 
  //     return "It's Winter"
  //     break;
  // }
}

console.log(checkSeason("AUGUST"));

// Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

// console.log(findMax(0, 10, 5))
// 10
// console.log(findMax(0, -10, -2))
// 0

function findMax(arr) {
  let [highest, lowest] = [arr[0], arr[0]]

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > highest) highest = arr[i]
    if (arr[i] < lowest) lowest = arr[i]
  }
  return [highest, lowest]
  
  // if (x > y && x > z) return x
  // else if (y > x && y > z) return y
  // else return z

  // return arr.reduce((acc,curr) => curr > acc ? acc = curr : acc, 0)
}

console.log(findMax([12, 15, 10, 5]))
// 10
console.log(findMax([-3, -10, -2]))
// 0


// Write a function which takes any number of arguments and return the sum of the arguments

// sum(1, 2, 3) // -> 6
// sum(1, 2, 3, 4) // -> 10

function sum(arr) {
  let summ = 0

  for (let num of arr){
    summ += num
  }
  
  return summ

  // arr.map(num => summ += num)

  // return arr.reduce((acc,curr) => acc + curr, 0)

}

console.log(sum([1, 2, 3]))
console.log(sum([1, 2, 3, 4])) 












// let numChar = 5
// let numIDs = 6


// const randomMac = "XX:XX:XX:XX:XX:XX".replace(/X/g, function() {
//     return "0123456789ABCDEF".charAt(Math.floor(Math.random() * 16))
//   });

//   console.log(randomMac)


//   var ip = (Math.floor(Math.random() * 255) + 1)+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255));
//   console.log(ip)

//   const rgbColorGenerator =() => {
//     const randomColor = () => Math.floor(Math.random() * 255) +1
//     return `rgb(${randomColor()} ${randomColor()} ${randomColor()})`
//   }

//   console.log(rgbColorGenerator())
  
// function isPrime(num){
//   if((num <= 1)) return false
//   if (num == 2 || num == 3) return true
//   for (let i = 2; i < num; i++) {
//     console.log(num,i)
//     if (num % i === 0) return false
//   }
//   return true
// }

// console.log(isPrime(2))

// function uniqueArray(){
//   const randomNum = () => Math.floor(Math.random() * 10)
//   let arr = []
  
//   while(arr.length < 7) {
//     let newRandom = randomNum()
//     if(!arr.includes(newRandom)) {
//       arr.push(newRandom)
//     }
//   }
//   return arr
// }
// console.log(uniqueArray())
 