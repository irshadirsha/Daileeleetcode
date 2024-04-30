/**
 * @param {number[]} nums
 * @return {number}
 */


 var removeDuplicates = function(nums) {
    console.log("loggg", nums);
    let i=0
    while(i<=nums.length-1){
        if(nums[i]==nums[i+1]){
            nums.splice(i+1,1)
           
        }else{
            i++
        }
    }
    return nums.length
}
// var removeDuplicates = function(nums) {
//   console.log("loggg", nums)
//   for(let i=0;i<nums.length;i++){
//     if(nums[i]==nums[i+1]){
//         nums.splice(nums[i+1],1)
//         i--;
//     }
//   }
//     return nums.length
// };