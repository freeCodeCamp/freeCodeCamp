---
title: Jump Search
---

## Jump Search
A jump search locates an item in a sorted array by jumping k items and then verify if the item wanted is between 
the next k elements.

# Worst Case Complexity
O(√N)

# How it Works
1. Define the value of k, the size of jump: Optimal jump size is √N where the N is the length of array.
2. Start with first element & Jump the `i` by `k` elements searching by the condition `Array[i] < valueWanted < Array[i+k]`
3. Do a linear search between `Array[i]` and `Array[i + k]`

![Jumping Search 1](https://i1.wp.com/theoryofprogramming.com/wp-content/uploads/2016/11/jump-search-1.jpg?resize=676%2C290)

# Code 
To view examples of code implementation of this method access this link below:

[Jump Search - OpenGenus/cosmos](https://github.com/OpenGenus/cosmos/tree/master/code/search/src/jump_search)

# Credits

[The logic's array image](http://theoryofprogramming.com/2016/11/10/jump-search-algorithm/)
