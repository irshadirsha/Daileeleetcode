/**
 * @param {number[]} nums
 * @return {boolean}
 */

 var containsDuplicate = function(nums) {
   console.log(nums)
     let uniqnum= new Set(nums)

     if(uniqnum.size===nums.length){
        return false
     }else{
        return true
     }
}


// var containsDuplicate = function(nums) {
//    let res=false
//    for(let i=0;i<nums.length;i++){
//       for(let j=i+1;j<nums.length;j++){
//         if(nums[i]==nums[j]){
//         res=true
//         return res
//       }

// }
// }
// return res
// }