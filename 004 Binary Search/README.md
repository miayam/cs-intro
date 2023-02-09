# Binary Search

Binary search is an efficient algorithm used to find the position of a target item within a sorted collection of items.

Here's an explanation of how you can search for a word in a dictionary using the binary search algorithm explained by ChatGPT:

> 1. First, you need to have a sorted collection of words, for example, an alphabetically sorted list of words in a dictionary.
> 2. Then, you set a pointer in the middle of the collection of words and compare the target word to the word at the pointer.
> 3. If the target word is equal to the word at the pointer, you have found the correct word and can stop the search.
> 4. If the target word is less than the word at the pointer, you repeat the search in the first half of the collection.
> 5. If the target word is greater than the word at the pointer, you repeat the search in the second half of the collection.
> 6. Repeat this process of dividing the collection in half and comparing the target word to the word at the pointer until the word is found or it is determined that the word does not exist in the collection.

I finally got it when I thought of binary search as a way to find an object in a list with a ruler (yardstick).

![ruler](./ruler.png)

Let's say we arrange fruits ordered by its name on the table. Apple, banana, cherry, durian, dates, eggfruit, and tangerine. 

Imagine that table has a big ruler right below it to tell you each item's position. We place apple at 0, banana at 1, cherry at 2, durian at 3, dates at 4, eggfruit at 5, and tangerine at 6. We cover the table with the black sheets.

Tell your friend, "Hey, bro, I arrange fruits ordered by its name on this table. If you can guess the position of durian, I'll give you 10 bucks! What do you say?"

Your friend is up for the challenge!

Your friend can only ask, "Is this it?" and point at the ruler. You can only answer, "Nope, move right further", "Nope, move left further", or "Yes, you got it! Here's your money! Go f*ck yourself!".

Your friend is a computer scientist. He probably can figure it out.

Here's the catch. He can only ask "Is this it?" 3 times. How?

...to be continued