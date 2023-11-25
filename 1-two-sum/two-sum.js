/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length-1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
         if (i !== j&& nums[i] + nums[j]===target) {
         return [i,j]
         }
    }}
};

var nums=[1, 4, 2, 5, 7, 8];
var target=6;
twoSum(nums,target);
