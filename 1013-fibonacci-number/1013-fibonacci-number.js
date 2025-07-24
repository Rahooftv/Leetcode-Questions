/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n<=1) return n
   let a =0 
   let b =1
   for(i=2;i<=n;i++){
    let temp = a+b
    a = b
    b = temp 

   }
   return b
    
};