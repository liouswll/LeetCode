/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var twoSum = function(nums, target) {
        if(nums.length < 2) return -1;
        for(let i = 0; i < nums.length; i++){
            for(let j = i+1; j < nums.length; j++){
              if(nums[i] + nums[j] == target){
                  return [i, j]
              }  
            }
        }
        return -1
    };
};
// @lc code=end


// 进化-Map
// var twoSum = function(nums, target) {
//     let map = new Map();
//     for (let i = 0; i < nums.length; i++) {
//       let dif = target-nums[i]
//       if (map.has(dif)) {
//         return [map.get(dif), i]
//       }
//       map.set(nums[i], i);
//     }
//   };