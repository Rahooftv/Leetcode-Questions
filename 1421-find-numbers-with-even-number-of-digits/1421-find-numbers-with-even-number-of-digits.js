/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {

   let count = 0
    for(i=0;i<nums.length;i++){
        let a = nums[i].toString()
        let length = a.length
        if(length%2==0){
            count++
        }


    }
    return count
    
};