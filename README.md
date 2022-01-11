# algorithm

## 二分法

- 最基本的二分查找算法

  > 初始化`right = nums.length - 1`
  > 因此决定了我们的[搜索区间]是[left,right]
  > 因此决定了判断为`while(left <= right)`
  > 同时也决定了`left = mid + 1`和`right = mid - 1`

  > 因为我们只需要找到一个 target 的索引
  > 所以当`nums[mid] == target`时即可返回

- 寻找左边界的二分查找

  > 初始化为`right = nums.length`
  > 因此决定了我们的[搜索区间]是[left,right) (左闭右开)
  > 因此决定了`while(left < right)`
  > 同时也决定了`left = mid + 1`和`right = mid`(不包括中间数/右区间，因为是右开区间)

  > 因为我们要找 target 的最左侧索引(当满足条件的值有多个，要找到最左边的那个)
  > 所以当`nums[mid] == target`时不要立即返回
  > 而是要收紧右侧边界以锁定左侧边界，在区间[left,mid)中继续搜索，不断向左收缩

- 寻找右侧边界的二分查找

  > 初始化`right = nums.length`
  > 所以决定了我们的[搜索区间]是[left,right) (左闭右开)
  > 所以决定了`while(left < right)`
  > 同时也决定了`left = mid + 1`和`right = mid`

  > 因为我们需要找到 target 的最右侧索引
  > 所以当`nums[mid] == target`时不要立即返回
  > 而是要收紧左侧边界以锁定右侧边界

  > 又因为收紧左侧边界时必须 `left = mid + 1`
  > 所以最后无论返回 left 还是 right, 必须减一

- 对于寻找左右边界的⼆分搜索，常⻅的⼿法是使⽤左闭右开的「搜索区间」，可以根据逻辑将「搜索区
  间」全都统⼀成了两端都闭，便于记忆，只要修改两处即可变化出三种写法：

```c++
int binary_search(int[] nums, int target) {
  int left = 0, right = nums.length - 1;
  while(left <= right) {
    int mid = left + (right - left) / 2;  // 使用这种方法而不是 (left+right)/2 是为了防止越界溢出
    if(nums[mid] < target) {
      left = mid + 1
    } else if(nums[mid] > target) {
      right = mid - 1
    } else if(nums[mid] == target) {
      // 直接返回
      return mid;
    }
  }
  // 没有找到直接返回
  return -1;
}
int left_bount(int[] nums, int target) {
  int left = 0, right = nums.length - 1;
  while(left <= right) {
    int mid = left + (right - left) / 2;
    if(nums[mid] < target) {
      left = mid + 1;
    } else if(nums[mid] > target) {
      right = mid -1;
    } else if(nums[mid] == target) {
      // 先不返回，而是继续判断，锁定左侧边界，变化右边界
      right = mid - 1;
      // 比如找小于4的，[2,3,3,3,8],
      // [left/3,3,mid/3,3,right/8] -> [left/3,right/3,mid/3,3,8] -> [left/mid/2,right/3,3,3,8] -> [mid/2,left/right/3,3,3,8]
      // -> [2,left/right/mid/3,3,3,8] -> [right/2,left/mid/3,3,3,8]
    }
  }
  // 要判断left越界情况
  if(left >= nums.length || nums[left] != target) {
    // 没有找到
    return -1;
  }
  // 返回锁定的那个边界
  return left;
}
int right_bount(int[] nums, int target) {
  int left = 0, right = nums.lengt - 1;
  while(left <= right) {
    int mid = left + (right - left) / 2;
    if(nums[mid] < target) {
      left = mid + 1;
    } else if(nums[mid] > target) {
      right = mid - 1;
    } else if(nums[mid] == target) {
      // 不返回，锁定右侧边界变化左边界
      left = mid + 1
      // 比如找大于4的，[2,5,5,5,8]
      // [left/2,5,mid/5,5,right/8] -> [2,5,mid/5,left/5,right/8] -> [2,5,left/5,mid/right/5,8] -> [2,5,5,left/mid/right/5,8]
      // -> [2,5,5,mid/right/5,left/8]
    }
  }
  if(right < 0 || nums[right] != target) {
    return -1;
  }
  // 返回锁定的那个边界
  return right;
}
```
