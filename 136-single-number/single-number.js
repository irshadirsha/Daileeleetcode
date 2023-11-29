/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  
    for(let i=0;i<nums.length;i++){
        let flag=0
        for(let j=0;j<nums.length;j++){
            if(i!=j && nums[i]==nums[j]){
                flag =1
                break;
            }
   
        }
         if(flag==0){
        return nums[i]
    }
    }
};