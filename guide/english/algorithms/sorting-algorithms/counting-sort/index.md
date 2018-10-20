---
title: Counting Sort
---
## Counting Sort

Counting Sort is a sorting technique based on keys between a specific range. It works by counting the number of objects having distinct key values (kind of hashing). Then doing some arithmetic to calculate the position of each object in the output sequence.

### Example:

```
For simplicity, consider the data in the range 0 to 9. 
Input data: 1, 4, 1, 2, 7, 5, 2
  1) Take a count array to store the count of each unique object.
  Index:     0  1  2  3  4  5  6  7  8  9
  Count:     0  2  2  0  1  1  0  1  0  0

  2) Modify the count array such that each element at each index 
  stores the sum of previous counts. 
  Index:     0  1  2  3  4  5  6  7  8  9
  Count:     0  2  4  4  5  6  6  7  7  7

The modified count array indicates the position of each object in 
the output sequence.
 
  3) Output each object from the input sequence followed by 
  decreasing its count by 1.
  Process the input data: 1, 4, 1, 2, 7, 5, 2. Position of 1 is 2.
  Put data 1 at index 2 in output. Decrease count by 1 to place 
  next data 1 at an index 1 smaller than this index.
  
```
### Implementation

C Implementation:
```c
#define RANGE 100000
void countSort(int arr[], int n)
{
    // The output array that will store sorted arr
    int output[n];
    
    // Create a Count array to store the count 
    // of each value from 0 to RANGE
    int Count[RANGE+1];
    // Initialize count of each value as 0
    for(int i = 0; i < n; i++)
        Count[i]=0;
    
    // Store count of each value
    for(int i = 0; i < n; i++) 
        Count[arr[i]]++;
        
    // Change Count[i] so that Count[i] now contains 
    // actual position of this value in output array 
    for(int i = 1; i <= RANGE; i++) 
        Count[i] += Count[i-1]; 
  
    // Build the output array 
    for(int i = 0; i < n; i++) 
    { 
        output[Count[arr[i]] - 1] = arr[i]; 
        Count[arr[i]]--; 
    } 
  
    // Copy the output array to arr, so that 
    // arr now contains values in sorted order 
    for (int i = 0; i < n; i++) 
        arr[i] = output[i];
}
```

Java Script Implementation:
```js
let numbers = [1, 4, 1, 2, 7, 5, 2];
let count = [];
let i, z = 0;
let max = Math.max(...numbers);      
// initialize counter
for (i = 0; i <= max; i++) {
    count[i] = 0;
}
for (i=0; i < numbers.length; i++) {
    count[numbers[i]]++;
}
for (i = 0; i <= max; i++) {
    while (count[i]-- > 0) {
        numbers[z++] = i;
    }
}
// output sorted array
for (i=0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
```

### Analysis:

1. Time Complexity: O(n+k) where n is the number of elements in input array and k is the range of input.

2. Auxiliary Space: O(n+k)

3. Counting sort is efficient if the range of input data is not significantly greater than the number of objects to be          sorted. Consider the situation where the input sequence is between range 1 to 10K and the data is 10, 5, 10K, 5K.

4. It is not a comparison based sorting. It running time complexity is O(n) with space proportional to the range of data.

5. It is often used as a sub-routine to another sorting algorithm like [radix sort](https://guide.freecodecamp.org/algorithms/sorting-algorithms/radix-sort).

6. Counting sort uses a partial hashing to count the occurrence of the data object in O(1).

7. Counting sort can be extended to work for negative inputs also.

### For more information:

1. [Wikipedia - Counting Sort](https://en.wikipedia.org/wiki/Counting_sort)

2. [MIT Open Course Ware](https://www.youtube.com/watch?v=Nz1KZXbghj8)
