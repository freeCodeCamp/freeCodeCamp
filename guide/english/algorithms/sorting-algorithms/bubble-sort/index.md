---
title: Bubble Sort
---
## Bubble Sort

Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.

This is a very slow sorting algorithm compared to algorithms like quicksort, with worst-case complexity O(n^2). However, the tradeoff is that bubble sort is one of the easiest sorting algorithms to implement from scratch. As a result, bubble sort algorithm is commonly taught as the first sorting algorthim in Algorithm and Data structure classes. From technical perspective, bubble sort is reasonable for sorting small-sized arrays or specially when executing sort algorithms on computers with remarkably limited memory resources.

### Example:

#### First Pass:
( 5 1 4 2 8 ) –> ( 1 5 4 2 8 ), Here, algorithm compares the first two elements, and swaps since 5 > 1.

( 1 5 4 2 8 ) –> ( 1 4 5 2 8 ), Swap since 5 > 4

( 1 4 5 2 8 ) –> ( 1 4 2 5 8 ), Swap since 5 > 2

( 1 4 2 5 8 ) –> ( 1 4 2 5 8 ), Now, since these elements are already in order (8 > 5), algorithm does not swap them.


#### Second Pass:

( 1 4 2 5 8 ) –> ( 1 4 2 5 8 )

( 1 4 2 5 8 ) –> ( 1 2 4 5 8 ), Swap since 4 > 2

( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )

( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )

Now, the array is already sorted, but our algorithm does not know if it is completed. The algorithm needs one whole pass without any swap to know it is sorted.

#### Third Pass:

( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )

( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )

( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )

( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )

#### Properties
- Space complexity: O(1)
- Best case performance: O(n)
- Average case performance: O(n\*n)
- Worst case performance: O(n\*n)
- Stable: Yes

### Video Explanation
[Bubble sort in easy way](https://www.youtube.com/watch?v=Jdtq5uKz-w4)

-----

### Example in JavaScript
```js
let arr = [1, 4, 7, 45, 7,43, 44, 25, 6, 4, 6, 9];
let sorted = false

while(!sorted) {
  sorted = true
  for(var i=0; i < arr.length; i++) {
    if(arr[i] < arr[i-1]) {
      let temp = arr[i];
      arr[i] = arr[i-1];
      arr[i-1] = temp;
      sorted = false;
    }
  }
}
```
### Example in Java.
```java
public class bubble-sort {
    static void sort(int[] arr) {
        int n = arr.length;
        int temp = 0;
         for(int i=0; i < n; i++){
                 for(int x=1; x < (n-i); x++){
                          if(arr[x-1] > arr[x]){
                                 temp = arr[x-1];
                                 arr[x-1] = arr[x];
                                 arr[x] = temp;
                         }

                 }
         }

    }
    public static void main(String[] args) {

		for(int i=0; i < 15; i++){
			int arr[i] = (int)(Math.random() * 100 + 1);
		}

                System.out.println("array before sorting\n");
                for(int i=0; i < arr.length; i++){
                        System.out.print(arr[i] + " ");
                }
                bubbleSort(arr);
                System.out.println("\n array after sorting\n");
                for(int i=0; i < arr.length; i++){
                        System.out.print(arr[i] + " ");
                }

        }
}
```
### Example in C++
```c++
// Recursive Implementation
void bubblesort(int arr[], int n)
{
	if(n==1)	//Initial Case
		return;
	bool swap_flag = false;
	for(int i=0;i<n-1;i++)	//After this pass the largest element will move to its desired location.
	{
		if(arr[i]>arr[i+1])
		{
			int temp=arr[i];
			arr[i]=arr[i+1];
			arr[i+1]=temp;
			swap_flag = true;
		}
	}
        // IF no two elements were swapped in the loop, then return, as array is sorted 
	if(swap_flag == false)
		return;
	bubblesort(arr,n-1);	//Recursion for remaining array
}
```
### Example in Swift
```swift
func bubbleSort(_ inputArray: [Int]) -> [Int] {
    guard inputArray.count > 1 else { return inputArray } // make sure our input array has more than 1 element
    var numbers = inputArray // function arguments are constant by default in Swift, so we make a copy
    for i in 0..<(numbers.count - 1) {
        for j in 0..<(numbers.count - i - 1) {
            if numbers[j] > numbers[j + 1] {
                numbers.swapAt(j, j + 1)
            }
        }
    }
    return numbers // return the sorted array
} 
```
### Example in Python
```py

def bubbleSort(arr): 
    n = len(arr) 
    for i in range(n):
        for j in range(0, n-i-1):
                if arr[j] > arr[j+1] : 
                        arr[j], arr[j+1] = arr[j+1], arr[j]
    print(arr)

```
### Example in C
```c
#include <stdio.h>

int BubbleSort(int array[], int n);

int main(void) {
  int arr[] = {10, 2, 3, 1, 4, 5, 8, 9, 7, 6};
  BubbleSort(arr, 10);

  for (int i = 0; i < 10; i++) {
    printf("%d", arr[i]);
  }
  return 0;
}
int BubbleSort(int array[], n)
{
for (int i = 0 ; i < n - 1; i++)
  {
    for (int j = 0 ; j < n - i - 1; j++)     //n is length of array
    {
      if (array[j] > array[j+1])      // For decreasing order use 
      {
        int swap   = array[j];
        array[j]   = array[j+1];
        array[j+1] = swap;
      }
    }
  }
}
```

### More Information
<!-- Please add any articles you think might be helpful to read before writing the article -->
- [Wikipedia](https://en.wikipedia.org/wiki/Bubble_sort)
- [Bubble Sort Algorithm - CS50](https://youtu.be/Ui97-_n5xjo)
- [Bubble Sort Algorithm - GeeksForGeeks (article)](http://www.geeksforgeeks.org/bubble-sort)
- [Bubble Sort Algorithm - MyCodeSchool (video)](https://www.youtube.com/watch?v=Jdtq5uKz-w4)
- [Algorithms: Bubble Sort - HackerRank (video)](https://www.youtube.com/watch?v=6Gv8vg0kcHc)
- [Bubble Sort Algorithm - GeeksForGeeks (video)](https://www.youtube.com/watch?v=nmhjrI-aW5o)
- [Bubble Sort Visualization](https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/)
