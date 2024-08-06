// Time Complexity - O(n)
// Space Complexity - O(1)
function minSubArrayLen(nums, target) {
  let start = 0;
  let end = 0;
  let total = 0;
  let minLen = Infinity;

  while (end < nums.length) {
    total += nums[end];
    end++;

    while (total >= target) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}
