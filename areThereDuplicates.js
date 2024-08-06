// first approach:
// Time - O(n)
// Space - O(n)
function areThereDuplicates1(...inputs) {
  const counter = {};

  for (let input of inputs) {
    counter[input] = (counter[input] || 0) + 1;
    if (counter[input] > 1) {
      return true;
    }
  }

  return false;
}

// second approach:
// Time - O(n log n)
// Space - O(1)
function areThereDuplicates2(...inputs) {
  inputs.sort((a, b) => (a > b ? 1 : -1));

  let start = 0;
  let next = 1;

  while (next < inputs.length) {
    if (inputs[start] === inputs[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}
