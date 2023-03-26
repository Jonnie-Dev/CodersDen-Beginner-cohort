// Write a program which tells the number of days in a newMonth.
//   Enter a month: January
//   January has 31 days.

//   Enter a month: JANUARY
//   January has 31 day

//   Enter a month: February
//   February has 28 days.

//   Enter a month: FEbruary
//   February has 28 days.

function checkNumberOfDays(month, year){
    let newMonth = month.toLowerCase()
    if(year % 4 == 0){
        if(newMonth == "february") {
            return 29
        }
    } else {
        if(newMonth == "september" || newMonth =="april" || newMonth == "june" || newMonth ==  "november") {
            return 30
        } else if (newMonth == "february") {
            return 28
        } else {
            return 31
        }
    }
}

console.log(checkNumberOfDays("february", 2020))