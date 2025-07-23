/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    let join = s1.concat(" ",s2)
    let arr =join.split(" ")
    let dup = arr.filter((a,b,c)=>c.indexOf(a)===c.lastIndexOf(a))

    return dup
};