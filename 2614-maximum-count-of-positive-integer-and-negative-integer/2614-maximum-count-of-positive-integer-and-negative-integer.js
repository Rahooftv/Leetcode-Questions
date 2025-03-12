/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    let count=0
    let countneg =0
    for(i=0;i<nums.length;i++){
        if(nums[i]>0 && nums[i]!=0){
            count++
        }else if(nums[i]!=0){
            countneg++
        }

    }
    if(count>countneg){
        return count
    }else{
        return countneg
    }
};