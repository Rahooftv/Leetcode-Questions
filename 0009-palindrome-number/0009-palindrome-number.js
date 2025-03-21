/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    a=x.toString()
    b=a.split("").reverse().join('')
    return b==x    
};