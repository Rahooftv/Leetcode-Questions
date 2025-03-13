/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    nums1 = [...new Set(nums1)]
    nums2 = [...new Set(nums2)]
    let num1 = nums1.filter(num=>!nums2.includes(num))
    let num2 = nums2.filter(num=>!nums1.includes(num))
    return [num1,num2]

    
};