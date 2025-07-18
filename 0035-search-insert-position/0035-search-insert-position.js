/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    for(i=0;i<nums.length;i++){
        if(nums[i]===target){
            res = i
        }else if(!nums.includes(target)){
            nums.push(target)
            nums.sort((a,b)=>a-b)
            res = i
        }
    }

    return res
    
};