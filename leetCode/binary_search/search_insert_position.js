// LeetCode #35

/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1

Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
*/

const nums = [1,3,5,6];
const target = 7;
// => 1

var searchInsert = function(nums, target) {
   let start = 0;
   // this time end is the length instead of last index; 
   let end = nums.length; 
   
   while(start < end){
    let mid = Math.floor((start+end)/2); 
    if(nums[mid] < target) start = mid + 1; 
    else end = mid; 
   }
   return start; 

}

console.log(searchInsert(nums, target))