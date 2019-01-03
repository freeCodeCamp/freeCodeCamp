---
title: Insertion Sort
---
## Insertion Sort

Insertion sort is a simple sorting algorithm for a small number of elements.

### Example:
 In Insertion sort, you compare the `key` element with the previous elements. If the previous elements are greater than the `key` element, then you move the previous element to the next position.

Start from index 1 to size of the input array.

[ 8 3 5 1 4 2 ]

Step 1 :  

![[ 8 3 5 1 4 2 ]](https://github.com/blulion/freecodecamp-resource/blob/master/insertion_sort/1.png?raw=true)
```
      key = 3 //starting from 1st index.

      Here `key` will be compared with the previous elements.

      In this case, `key` is compared with 8. since 8 > 3, move the element 8
      to the next position and insert `key` to the previous position.

      Result: [ 3 8 5 1 4 2 ]
```
Step 2 :

![[ 3 8 5 1 4 2 ]](https://github.com/blulion/freecodecamp-resource/blob/master/insertion_sort/2.png?raw=true)
```
      key = 5 //2nd index

      8 > 5 //move 8 to 2nd index and insert 5 to the 1st index.

      Result: [ 3 5 8 1 4 2 ]
```
Step 3 :

![[ 3 5 8 1 4 2 ]](https://github.com/blulion/freecodecamp-resource/blob/master/insertion_sort/3.png?raw=true)
```
      key = 1 //3rd index

      8 > 1     => [ 3 5 1 8 4 2 ]  

      5 > 1     => [ 3 1 5 8 4 2 ]

      3 > 1     => [ 1 3 5 8 4 2 ]

      Result: [ 1 3 5 8 4 2 ]
```
Step 4 :

![[ 1 3 5 8 4 2 ]](https://github.com/blulion/freecodecamp-resource/blob/master/insertion_sort/4.png?raw=true)
```
      key = 4 //4th index

      8 > 4   => [ 1 3 5 4 8 2 ]

      5 > 4   => [ 1 3 4 5 8 2 ]

      3 > 4   ≠>  stop

      Result: [ 1 3 4 5 8 2 ]
```
Step 5 :

![[ 1 3 4 5 8 2 ]](https://github.com/blulion/freecodecamp-resource/blob/master/insertion_sort/5.png?raw=true)
```
      key = 2 //5th index

      8 > 2   => [ 1 3 4 5 2 8 ]

      5 > 2   => [ 1 3 4 2 5 8 ]

      4 > 2   => [ 1 3 2 4 5 8 ]

      3 > 2   => [ 1 2 3 4 5 8 ]

      1 > 2   ≠> stop

      Result: [1 2 3 4 5 8]
```
![[ 1 2 3 4 5 8 ]](https://github.com/blulion/freecodecamp-resource/blob/master/insertion_sort/6.png?raw=true)

The algorithm shown below is a slightly optimized version to avoid swapping the `key` element in every iteration. Here, the `key` element will be swapped at the end of the iteration (step).

```Algorithm
    InsertionSort(arr[])
      for j = 1 to arr.length
         key = arr[j]
         i = j - 1
         while i > 0 and arr[i] > key
            arr[i+1] = arr[i]
            i = i - 1
         arr[i+1] = key
```

Here is a detailed implementation in Javascript:

```
function insertion_sort(A) {
    var len = array_length(A);
    var i = 1;
    while (i < len) {
        var x = A[i];
        var j = i - 1;
        while (j >= 0 && A[j] > x) {
            A[j + 1] = A[j];
            j = j - 1;
        }
        A[j+1] = x;
        i = i + 1;
    }
}
```

A quick implementation in Swift is shown below :

```swift
  var array = [8, 3, 5, 1, 4, 2]

  func insertionSort(array:inout Array<Int>) -> Array<Int>{
      for j in 0..<array.count {
          let key = array[j]
          var i = j-1

          while (i > 0 && array[i] > key){
              array[i+1] = array[i]
              i = i-1
          }
          array[i+1] = key
      }
      return array
  }
```
The Java example is shown below:
```
public int[] insertionSort(int[] arr)
      for (j = 1; j < arr.length; j++) {
         int key = arr[j]
         int i = j - 1
         while (i > 0 and arr[i] > key) {
            arr[i+1] = arr[i]
            i -= 1
         }
         arr[i+1] = key
      }
      return arr;
```

### insertion sort in c....
```C
void insertionSort(int arr[], int n) 
{ 
   int i, key, j; 
   for (i = 1; i < n; i++) 
   { 
       key = arr[i]; 
       j = i-1;
       while (j >= 0 && arr[j] > key) 
       { 
           arr[j+1] = arr[j]; 
           j = j-1; 
       } 
       arr[j+1] = key; 
   } 
} 
```

### Properties:
* Space Complexity: O(1)
* Time Complexity: O(n), O(n* n), O(n* n) for Best, Average, Worst cases respectively
* Sorting In Place: Yes
* Stable: Yes

#### Other Resources:
- [Wikipedia](https://en.wikipedia.org/wiki/Insertion_sort)
- [CS50 - YouTube](https://youtu.be/TwGb6ohsvUU)
- [SortInsertion - GeeksforGeeks, YouTube](https://www.youtube.com/watch?v=wObxd4Kx8sE)
- [Insertion Sort Visualization](https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/visualize/)
- [Insertion Sort - MyCodeSchool](https://www.youtube.com/watch?v=i-SKeOcBwko)
- [Insertion Sort - VisuAlgo](https://visualgo.net/en/sorting)
