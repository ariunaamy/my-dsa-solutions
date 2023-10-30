//LeetCode problem #125

/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters 
and removing all non-alphanumeric characters, it reads the same forward and backward. 
Alphanumeric characters include letters and numbers.
Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
*/

function isOnlyLetterOrNumber(input) {
    return /^[a-zA-Z0-9]+$/.test(input);
  }
  
  
  var isPalindrome = function(s) {
  let left = 0;
  let right = s.length-1 
    
    while(left<right){
      let checkLeft=isOnlyLetterOrNumber(s[left])
      let checkRight=isOnlyLetterOrNumber(s[right])
      if(checkLeft && checkRight){
        if(s[left].toLowerCase() !== s[right].toLowerCase()){
          return false;
        }
        left++;
        right--; 
      }else{
        if(!checkLeft) left++;
        if(!checkRight) right--;
      }
    }
    return  true;
  };
  