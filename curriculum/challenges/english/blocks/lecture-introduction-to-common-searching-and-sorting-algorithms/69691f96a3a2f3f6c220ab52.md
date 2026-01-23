---
id: 69691f96a3a2f3f6c220ab52
title: What Is Binary Search and How Does It Differ From Linear Search?
challengeType: 19
dashedName: what-is-binary-search-and-how-does-it-differ-from-linear-search
---

# --description--

Searching through a list of items is a common occurrence in computer science. There are two key algorithms you should know about when it comes to searching: linear search and binary search.

Linear search starts at the beginning of a list and iterates through each item until it finds the target value it is looking for.

If the target value is found, the index where it's located in the list is returned. If the target value isn't found, `-1` is returned. We return `-1` because it's not a valid index in most programming languages.

Here is what the code looks like for linear search:

```javascript
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}
```

If the list we'll search through is `[13, 4, 7, 9, 10]` and the target value is `9`, the function would return `3` because `9` is at index `3`.

If we changed the target value to `5`, the function would return `-1` because `5` is not in the list.

While this is a relatively straightforward algorithm, it is not the most efficient. If you have a large list of items, linear search can take a long time to find the target value.

The time complexity of linear search is `O(n)` because the time it takes to search through the list grows linearly with the size of the list.

The space complexity of linear search is `O(1)` because it doesn't require any additional space to search through the list.

Binary search is a more efficient algorithm for searching through a large list of items. The condition here is that the list must be sorted in ascending order.

Binary search works by dividing the list in half and checking if the target value is in the middle of the list. If the target value is in the middle of the list, the index of the target value is returned. Otherwise, the algorithm checks if the target value is in the left or right half of the list.

It continues to divide the remaining parts of the list into halves until the target value is found. If the target value is not in the list, it returns `-1`

Here is what the code looks like for binary search:

```javascript
function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return -1;
}
```

We start by identifying a `low` and `high` index. This represents the range of the list we are searching through.

We then check the condition of `low` being less than or equal to `high`. If `low` is greater than `high`, we have searched through the entire list and the target value is not found. In that case we stop the search and return `-1`.

If the `low` index is less than or equal to the `high` index, we calculate the middle index of the list, `mid`. We then check if the target value is at the middle index. If it is, we return the middle index.

Otherwise, we check if the value at the midpoint is less than the target. If it is, we update the low index to be the middle index plus one. This means we will search the right half of the list.

Lastly, if none of the other conditions are `True`, we update the `high` index to be the middle index minus one. This means we will search the left half of the list.

We continue to repeat this process until we find the target or determine that the target is not in the list.

The time complexity of binary search is `O(log n)` because the time it takes to search through the list grows logarithmically with the size of the list.

The space complexity of binary search is `O(1)` because it doesn't require any additional space to search through the list.

Binary search and linear search can be used for a variety of problems you will encounter in computer science. It is important to understand the differences between the two algorithms and when to use each one.

# --questions--

## --text--

What is the main difference between linear search and binary search?

## --answers--

Linear search is faster than binary search.

### --feedback--

Consider the requirements and efficiency of each algorithm.

---

Binary search requires a sorted list, while linear search does not.

---

Linear search can only be used with numbers.

### --feedback--

Consider the requirements and efficiency of each algorithm.

---

Binary search always returns the first occurrence of a target.

### --feedback--

Consider the requirements and efficiency of each algorithm.

## --video-solution--

2

## --text--

What is the time complexity of linear search?

## --answers--

`O(1)`

### --feedback--

Think about how the time to complete the search changes with the size of the list.

---

`O(log n)`

### --feedback--

Think about how the time to complete the search changes with the size of the list.

---

`O(n)`

---

`O(n²)`

### --feedback--

Think about how the time to complete the search changes with the size of the list.

## --video-solution--

3

## --text--

In binary search, what happens if the target value is not found in the list?

## --answers--

It returns the middle index.

### --feedback--

Reflect on what the function is designed to do when the target is absent.

---

It returns `-1`.

---

It returns the last index checked.

### --feedback--

Reflect on what the function is designed to do when the target is absent.

---

It enters an infinite loop.

### --feedback--

Reflect on what the function is designed to do when the target is absent.

## --video-solution--

2

