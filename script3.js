/*Write a JS program to find the number of even digits in a array of integers*/
const arr = [1, 8, 12, 2, 3, 4, 5, 6]
const even = arr.filter(arr => arr % 2 === 0).length
console.log(even)

/*Write a JS program to find the number of even values up to a given number*/
const result = (number) => number.filter(num => num % 2 === 0).length;

const createArray = (num) => {
    const returnArray = [];
    for (let i = 1; i <= num; i++){
        returnArray.push(i)
    }
    return returnArray
}
console.log(result(createArray(6)))
console.log(result(createArray(9)))

/*Js program to check wheter a given array of integers is sorted in ascending order*/
const sorted = (numbers) => {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i + 1] < numbers[i]) return false
    }
    return true
}
console.log(sorted([1, 2, 3, 4, 5]))
console.log(sorted([1, 2, 8, 4, 12]))
console.log(sorted([2, 3, 1, 7, 5]))

/*A program to get the largest even number from an array of integers*/

const largest = (arr2) => 
Math.max(...arr2.filter(num2 => num2 % 2 ===0))

console.log(largest([12,26,33,61,34,42,65]))
