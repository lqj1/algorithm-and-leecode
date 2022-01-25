/**
 * @param {number[]} nums
 * @return {number}
 */
//  给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。
//  不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。

//  示例 1：
//  输入：nums = [1,1,2]
//  输出：2, nums = [1,2]
//  解释：函数应该返回新的长度 2 ，并且原数组 nums 的前两个元素被修改为 1, 2 。不需要考虑数组中超出新长度后面的元素。

var removeDuplicates = function (nums) {
  // 定义快慢指针
  let slow = 0;
  let fast = 1;
  while (fast < nums.length) {
    if (nums[fast] === nums[fast - 1]) {
      fast++;
    } else {
      nums[++slow] = nums[fast++];
    }
  }
  return ++slow;
};
