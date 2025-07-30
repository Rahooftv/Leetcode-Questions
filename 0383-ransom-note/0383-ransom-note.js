/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {

    for (char of ransomNote){
        let ind = magazine.indexOf(char)
        if(ind == -1) return false
        magazine = magazine.slice(0,ind)+magazine.slice(ind+1)
    }

    
    return true
    
    
};