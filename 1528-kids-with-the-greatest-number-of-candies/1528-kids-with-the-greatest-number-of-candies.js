/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let max = Math.max(...candies)
    let arr = []
    for(i=0;i<candies.length;i++){
        if(candies[i]+extraCandies>=max){
            arr.push(true)
        }else{
            arr.push(false)
        }
    }
    return arr
};