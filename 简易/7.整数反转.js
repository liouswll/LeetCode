/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */



var reverse = function(x) {
    let now = Math.abs(x).toString().split("").reverse().join("");
    if(x < 0){
        return now <= Math.pow(2,31) ? -now : 0;
    }else{
        return now < Math.pow(2,31) ? now : 0;
    }
}







// var reverse = function(x) {
//     if(x >= 0) {
//         const xStr = String(x);
//         return Number(xStr.split('').reverse().join(''));
//     } else {
//         const xStr = String(x);
//         return -xStr.slice(1).split('').reverse().join('')
//     }
// };


/*注释1（以输入数字1230为例）：
numStr.split('')//将字符‘123’转成数组['1','2','3','0']
.reverse()//反转数组，得到['0','3','2','1']
.join('')//数组转成字符串'0321'
Number()//最后加将反转后的字符串转为数字得到321
*/

/*
注释2：
与注释1中不同的是先截取字符串numStr的第1位到最后一位，不截取负号，最后反转完后直接用-将反转后的字符串转为负数，得到-321
+、-单独使用表示将其后面的元素转成数字类型，相当于Number()方法，只不过'-'会将后面的元素转化成负数。注意：-0得到-0，+0得到0，不是数字返回NaN如：+undefined //NaN
*/
// @lc code=end


// 语法示例
// ['1','2','3'].join('')
// "123"


// '123'.split('')
//  ["1", "2", "3"]

// Number('012')
// 12