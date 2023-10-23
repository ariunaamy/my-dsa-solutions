// LeetCode problem #1295

// in this code I intentionally avoid converting number into a string.

var findNumbers = function (nums) {
  const countDigits = (num) => {
    let counter = 0;
    while (num !== 0) {
      num = Math.floor(num / 10);
      counter++;
    }
    return counter;
  };
  return nums.map((num) => countDigits(num)).filter((num) => num % 2 === 0)
    .length;
};
