/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {


     ar = BigInt(digits.join(''))
     plus = ar+1n
   
    plus=String(plus).split("").map(Number)
    return plus
    

   
};