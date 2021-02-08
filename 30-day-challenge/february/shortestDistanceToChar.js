/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
  let len = s.length;
  let lastSeenCharIndex = -len;
  let arr = [];

  for (let i = 0; i < len; i++) {
    if (s[i] === c) lastSeenCharIndex = i;

    let distance = i - lastSeenCharIndex;
    arr.push(distance);
  }

  for (let j = len - 1; j >= 0; j--) {
    if (s[j] === c) lastSeenCharIndex = j;

    let distance = Math.abs(j - lastSeenCharIndex);
    arr[j] = Math.min(arr[j], distance);
  }

  return arr;
};
