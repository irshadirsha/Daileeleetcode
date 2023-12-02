/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    console.log(digits)
    let arr=[]
    let number=digits.join('')
    console.log(number);
    let numbers=BigInt(number)
    console.log(numbers);
     arr.push(numbers+1n)
    const num = arr[0].toString().split('').map(Number)
     console.log(arr);
     console.log(num);
     return num

};