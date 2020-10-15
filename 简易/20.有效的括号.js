/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
};
// @lc code=end


// 将(``[``{标记为正数，)``]``}相反
// 字符串 → 数组，Every，按1取每一项值
// 若为正，放入FILO（现进后出）栈q
// 若为负，从栈q从弹出最后一项与当前项的值匹配
// 字符串无效，返回Flase的情况
// 字符个数为单数：ar.length % 2 !== 0
// 2的值为负，栈q为空
// 2的值为负，栈q最后一项不匹配
// Every结束，栈q不为空
