/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
   
    let S =0
    let T =0
    for (word of s){
        S += word.charCodeAt(0)
    }

     for (word of t){
        T += word.charCodeAt(0)
    }
    return String.fromCharCode(T-S)


    
};