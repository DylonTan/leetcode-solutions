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
    if (head == null) return false
    
    let hare = head.next;
    let tortoise = head;
    
    while (hare != null && hare.next != null) {
               if (hare == tortoise) return true
                
                hare = hare.next.next
                tortoise = tortoise.next
    }
    
    return false
};