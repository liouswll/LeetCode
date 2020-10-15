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
var isValid = function (s) {
    // 找到最内层的括号对，消去，重复此过程，若存在无法消去的字符则说明字符串无效。
    while (s.length) {
        var temp = s;
        s = s.replace('()', '')
        s = s.replace('[]', '')
        s = s.replace('{}', '')
        if (s == temp) return false
    }
    return true
};
// @lc code=end

var isValid = function (s) {
    // 借鉴了国际站的实现思路，遍历字符串时，匹配到左括号时是将其相应的右括号进行了压栈，遇到右括时判断和栈顶元素是否相等即可，最后判断栈是否为空
};