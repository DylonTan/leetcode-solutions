/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let start = 0;
  let end = 0;

  for (let i = 0; i < s.length; i++) {
    let oddLength = getPalindromeLength(s, i, i);
    let evenLength = getPalindromeLength(s, i, i + 1);

    let maxLength = Math.max(oddLength, evenLength);

    if (maxLength > end - start) {
      start = i - Math.floor((maxLength - 1) / 2);
      end = i + Math.floor(maxLength / 2);
    }
  }

  return s.substring(start, end + 1);
};

var getPalindromeLength = function (str, left, right) {
  // Check if string, left and right indices are valid
  if (str === null || left > right) return 0;

  while (left >= 0 && right < str.length && str[left] === str[right]) {
    left--;
    right++;
  }

  return right - left - 1;
};

console.log(longestPalindrome("racecaraba"));
