# JavaScript Binary Search Tree Class
Implemented by Nicholas C. Zakas.

A JavaScript implementation of a binary search tree. This class uses the conventions of built-in JavaScript collection objects, such as:

* There is a [Symbol.iterator] method so each instance is iterable.
*  The size getter property instead of a length data property to indicate that the size of the tree is dynamically counted rather than stored.
*  Defining a values() generator method.

Additionally, this implementation follows the JavaScript Set interface for adding, detecting, and removing values:

* add(value) to add a value into the tree
* has(value) to detect if a value is in the tree
* delete(value) to remove a value from the tree
