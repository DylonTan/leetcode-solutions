/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
  let arr = nums.sort();
  console.log(arr);
  let ptrA = 0;
  let ptrB = 1;
  let longestSubsequenceLength = 0;

  while (ptrB < arr.length) {
    let difference = Math.abs(arr[ptrB] - arr[ptrA]);

    if (difference === 1)
      longestSubsequenceLength = Math.max(
        longestSubsequenceLength,
        ptrB - ptrA + 1
      );

    if (difference <= 1) ptrB++;
    else ptrA++;
  }

  return longestSubsequenceLength;
};
