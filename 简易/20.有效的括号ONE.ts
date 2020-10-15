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



// 借鉴了国际站的实现思路，遍历字符串时，匹配到左括号时是将其相应的右括号进行了压栈，遇到右括时判断和栈顶元素是否相等即可，最后判断栈是否为空
let map: any = {
    '{': '}',
    '[': ']',
    '(': ')'
}
function isValid(s: string): boolean {
    let stack: string[] = []
    let top: string | undefined

    for (let char of s) {
        let value
        if ((value = map[char])) {
            stack.push(value)
        } else {
            top = stack.pop()
            if (top != char) {
                return false
            }
        }
    }
    return !stack.length
}

