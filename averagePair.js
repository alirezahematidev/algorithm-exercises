// Time: O(N)
// Space: 0(1)
function averagePair(arr, value) {
  if (arr.length === 0) return false;

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let avg = (arr[left] + arr[right]) / 2;
    if (avg === value) {
      return true;
    } else if (avg < value) {
      left++;
    } else {
      right--;
    }
  }

  return false;
}
