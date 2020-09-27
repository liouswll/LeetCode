/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */

// 一
// var isPalindrome = function(x) {
//     if(x<0) return false;
//     let originN = x; 
//     let newN = 0;
//     while(x>0){
//         let tmp = x%10;
//         newN = newN*10 + tmp;
//         x = (x-tmp)/10;
//     }
//     return originN === newN;
// };








// 二
// var isPalindrome = function(x) {
//     if(x<0) {
//         return false;
//     } else if(String.prototype.split.call(x,'').reverse().join('') != x) {
//         return false 
//     }
//     return true
// };


// 三
var isPalindrome = function(x) {
    
};
// @lc code=end

