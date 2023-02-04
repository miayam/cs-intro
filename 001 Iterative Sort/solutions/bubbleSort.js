/**
 * A naive way to sort numbers with double loop
 * @param {Number[]} array 
 * @returns {Number[]}
 */
function bubbleSort(array) {
  let swapped = true;
  let remainingArrayToSwap = array.length;

  while(swapped) {
    swapped = false;

    for (let i = 0; i < remainingArrayToSwap; i++) {
      const temp = array[i];
      if (array[i] > array[i + 1]) {
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true;
      }
    }

    remainingArrayToSwap--; // At the end of iteration, the largest number will always be at the rightmost index. So, we can neglect that in the next iteration.
  }

  return array;
}

console.log(bubbleSort([1, 4, 3, 5, 7, 123, 2]));