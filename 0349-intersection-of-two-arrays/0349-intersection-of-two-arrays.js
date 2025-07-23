/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let arr=[]
    let num1 =[...new Set(nums1)]
    let num2 = [...new Set(nums2)]
    for(num of num1){
        if(num2.includes(num)){
             arr.push(num)
        }
       
    }
    return arr
    
};