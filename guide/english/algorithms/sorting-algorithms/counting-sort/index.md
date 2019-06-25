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

### Properties
- Space complexity: O(K)
- Best case performance: O(n+K)
- Average case performance: O(n+K)
- Worst case performance: O(n+K)
- Stable: Yes
(K is the number of distinct elements in the array)

### Implementation in JavaScript
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

### C++ Implementation
```cpp
#include <iostream>

void countSort(int upperBound, int lowerBound, std::vector<int> numbersToSort) //lower and upper bounds of numbers in vector
{
  int range = upperBound - lowerBound;                  //create a range large enough to get every number between the min and max
  std::vector<int> counts (range);                      //initialize of counts of the size of the range
  std::fill(counts.begin(), counts.end(), 0);           //fill vector of zeros
  
  for (int i = 0; i < numbersToSort.size(); i++)
  {
      int index = numbersToSort[i] - lowerBound; //For example, if 5 is the lower bound and numbersToSort[i] is 5. index will be 0 and the       counts[index]+= 1;                         //count of 5 will be stored in counts[0]
  }
  
  std::cout << counts << std::endl;
} 
```

### Swift Implementation
```swift
func countingSort(_ array: [Int]) {
  // Create an array to store the count of each element
  let maxElement = array.max() ?? 0
  var countArray = [Int](repeating: 0, count: Int(maxElement + 1))
  
  for element in array {
    countArray[element] += 1
  }
  var z = 0
  var sortedArray = [Int](repeating: 0, count: array.count)

  for index in 1 ..< countArray.count {
    //print index element required number of times
    while countArray[index] > 0 {
      sortedArray[z] = index
      z += 1
      countArray[index] -= 1
    }
  }
  
  print(sortedArray)
}

  ```
