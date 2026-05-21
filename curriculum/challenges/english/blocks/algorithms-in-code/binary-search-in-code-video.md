---
id: 698dcc2c7932b3cc4b19c927
title: Binary Search in Code
challengeType: 11
videoId: mg7F5D8Wk5o
dashedName: binary-search-in-code
---

# --description--

In this video, you will code out the binary search algorithm using Python.

# --questions--

## --text--

Why was the `while first <= last:` condition used in the solution?

## --answers--

To ensure only the first half of the array is ever checked.
```python
def binary_search(arr, target):
    first = 0
    last = len(arr) - 1
    while first < last:
        mid = (first + last) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            first = mid + 1
        else:
            last = mid - 1
    return -1
```
---

To make the loop run forever until manually stopped.
```python
def binary_search(arr, target):
    first = 0
    last = len(arr) - 1
    while first <= last:
        mid = (first + last) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            first = mid + 1
        else:
            last = mid - 1
    return -1
```
---

To skip checking the last element in the search range.
```python
def binary_search(arr, target):
    first = 0
    last = len(arr)
    while first <= last:
        mid = (first + last) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            first = mid + 1
        else:
            last = mid - 1
    return -1
```
---

To keep searching while there are still elements in the range and stop when the range is empty.
```python
def binary_search(arr, target):
    first = 0
    last = len(arr) - 1
    while first <= last:
        mid = (first + last) // 2
        if arr[mid] > target:
            first = mid + 1
        elif arr[mid] < target:
            last = mid - 1
        else:
            return mid
    return -1
```
---

## --video-solution--

4
