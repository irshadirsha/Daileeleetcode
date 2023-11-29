/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function(s) {
   const arr=[...s]
   const newarr=[]
   const newarr2=[]
    console.log(s);
    const specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', '\\', ';', ':', '"', '\'', ',', '.', '/', '<', '>', '?','`'];
    for(let i=0;i<arr.length;i++){
         if(!specialCharacters.includes(arr[i])){
        if(arr[i]!==" " && arr[i]!==","){
            newarr.push(arr[i])
        }
    }
    }
    for(let i=newarr.length-1;i>=0;i--){
       
        newarr2.push(newarr[i])
    }
    
    console.log(newarr2);
    console.log(newarr)
    if(newarr.join('').toLowerCase()===newarr2.join('').toLowerCase()){
        return true
    }else{
        return false
    }
};


