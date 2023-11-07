/*
LeetCode problem #383

Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
Each letter in magazine can only be used once in ransomNote.

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true
 
 */

const canConstruct = (ransomNote, magazine) => {
    const charCount = {};
  
    for (const char of magazine) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
  
    for (const char of ransomNote) {
      if (charCount[char] > 0) {
        charCount[char]--;
      } else {
        return false;
      }
    }
  
    return true;
  };