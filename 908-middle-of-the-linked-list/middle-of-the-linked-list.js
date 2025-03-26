/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let length=0;
    let i=head;
    while(i!=null){
        length ++;
        i=i.next;
    }
    let jump=Math.floor(length/2);
    i=head;
    for(let t=1;t<=jump;t++){
        i=i.next;
    }
    return i;
};