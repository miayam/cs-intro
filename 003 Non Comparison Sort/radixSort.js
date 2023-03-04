/**
 * Get base-10 digit from a number (ones, tens, hundreds, thousands, and so on)
 * @param {Number} number
 * @param {Number} place - ones, tens, hundreds, thousands, and so on
 * @returns {Number}
 */
function getDigit(number, place) {
  return Math.floor(Math.abs(number) / Math.pow(10, place)) % 10;
}

/**
 * Count the digits of a number
 * @param {Number} number
 * @returns {Number}
 */
function digitCount(number) {
  if (number === 0) {
    return 1;
  }

  return Math.floor(Math.log10(Math.abs(number))) + 1;
}

/**
 * Get the biggest digits from array
 * @param {Number[]} numbers 
 * @returns {Number} 
 */
function maxDigits(numbers) {
  let maxDigits = 0;

  for (let index = 0; index < numbers.length; index++) {
    maxDigits = Math.max(maxDigits, digitCount(numbers[index]));
  }

  return maxDigits;
}

/**
 * Radix Sort is a unique and interesting sorting algorithm,
 * because it sorts arrays without making any comparisons
 * between elements. 
 * @param {Number[]} numbers - array of numbers
 * @returns {Number}
 */
function radixSort(numbers) {
  const maxDigitCount = maxDigits(numbers)

  for (let place = 0; place < maxDigitCount; place++) {
    const digitBuckets = Array.from({ length: 10 }, () => []); // [[], [], [],...]

    for (let index = 0; index < numbers.length; index++) {
      let digit = getDigit(numbers[index], place);
      digitBuckets[digit].push(numbers[index]);
    }

    // New order after each loop
    numbers = [].concat(...digitBuckets)
  }

  return numbers; 
}

console.log(radixSort([5, 4, 3, 2, 10, 200, 7, 9, 44]));