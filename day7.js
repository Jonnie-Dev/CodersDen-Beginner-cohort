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

function uniqueArray(){
  const randomNum = () => Math.floor(Math.random() * 10)
  let arr = []
  
  while(arr.length < 7) {
    let newRandom = randomNum()
    if(!arr.includes(newRandom)) {
      arr.push(newRandom)
    }
  }
  return arr
}
console.log(uniqueArray())
 