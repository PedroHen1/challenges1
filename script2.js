/*Program to create a new string from a given string taking the first 3 characters and the last 3 characters of a string and adding them together. The string length must be 3 or more, if note, the original string is returned.*/
const makeNewStr = (str) => str.length >= 3 ? str.slice(0, 3) + str.slice(-3) : str 
console.log(makeNewStr('abckeijld'))
console.log(makeNewStr('he'))


/*Program to extract the first half of a string of even length*/
const firstHalf = (str2) => str2.slice(0, str2.length/2)
console.log(firstHalf('pedrinho'))


/*Program to concatenate two strings their except their first character*/
const resultStrs = (firstStr,secondStr) => firstStr.substring(1) + secondStr.substring(1)
console.log(resultStrs('pedro', 'henrique')) 

/*given two values, write a Js program to find out which one is nearest to 100*/
const nearest = (a, b) => a && b < 100 ? Math.max(a, b) : Math.min(a , b)
console.log(nearest(120, 110))

/*Program to check a given string contains 2 to 4 occurrences of a specified character*/ 
const countChars = (string, char) => string.split('').filter(ch => ch === char).length

const contains2to4 = (string, char) => countChars(string, char) >= 2 && countChars(string, char) <= 4
console.log(contains2to4('ooh!', 'o'))
console.log(contains2to4('oh!', 'o'))
console.log(contains2to4('ooooh!', 'o'))
console.log(contains2to4('oooooh!', 'o'))