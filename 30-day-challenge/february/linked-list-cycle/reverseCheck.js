/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (head == null || head.next == null) return false

    let current = head
    let previous = null
    let next = null

    // Traverse linked list 
    while (current != null) {
        // Get next node
        next = current.next

        // Reverse linked nodes
        current.next = previous

        // Move both pointers by 1 step
        previous = current
        current = next
    }

    return previous == head
};