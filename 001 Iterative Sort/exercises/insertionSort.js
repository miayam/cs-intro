function insertionSort(array) {
  // Assume the first item is sorted.
  const sortedIndex = 0;

  // The rest are unsorted.
  for (let unsortedIndex = sortedIndex + 1; unsortedIndex < array.length; unsortedIndex++) {
    const numberToInsert = array[unsortedIndex];

    // We are trying to find the correct index to insert.
    let indexToInsert = unsortedIndex;

    // We iterate the sorted items from the last sorted index to the first one (from right to left).
    let currentSortedIndex = unsortedIndex - 1;

    // Move the sorted item to the right one by one if it's larger than the unsorted item passed down (item to insert).
    // Go on until the condition no longer met.
    while (array[currentSortedIndex] < numberToInsert && currentSortedIndex >= 0) {
      array[indexToInsert] = array[currentSortedIndex];
      currentSortedIndex--;
      indexToInsert--; // Keep track of the index until the loop stops.
    }

    // Insert the item to the correct index.
    array[indexToInsert] = numberToInsert;
  }

  return array;
}