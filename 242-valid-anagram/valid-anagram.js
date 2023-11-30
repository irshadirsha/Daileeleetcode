/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(st1,st2) {
    console.log(st1,st2);
    const s=[...st1].sort()
    const t=[...st2].sort()
    console.log(s);
    console.log(t);
    let flag=0
    if(s.length!=t.length){
        return false
    }
    for(let i=0;i<s.length;i++){
        
            if(s[i]!==t[i]){
                flag=1
                break;
            }
        }
    

    if (flag==0) {
        return true
    } else {
       return false
    }
    
};



