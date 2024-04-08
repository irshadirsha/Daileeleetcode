/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
   // console.log(words)
   let flag=0
   for(let i=0;i<words.length;i++){
      // console.log(words[i])
      let rev=words[i].split("").reverse().join("")
      // console.log("rev",rev);
      if(words[i]==rev){
        flag=1
         return rev
      }
   }
   if(flag==0){
    return ""
   }

};