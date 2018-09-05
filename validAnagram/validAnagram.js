/*
FREQUENCY COUNTER PATTERN

Given two string, write a function to determine 
if the second string is an anagram of the first.
An anagram is a word, phrase, or name formed by rearranging 
the letters of another, such as cinema, formed from iceman.

Inputs are lowercase single words (strings).
No spaces, punctuation, numbers etc.
*/
const validAnagram = (str1, str2) => {
    if (str1.length !== str2.length) {
        return false;
    }
    
    const charCounter1 = {};
    for (let char of str1) {
        charCounter1[char] = (charCounter1[char] || 0) + 1;
    }

    const charCounter2 = {};
    for (let char of str2) {
        charCounter2[char] = (charCounter2[char] || 0) + 1;
    }

    for (let key in charCounter1) {
        if (!(key in charCounter2)) {
            return false;
        }

        if (charCounter1[key] !== charCounter2[key]) {
            return false;
        }
    }

    return true;
}

module.exports = validAnagram;
