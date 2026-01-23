---
id: 69691ff777d428294168d47e
title: What Is Divide and Conquer, and How Does Merge Sort Work?
challengeType: 19
dashedName: what-is-divide-and-conquer-and-how-does-merge-sort-work
---

# --description--

The divide and conquer paradigm in computer science is a technique for recursively breaking down problems into smaller sub-problems. One of the key aspects of this technique is recursion, which happens when a function calls itself repeatedly until a base case is reached. In this lesson, we will take a look at the merge sort algorithm to better understand how the divide and conquer technique works.

Let's say we had this list of numbers:

```md
42 37 53 17
```

The goal is to sort that list from smallest to largest using the merge sort algorithm. The first step is to divide that list in half:

```md
42 37 | 53 17
```

Then we need to look at the left side of the list:

```md
42 37
```

We take that sub list and divide in half again until each sub list has only one item in it:

```md
42 | 37
```

A list with only one item in it is sorted by default. Next we need to merge each of those one element sub lists into a sorted list:

```md
37 42
```

Then we follow the same process for the right side of the original list:

```javascript
// right side of original list
53 17

// divide the list in half
53 | 17

// merge the lists in sorted order
17 53
```

Now that both halves of the original list are sorted, we merge those two halves together and sort the elements:

```markdown
17 37 42 53
```

Here is what the algorithm looks like in code:

```javascript
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    const sorted = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            sorted.push(left[i]);
            i += 1;
        } else {
            sorted.push(right[j]);
            j += 1;
        }
    }

    return sorted.concat(left.slice(i)).concat(right.slice(j));
}
```

The time complexity for merge sort would be `O(n log n)` because the list is continuously divided in half (`log n`) and then merged together (`O(n)`). Unlike other sorting algorithms like bubble sort, merge sort is not sorted in place and has a space complexity of `O(n)`.

# --questions--

## --text--

What is the divide and conquer paradigm in computer science?

## --answers--

A technique for detecting a cycle in function value iterations using just two iterators.

### --feedback--

Review the beginning of the lesson.

---

An algorithm for comparing two elements and swapping them from smallest to largest if needed.

### --feedback--

Review the beginning of the lesson.

---

A technique for recursively breaking down problems into smaller sub-problems.

---

An algorithm to compute the shortest connecting network for points in a plane.

### --feedback--

Review the beginning of the lesson.

## --video-solution--

3

## --text--

What is the time complexity for the merge sort algorithm?

## --answers--

`O(n log n)`

---

`O(log n²)`

### --feedback--

Review the end of the lesson.

---

`O(n³ log n)`

### --feedback--

Review the end of the lesson.

---

`O(log n³)`

### --feedback--

Review the end of the lesson.

## --video-solution--

1

## --text--

What is the space complexity for the merge sort algorithm?

## --answers--

`O(n²)`

### --feedback--

Review the end of the lesson.

---

`O(1)`

### --feedback--

Review the end of the lesson.

---

`O(n log n)`

### --feedback--

Review the end of the lesson.

---

`O(n)`

## --video-solution--

4
