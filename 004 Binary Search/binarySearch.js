/**
 * Binary search.
 * @param {Number[]} array - A sorted collection of numbers
 * @param {Number} item - A number we want to find its position in collection
 * @returns {Number} - Position/index of the item in collection
 */
function binarySearch(array, item) {
  let lowIndex = 0;
  let highIndex = array.length - 1;
  let position; // The default value is undefined

  while (lowIndex <= highIndex) {
    let middleIndex = Math.floor((lowIndex + highIndex) / 2);

    if (item === array[middleIndex]) {
      position = middleIndex;
    } else if (item > array[middleIndex]) {
      highIndex++;
    } else if (item < array[middleIndex]) {
      lowIndex++;
    }
  }

  return position;
}

console.log(binarySearch([5, 4, 3, 2, 1], 2));