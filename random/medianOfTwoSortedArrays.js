/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  // Shortest array
  let x = [];

  // Longest array
  let y = [];

  // Set shortest and longest arrays
  if (nums1.length > nums2.length) {
    x = nums2;
    y = nums1;
  } else {
    x = nums1;
    y = nums2;
  }

  // Lower and upper bounds for binary search
  let lowerBound = 0;
  let upperBound = x.length;

  let mergedLength = x.length + y.length;

  while (lowerBound <= upperBound) {
    // Set partition for x array between upper and lower bounds
    let partitionX = Math.floor((upperBound + lowerBound) / 2);

    // Set partition for y array based on partition for x array
    let partitionY = Math.floor((mergedLength + 1) / 2 - partitionX);

    // Get maximum (nearest to partition) value out of all numbers on left of partition for x array
    let maxLeftX = partitionX === 0 ? -Infinity : x[partitionX - 1];

    // Get minimum (nearest to partition) value out of all numbers on right of partition for x array
    let minRightX = partitionX === x.length ? Infinity : x[partitionX];

    // Get maximum (nearest to partition) value out of all numbers on left of partition for y array
    let maxLeftY = partitionY === 0 ? -Infinity : y[partitionY - 1];

    // Get minimum (nearest to partition) value out of all numbers on right of partition for y array
    let minRightY = partitionY === y.length ? Infinity : y[partitionY];

    // Check if both partitions are in correct positions
    if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
      // Get maximum value of all numbers on left of both partitions
      let maxLeft = Math.max(maxLeftX, maxLeftY);

      // Get minimum value of all numbers on right of both partitions
      let minRight = Math.min(minRightX, minRightY);

      // Check if merged array length is even
      if (mergedLength % 2 === 0)
        // Return average of numbers on left and right of both partitions
        return (maxLeft + minRight) / 2;
      // Merged array length is odd
      // Return maximum value on left of both partitions
      else return maxLeft;
    }

    // Check if partition is too far left
    if (minRightX < maxLeftY)
      // Shift lower bound to right of partition
      lowerBound = partitionX + 1;
    // Partition is too far right
    // Shift upper bound to left of partition
    else upperBound = partitionX - 1;
  }

  // Invalid arrays provided
  return false;
};
