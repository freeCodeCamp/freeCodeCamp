---
title: Freecodecamp Algorithm Binary Search Guide
---
Binary search is a search algorithm that finds the position of a target value within a sorted array.

## Example

![Binary search](//discourse-user-assets.s3.amazonaws.com/original/2X/3/3cb9e4cc59081e1b0a19b716dbcfb6df97ac2b52.png)

The above illustration shows the working of the binary search algorithm on a sorted array when the target value is **4**.

## Algorithm

Binary search works on sorted arrays. A binary search begins by comparing the middle element of the array with the target value. If the target value matches the middle element, its position in the array is returned. If the target value is less or more than the middle element, the search continues the lower or upper half of the array respectively with a new middle element, eliminating the other half from consideration.

The pseudocode for binary search algorithm is as follows:

    BinarySearch(A<a href='https://repl.it/CWZq/158' target='_blank' rel='nofollow'>0..N-1], value) {
      low = 0
      high = N - 1
      while (low <= high) {
        // invariants: value > A[i] for all i < low
                       value < A[i] for all i > high
        mid = (low + high) / 2
        if (A[mid] > value)
          high = mid - 1
        else if (A[mid] < value)
          low = mid + 1
        else
          return mid
      }
      return not_found // value would be inserted at index "low"
    }

## Complexity

*   Worst case performance: **O(log n)**
*   Best case performance: **O(1)**
*   Average case performance: **O(log n)**
*   Worst case space complexity: **O(1)** for iterative; **O(log n)** for recursive.

## C++ Implementation

    int binarySearch(int arr[], int value, int left, int right) {
      int middle;
      while (left <= right) {
        middle = (left + right) / 2;
        if (arr[middle] == value)
          return middle;
        else if (arr[middle] > value)
          right = middle - 1;
        else
          left = middle + 1;
      }
      return -1;
    }

:rocket: [Run Code</a> ## Python Implementation  

    def binary_search(l, value):
        low = 0
        high = len(l)-1
        while low <= high:
            mid = (low+high)//2
            if l<a href='https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:"' target='_blank' rel='nofollow'>mid] > value: high = mid-1
            elif l[mid] < value: low = mid+1
            else: return mid
        return -1

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href='https://repl.it/CWZi/2' target='_blank' rel='nofollow'>Run Code</a>