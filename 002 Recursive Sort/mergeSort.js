/**
 * Merge two sorted arrays into one.
 * 
 * Assume the two arrays passed down are sorted. We call them
 * `left` and `right`. Create a new array called `merged`
 * the size of those two combined. Let two variables called
 * `leftIndex` and `rightIndex` track the last position of
 * their corresponding arrays. Iterate through the new array.
 * While in the loop, if the `left` item is bigger than the
 * one in the `right`, insert the `right` item to `merged`,
 * otherwise insert the `left` item. Go on until one of those
 * two arrays run out of their items. To accomodate the
 * leftover, we just insert all items from whichever array
 * (`left` or `right`) that still got items left because
 * it's sorted. 
 * @param {Number[]} left  - Sorted array
 * @param {Number[]} right - Sorted array
 * @returns {Number[]}
 */
function mergeTwoSortedArrays(left, right) {
  const merged = new Array(
    left.length + right.length
  );

  let leftIndex = 0; // Track the last position of `left`.
  let rightIndex = 0; // Track the last position of `right`.

  for (let index = 0; index < merged.length; index++) {
    if (rightIndex < right.length && leftIndex < left.length) {
      const item = left[leftIndex] > right[rightIndex] ? (
        right[rightIndex++]
      ) : (
        left[leftIndex++]
      );

      merged[index] = item; 
    } else if (rightIndex < right.length) {
      // Accomodate the leftover from `right`.
      merged[index] = right[rightIndex++];
    } else {
      // Accomodate the leftover from `left`.
      merged[index] = left[leftIndex++];
    }
  }
}

/**
 * Split the array into halves until all items completely
 * separated from one another and then sort and merge
 * them recursively along the way.
 * @param  {Number[]} array - array of numbers.
 * @return {Number[]} Sorted array.
 */
function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }

  const middleIndex = Math.floor(array.length / 2);
  const left = array.slice(0, middleIndex);
  const right = array.slice(middleIndex);

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  return mergeTwoSortedArrays(
    sortedLeft,
    sortedRight
  );
}

console.log(mergeSort([5, 4, 3, 2, 10, 200, 7, 9, 44]));