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

# Code In Java.

``` Java

public int jumpSearch(int[] arr, int x) 
{ 
	int n = arr.length; 

	// Finding the size to be jumped 
	int jumpSize = (int) Math.floor(Math.sqrt(n)); 

	// Finding the index where element is present 
	int index = 0; 
	while (arr[Math.min(jumpSize, n)-1] < x) 
	{ 
		index = jumpSize; 
		jumpSize += (int) Math.floor(Math.sqrt(n)); 
		if (index >= n) 
			return -1; 
	} 
	// Searching for x beginning with index. 
	while (arr[index] < x) 
	{ 
		index++; 
		// If we reached next index or end of array then element is not present. 
		if (index == Math.min(jumpSize, n)) 
			return -1; 
	} 
	// If element is found 
	if (arr[index] == x) 
		return index; 
	return -1; 
} 

```

# Code 
To view examples of code implementation for this method, access this link below:

[Jump Search - OpenGenus/cosmos](https://github.com/OpenGenus/cosmos/tree/master/code/search/src/jump_search)

# Credits

[The logic's array image](http://theoryofprogramming.com/2016/11/10/jump-search-algorithm/)
