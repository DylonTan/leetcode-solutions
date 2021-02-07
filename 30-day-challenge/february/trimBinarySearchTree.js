/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
var trimBST = function (root, low, high) {
  // Base case
  if (root === null) return null;

  // Check if root is below lowest bound
  if (root.val < low) {
    // Ignore left branch, recurse on right branch
    return trimBST(root.right, low, high);
  }

  // Check if root is above highest bound
  if (root.val > high) {
    // Ignore right branch, recurse on left branch
    return trimBST(root.left, low, high);
  }

  // Root is in bounds, recurse on both branches
  root.left = trimBST(root.left, low, high);
  root.right = trimBST(root.right, low, high);

  // Return valid root
  return root;
};
