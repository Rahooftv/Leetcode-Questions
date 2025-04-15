/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function(words1, words2) {

   words1 = words1.filter((word,ind,arr)=>arr.indexOf(word)==arr.lastIndexOf(word))
   words2 =words2.filter((word,ind,arr)=>arr.indexOf(word)==arr.lastIndexOf(word))


   let words = [...words1,...words2]
   let filterword = words.filter((word,ind,arr)=>arr.indexOf(word)!==arr.lastIndexOf(word))
   return duplicate = [...new Set(filterword)].length
    
};