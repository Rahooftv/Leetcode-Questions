/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
   let a =s.slice(0,s.length/2)
   let b =s.slice(s.length/2)
 
   let vow = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
   let countA =0
   let countB=0
  for(i=0;i<a.length;i++){
    if(vow.includes(a[i])) countA++
    if(vow.includes(b[i])) countB++
  }

  return countA== countB

};
