/**
 * @param {string[]} nums
 * @param {number} k
 * @return {string}
 */
// var kthLargestNumber = function(nums, k) {
//     console.log(nums, k);
//     let arrs=nums.map((item)=>{
//         return  BigInt(item)
//     })
//     console.log(arrs);
//     let len=arrs.length
//     console.log(len);
//     for(let i = 0; i < arrs.length - 1; i++){
//         for(let j = 0; j < arrs.length -i-1; j++){
//             if(arrs[j] > arrs[j+1]){
//                 let temp = arrs[j];
//                 arrs[j] = arrs[j+1];
//                 arrs[j+1] = temp;
//             }
//         }
//     }
//     console.log(arrs);
//     let index=len-k
//   console.log("index",index);
// //   console.log(arrs[index])
//   return arrs[index].toString();
// };

var kthLargestNumber = function(nums, k) {
nums = nums.map(BigInt);
nums.sort((x, y) => x-y >=0 ? -1 : 1);
return nums[k-1]+ '';
}