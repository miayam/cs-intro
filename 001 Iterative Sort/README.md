# Iterative Sort
A sorting algorithm that uses loop (for, while, do-while).

## Bubble Sort
It's so boring. I just copy-paste it from [here](https://btholt.github.io/complete-intro-to-computer-science/bubble-sort).

The algorithm is pretty simple: compare two items in an array that are
next to each other. If they're out of order (that is, the larger one
comes first in the array) swap them. Then move forward one index,
compare again, swap if needed, and continue to the next item in the
array. Once we've reached the end of the array, if we've swapped
anything in the previous run through, the array could still be out
of order, so we have to pass through again. Once we run through the
whole array with no swaps, the array is sorted!

## Insertion Sort
Assume the first item is sorted. The rest are unsorted. Iterate through
unsorted items (from the second to the last). Inside the loop, make a
loop that iterates through sorted items one by one. While in the loop,
move the sorted item to the right if it's larger than the unsorted item
passed down (number you want to insert to the correct position). At the
same time, keep track of the correct index (position) that we're trying
to find. If the sorted item moves to the right, the index we're trying to
find reduced by 1. Go on until the condition no longer met (we have
iterated through all sorted items from right to left or the number 
to insert is bigger than the number it compares to). Then, when the
loop stops, we insert the item to the index that we kept track
of before. Repeat the process until the last unsorted item.
