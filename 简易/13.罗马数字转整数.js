/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) { // III   IV
    let map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    sum = 0, loop = 0, num = 0, now = 0;
    while (loop < s.length) { // loop:0      1    s.length:2    2
        now = map[s[loop]]; // now: 1      5
        if (num < now) {
            sum -= num; // sum:0  -1
        } else {
            sum += num;
        }
        num = now; // num:1  5
        loop++
    }
    sum += num; // 4
    return sum;
};
// @lc code=end