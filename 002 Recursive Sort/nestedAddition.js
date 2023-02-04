/**
 * Add up all items in a nested array.
 * @param {Number[]} array 
 * @returns {Number[]}
 */
function nestedAddition(array) {
  return array.reduce((prev, curr) => {
    const numberToAdd = Array.isArray(curr) ? nestedAddition(curr) : curr;
    return prev + numberToAdd;
  }, 0);
}

console.log(nestedAddition([1, 2, 3, [[4]]]));