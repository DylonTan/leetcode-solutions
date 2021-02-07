/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let str = n.toString(2);
  let bits = str.match(/1/g);

  return bits !== null ? bits.length : 0;
};
