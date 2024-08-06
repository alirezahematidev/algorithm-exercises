// Time Complexity - O(n)
function findLongestSubstring(str) {
  let start = 0;
  let longest = 0;
  let seen = {};

  for (let end = 0; end < str.length; end++) {
    let char = str[end];
    if (seen[char] !== undefined && seen[char] >= start) {
      start = seen[char] + 1;
    }
    seen[char] = end;
    longest = Math.max(longest, end - start + 1);
  }

  return longest;
}
