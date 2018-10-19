---
title: Jump Search
---

## Jump Search
A jump search locates an item in a sorted array by jumping k items in the array and then verifies if the item wanted is between the previous jump and current jump.

# Worst Case Complexity
O(√N)

# How does it work ?
1. Define the value of k, the number of jumps: The optimal jump size is √N where N is the length of the sorted array.
2. Jump over the array elements by k everytime, checking the following condition `Array[i] < valueWanted < Array[i+k]`.
3. If the previous condition is true, then do a linear search between `Array[i]` and `Array[i + k]`.
4. Return the position of the value if it is found in the array.

![Jumping Search 1](https://i1.wp.com/theoryofprogramming.com/wp-content/uploads/2016/11/jump-search-1.jpg?resize=676%2C290)

# Code 
To view examples of code implementation for this method, access this link below:

[Jump Search - OpenGenus/cosmos](https://github.com/OpenGenus/cosmos/tree/master/code/search/jump_search)

# Credits

[The logic's array image](http://theoryofprogramming.com/2016/11/10/jump-search-algorithm/)
