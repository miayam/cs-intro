function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function digitCount(num) {
  if (num === 0) {
    return 1;
  }

  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function maxDigits(nums) {
  let maxDigits = 0;

  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }

  return maxDigits;
}

function radixSort(nums) {
  const maxDigitCount = maxDigits(nums)

  for (let k = 0; k < maxDigitCount; k++) {
    const digitBuckets = Array.from({ length: 10 }, () => []) // [[], [], [],...]

    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k)
      digitBuckets[digit].push(nums[i])
    }

    // New order after each loop
    nums = [].concat(...digitBuckets)
  }

  return nums; 
}

console.log(radixSort([5, 4, 3, 2, 10, 200, 7, 9, 44]));
