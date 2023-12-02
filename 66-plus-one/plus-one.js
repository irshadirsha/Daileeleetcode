/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let arr=[]
    let number=digits.join('')
    let numbers=BigInt(number)
     arr.push(numbers+1n)
     return arr[0].toString().split('').map(Number)
    

};