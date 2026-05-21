---
id: 698dce727932b3cc4b19c928
title: Recursive Binary Search
challengeType: 11
videoId: RQNBzDoG_gA
dashedName: recursive-binary-search
---

# --description--

In this video, you will learn how to create a recursive solution for binary search.

# --questions--

## --text--

What is a recursive function?

## --answers--

A function that performs a calculation only once.
```python
def recursive_binary_search(arr, low, high, target):
    if low > high:
        return -1
    mid = (low + high) // 2
    if arr[mid] == target:
        return mid
    return recursive_binary_search(arr, mid+1, high, target)
```
---

A function that calls itself.
```python
def recursive_binary_search(arr, low, high, target):
    if low >= high:
        return -1
    mid = (low + high) // 2
    if arr[mid] == target:
        return mid
    return recursive_binary_search(arr, low, mid-1, target)
```
---

A function that never returns a value.
```python
def recursive_binary_search(arr, low, high, target):
    mid = (low + high) // 2
    if arr[mid] == target:
        return mid
    return recursive_binary_search(arr, low, high, target)
```
---

A function that can only run in a loop.
```python
def recursive_binary_search(arr, low, high, target):
    if low > high:
        return None
    mid = (low + high) // 2
    if arr[mid] == target:
        return mid
    return recursive_binary_search(arr, mid+1, high, target)
```
---

## --video-solution--

2
