/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let dummyHead = new ListNode(0);
  let ptrA = l1,
    ptrB = l2,
    current = dummyHead;
  let carry = 0;

  while (ptrA != null || ptrB != null) {
    let num1 = ptrA != null ? ptrA.val : 0;
    let num2 = ptrB != null ? ptrB.val : 0;
    let sum = carry + num1 + num2;
    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;
    if (ptrA != null) ptrA = ptrA.next;
    if (ptrB != null) ptrB = ptrB.next;
  }

  if (carry > 0) {
    current.next = new ListNode(carry);
  }
  return dummyHead.next;
};
