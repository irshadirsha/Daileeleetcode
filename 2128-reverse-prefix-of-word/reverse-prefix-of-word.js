/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */

var reversePrefix = function(word, ch) {
//  console.log(word,ch);
 let rev=[]
 let a=null
 for (let i = 0; i < word.length; i++) {
    if (word[i]==ch) {
        a=i
        break;
    }
}
if (a) {
   
    for (let i = a; i >=0; i--) {
        rev.push(word[i])
    }


    let st='';

    for (let index = 0; index < rev.length; index++) {
    st+=rev[index];        
    }


    for (let i = 0; i < word.length; i++) {
    if(a<i){
        st+=word[i]
    }        
    }

return st 
}

return word


 
};