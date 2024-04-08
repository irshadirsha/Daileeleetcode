/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    console.log(word1, word2)
   let words1=word1.join("")
   let words2=word2.join("")
   console.log(words1,words2);
   if(words1==words2){
      return true
   }else{
      return false
   }
};