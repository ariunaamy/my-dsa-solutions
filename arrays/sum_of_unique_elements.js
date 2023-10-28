//LeetCode problem #1748

/*Sum of Unique Elements

You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.
Return the sum of all the unique elements of nums.

Example 1:

Input: nums = [1,2,3,2]
Output: 4
Explanation: The unique elements are [1,3], and the sum is 4.
Example 2:

Input: nums = [1,1,1,1,1]
Output: 0
Explanation: There are no unique elements, and the sum is 0.
Example 3:

Input: nums = [1,2,3,4,5]
Output: 15
Explanation: The unique elements are [1,2,3,4,5], and the sum is 15.
 
*/

//Solution 1.

const sumOfUnique1 = (nums) => {
    const numCount = {};
    let sum = 0;
  
    for (const num of nums) {
      if (numCount[num] === undefined) {
        numCount[num] = 0; 
      }
      numCount[num]++; 
      if (numCount[num] === 1) { 
        sum += num; 
      } else if (numCount[num] === 2) {
        sum -= num; sum=1
      }
    }
  
    return sum;
  };

  //Solution 2.
  
  const sumOfUnique2 = function(nums) {
      let sumOfUnique = 0; 
      let numCount = {}; 
  
      for (let num of nums){
          numCount[num] = (numCount[num] || 0) + 1;
          if(numCount[num] === 1){
              sumOfUnique +=num;
          }else if(numCount[num] === 2){
              sumOfUnique -=num;
          }
      }
      return sumOfUnique  
  };
