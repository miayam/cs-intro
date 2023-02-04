/**
 * Insertion Sort
 * 
 * Assume the first item is sorted. The rest are unsorted. Iterate through
 * unsorted items (from the second to the last). Inside the loop, make a
 * loop that iterates through sorted items one by one. While in the loop,
 * move the sorted item to the right if it's larger than the unsorted item
 * passed down. At the same time, keep track of the correct index that
 * we're trying to find. Go on until the condition no longer met (we have
 * iterated through all sorted items from right to left or the unsorted
 * item passed down is bigger than the number it compares to). Then, when
 * the loop has stopped, we insert the item to the index that we kept
 * track of before. Repeat the process until the last unsorted item.
 * @param {Number[]} array 
 * @returns {Number[]}
 */
function insertionSort(array) {
  // Assume the first item is sorted.
  const sortedIndex = 0;

  // The rest are unsorted.
  for (let unsortedIndex = sortedIndex + 1; unsortedIndex < array.length; unsortedIndex++) {
    const itemToInsert = array[unsortedIndex];

    // We are trying to find the correct index to insert.
    let indexToInsert = unsortedIndex;

    // We iterate the sorted items from the last sorted index to the first one (from right to left).
    let sortedIndexToMove = unsortedIndex - 1; 

    // Move the sorted item to the right one by one if it's larger than the unsorted item passed down.
    // Go on until the condition no longer met.
    while (array[sortedIndexToMove] > itemToInsert && sortedIndexToMove >= 0) {
      array[indexToInsert] = array[sortedIndexToMove];
      sortedIndexToMove--;
      indexToInsert--; // Keep track of the index until the loop stopped.
    }

    // Insert the item to the correct index.
    array[indexToInsert] = itemToInsert;
  }

  return array;
}

console.log(insertionSort([1, 4, 3, 5, 7, 123, 2]));