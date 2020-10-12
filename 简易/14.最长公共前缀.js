/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let str = strs[0];
    let res = '';
    if(!str) return res;
    for(let i = 0; i < str.length; i++){
        let flag = strs.every(item => item[i] == str[i]); // every() 1. 用于检测数组中的元素是否都符合指定条件   2. 用指定函数检测数组中的所有元素
        if(flag){
            res += str[i]
        }else{
            return res
        }
    }
    return res
};
// @lc code=end

