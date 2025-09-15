/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let sum=0
    let sum1 =0
     let split = nums.flatMap(num => num.toString().split('').map(Number))
    for(i=0;i<nums.length;i++){
        sum+=nums[i]
    }
   
    
    for(j=0;j<split.length;j++){
        sum1+=split[j]
    }
 return sum-sum1
    
};