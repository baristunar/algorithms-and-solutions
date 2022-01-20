/* Given two strings, write a function to determine if the second string 
is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging 
the letters of another, such as  */

/* Time Complexity - O(n) */

const validAnagram = (str1, str2) => {
    if (str1.length !== str2.length) return false;
  
    const word1 = {};
    const word2 = {};
  
    for (const char of str1) {
      word1[char] = (word1[char] || 0) + 1;
    }
  
    for (const char of str2) {
      word2[char] = (word2[char] || 0) + 1;
    }
  
    for (const char in word1) {
      if (!(char in word2)) return false;
      if (word1[char] !== word2[char]) return false;
    }
  
    return true;
  };
  
  validAnagram("", ""); // true
  validAnagram("aaz", "zza"); // false
  validAnagram("anagram", "nagaram"); // true
  validAnagram("rat", "car"); // false
  validAnagram("awesome", "awesom"); // false
  validAnagram("qwerty", "qeywrt"); // true
  