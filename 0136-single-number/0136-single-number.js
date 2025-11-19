/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {

    let res =nums.filter((a)=>nums.indexOf(a)==nums.lastIndexOf(a))
    return res[0]
    
};