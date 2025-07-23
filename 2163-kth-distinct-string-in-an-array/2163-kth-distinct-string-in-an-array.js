/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {

    let filter = arr.filter((a,b,c)=>c.indexOf(a)===c.lastIndexOf(a))
    console.log(filter)
    
    for(i=0;i<filter.length;i++){
       if(i+1==k){
           
       return filter[i]
       }
   }
    return ""
    
};