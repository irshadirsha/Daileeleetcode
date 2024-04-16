/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function(words) {
     let result = 0;
    for(let i=0; i< words.length; i++){
        const reversedWord = words[i].split('').reverse().join('')
       console.log("reversedWord",reversedWord)
        if(words.includes(reversedWord,i + 1)){
            result = result + 1
        }
        
    }

    return result;
};