/**
 * Binary search.
 * @param {Number[]} array - A sorted collection of numbers
 * @param {Number} item - A number we want to find its position in collection
 * @returns {Number} - Position/index of the item in collection
 */
function binarySearch(array, item) {
  let lowIndex = 0;
  let highIndex = array.length - 1;

  while (lowIndex <= highIndex) {
    const middleIndex = Math.floor((lowIndex + highIndex) / 2);

    if (item === array[middleIndex]) {
      return middleIndex;
    }

    if (item > array[middleIndex]) {
      highIndex++
    }

    if (item < array[middleIndex]) {
      lowIndex++;
    }
  }

  return undefined;
}

console.log(binarySearch([1, 2, 5, 7, 9, 20], 2));