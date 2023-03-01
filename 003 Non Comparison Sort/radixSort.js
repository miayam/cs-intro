function getDigit(number, place) {
  return Math.floor(Math.abs(number) / Math.pow(10, place)) % 10;
}

function digitCount(number) {
  if (number === 0) {
    return 1;
  }

  return Math.floor(Math.log10(Math.abs(number))) + 1;
}

function maxDigits(numbers) {
  let maxDigits = 0;

  for (let i = 0; i < numbers.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(numbers[i]));
  }

  return maxDigits;
}

function radixSort(numbers) {
  const maxDigitCount = maxDigits(numbers)

  for (let k = 0; k < maxDigitCount; k++) {
    const digitBuckets = Array.from({ length: 10 }, () => []) // [[], [], [],...]

    for (let i = 0; i < numbers.length; i++) {
      let digit = getDigit(numbers[i], k)
      digitBuckets[digit].push(numbers[i])
    }

    // New order after each loop
    numbers = [].concat(...digitBuckets)
  }

  return numbers; 
}

console.log(radixSort([5, 4, 3, 2, 10, 200, 7, 9, 44]));
