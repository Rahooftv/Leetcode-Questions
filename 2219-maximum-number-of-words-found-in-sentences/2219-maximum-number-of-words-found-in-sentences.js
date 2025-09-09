/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
   
    let arr = []
    for(i=0;i<sentences.length;i++){
        let a = sentences[i].split(" ")
       arr.push (a.length)

    }
    return Math.max(...arr)
    
};