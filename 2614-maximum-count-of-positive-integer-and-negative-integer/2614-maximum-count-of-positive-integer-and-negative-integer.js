/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    let poscount =0
    let negcount =0
    let count =0


    for (i=0;i<nums.length;i++){
        if(nums[i]==0){
             count++
        }
        else if(nums[i]>0){
            negcount++
        }else{
           poscount++
        }
    }
  return Math.max(poscount,negcount)

};