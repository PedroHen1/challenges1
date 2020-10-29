/*Check two numbers and return true if one of the numbers is 100 or if the sum of the two numbers is 100*/

const numbers = (a, b) => a === 100 || b === 100 || a + b === 100

console.log(numbers(50, 50))

/*Get the extension of a filename*/

let fileName = 'index.html'
let ext =  fileName.split('.').pop();
console.log('.' + ext)

/*Replace every character in a given string with the character following it in the alphabet*/ 
let str = ['c','e','h','a','b']
console.log(str.sort())

/*Get the Current date.
Expected Output: mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy */ 

let today = new Date()
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');//+1 because january is 0!
var yyyy = today.getFullYear()

today = `${dd}-${mm}-${yyyy}`
console.log(today)

/*Create a new String adding 'New!' in front of a given string. If the given String begins with 'New!' already then return the original string without the 'New!'.*/ 

const giveNew = string => string.indexOf('New!') === 0 ? string.slice(5, 200) : `New! ${string}`

console.log(giveNew('New! Pedro'))