/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const words = s.split(' ');
    let newarr=[]

      console.log("newone",words)
      for(let i=words.length-1;i>=0;i--){
        if(words[i]!==""){
            newarr.push(words[i])
            break;
        }else{
            continue
        }
      }
      let len=newarr[0].split('').length
      return len

       
};