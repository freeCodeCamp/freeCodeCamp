---
title: Exponential Search
---

## Exponential Search
Exponential Search, also known as finger search, searches for an element in a sorted array by jumping `2^i` elements in every iteration, where i represents the 
value of loop control variable, and then verifying if the search element is present between the last jump and the current jump.

# Complexity Worst Case
O(log(N))
Often confused because of the name, the algorithm is named so not because of the time complexity.
The name arises as a result of the algorithm jumping elements with steps equal to exponents of 2

# Works
1. Jump the array `2^i` elements at a time searching for the condition `Array[2^(i-1)] < valueWanted < Array[2^i]`. If `2^i` is greater than the lenght of array, then set the upper bound to the length of the array.
2. Do a binary search between `Array[2^(i-1)]` and `Array[2^i]`


# Code 
```
// C++ program to find an element x in a
// sorted array using Exponential search.
#include <bits/stdc++.h>
using namespace std;
 
int binarySearch(int arr[], int, int, int);
 
// Returns position of first ocurrence of
// x in array
int exponentialSearch(int arr[], int n, int x)
{
    // If x is present at firt location itself
    if (arr[0] == x)
        return 0;
 
    // Find range for binary search by
    // repeated doubling
    int i = 1;
    while (i < n && arr[i] <= x)
        i = i*2;
 
    //  Call binary search for the found range.
    return binarySearch(arr, i/2, min(i, n), x);
}
 
// A recursive binary search function. It returns
// location of x in  given array arr[l..r] is
// present, otherwise -1
int binarySearch(int arr[], int l, int r, int x)
{
    if (r >= l)
    {
        int mid = l + (r - l)/2;
 
        // If the element is present at the middle
        // itself
        if (arr[mid] == x)
            return mid;
 
        // If element is smaller than mid, then it
        // can only be present n left subarray
        if (arr[mid] > x)
            return binarySearch(arr, l, mid-1, x);
 
        // Else the element can only be present
        // in right subarray
        return binarySearch(arr, mid+1, r, x);
    }
 
    // We reach here when element is not present
    // in array
    return -1;
}
 
int main(void)
{
   int arr[] = {2, 3, 4, 10, 40};
   int n = sizeof(arr)/ sizeof(arr[0]);
   int x = 10;
   int result = exponentialSearch(arr, n, x);
   (result == -1)? printf("Element is not present in array")
                 : printf("Element is present at index %d", result);
   return 0;
}
```
# More Information
- <a href='https://en.wikipedia.org/wiki/Exponential_search' target='_blank' rel='nofollow'>Wikipedia</a>

- <a href='https://www.geeksforgeeks.org/exponential-search/' target='_blank' rel='nofollow'>GeeksForGeeks</a>

# Credits
[C++ Implementation](https://www.wikitechy.com/technology/exponential-search/)
