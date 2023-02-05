/**
 * Quick sort.
 * 
 * Pick a pivot item randomly in an array passed down.
 * Create an empty array called `less` to store numbers less than or equal to pivot.
 * Create an empty array called `greater` to store numbers greater than pivot.
 * Iterate through the array passed down but exclude the pivot.
 * While in the loop, compare the item to the pivot. If greater than pivot,
 * store the item into `greater`. If less than or equal to pivot, store the
 * item into `less`.  Merge `less`, pivot, and `greater`. The process goes on
 * and on until there's only one item left to sort.
 * @param {Number[]} array - Array of numbers
 * @returns {Number[]}
 */
function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const less = [];
  const greater = [];
  const pivotPosition = Math.floor(Math.random() * array.length); // Random number between 0 - (array.length - 1).
  const pivot = array[pivotPosition]; // Random pivot.

  for (let index = 0; index < array.length; index++) {
    if (index === pivotPosition) { // Skip pivot.
      continue;
    }

    const item = array[index];
    if (item > pivot) {
      greater.push(item);
    } else if (item < pivot) {
      less.push(item);
    } else {
      less.push(item);
    }
  }

  return [...quickSort(less), pivot, ...quickSort(greater)];
}

console.log(quickSort([5, 4, 3, 2, 10, 200, 7, 9, 44]));