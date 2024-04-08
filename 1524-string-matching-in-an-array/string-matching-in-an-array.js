/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
      console.log(words)
      let newarr=[]
      for(let i=0;i<words.length;i++){
         for(let j=0;j<words.length;j++){
            if(i!==j&&words[i].includes(words[j])){
               if(!newarr.includes(words[j])){
               newarr.push(words[j])
               }
             
            }
         }
      }
    return newarr
};