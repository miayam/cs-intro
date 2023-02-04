/**
 * Flatten a nested array
 * @param {Number[]} array 
 * @returns {Number[]}
 */
function flatten(array) {
  const flattenedArray = [];

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    if (Array.isArray(item)) {
      flattenedArray.push(...flatten(item))
    } else {
      flattenedArray.push(item);
    }
  }

  return flattenedArray;
}

console.log(flatten([1, 2, 3, [4, [[5, 6, 7, 8]]]]));