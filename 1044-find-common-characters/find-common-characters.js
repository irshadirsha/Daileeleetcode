/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
   console.log("log words",words)
   let newarr=[]
   let str=words[0]
   for(let i=0;i<str.length;i++){
      console.log("first loop i--",str[i]);
      let flag=0
      for(let j=1;j<words.length;j++){
      console.log("second loop i--",words[j]);

         if(!words[j].includes(str[i])){
            flag=1
         }else{
            words[j]=words[j].replace(str[i],"")
         }
      }
      console.log(flag);
      if(flag==0){
      newarr.push(str[i])
      }
   }
   return newarr
};