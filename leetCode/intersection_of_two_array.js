/*
LeetCode#349 

Given two integer arrays nums1 and nums2, 
return an array of their intersection. 
Each element in the result must be unique 
and you may return the result in any order.

Example 1:*/
const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2];
//Output: [2]

//Example 2:
//const nums1 = [4,9,5]; const nums2 = [9,4,9,8,4]
//Output: [9,4]
//Explanation: [4,9] is also accepted.

/*Constraints:
1 <= nums1.length, nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 1000
*/

var intersection = function (nums1, nums2) {
  const result = [];
  let uniqueNums1Arr = [...new Set(nums1)];
  let setNums2 = new Set(nums2);
  uniqueNums1Arr.forEach((num) => setNums2.has(num) && result.push(num));
  return result;
};

console.log(intersection(nums1, nums2));
