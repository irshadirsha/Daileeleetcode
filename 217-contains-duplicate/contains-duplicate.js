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
//    console.log(nums)
//    let flag=0
//    for(let i=0;i<nums.length;i++){
//       for(let j=i+1;j<nums.length;j++){
//         if(nums[i]!==nums[j]){
//          continue
//         }else{
//          flag=1
//          return true
//         }
//       }

// }
// if(flag==0){
//    return false
// }
// }
