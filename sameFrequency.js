function sameFrequency(num1, num2) {
  let str1 = num1.toString();
  let str2 = num2.toString();

  if (str1.length !== str2.length) return false;

  let count1 = {};
  let count2 = {};

  for (let char of str1) {
    count1[char] = (count1[char] || 0) + 1;
  }

  for (let char of str2) {
    count2[char] = (count2[char] || 0) + 1;
  }

  for (let key in count1) {
    if (count1[key] !== count2[key]) {
      return false;
    }
  }

  return true;
}
