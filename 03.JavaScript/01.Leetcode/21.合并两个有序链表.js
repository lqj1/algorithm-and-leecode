/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let p = null,
    temp = null
  if (list1.val <= list2.val) {
    p = list1
    list1 = list1.next
  } else {
    p = list2
    list2 = list2.next
  }
  while (list1 && list2) {
    if (list1.val <= list2.val) {
      temp = list1
      list1 = list1.next
      p.next = temp
    } else {
      temp = list2
      list2 = list2.next
      p.next = temp
    }
    console.log(p)
  }
  p.next = list1 ? list1 : list2
  return p
}
// @lc code=end
