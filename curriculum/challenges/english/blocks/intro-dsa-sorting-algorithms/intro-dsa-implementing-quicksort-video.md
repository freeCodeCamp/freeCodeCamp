---
id: 698dea0c7932b3cc4b19c945
title: Implementing Quicksort
challengeType: 11
videoId: 7k5rxhK3X_Y
dashedName: implementing-quicksort-introduction-to-algorithms-and-data-structures
---

# --description--

In this video, you will learn how to implement the quicksort algorithm in Python.

# --questions--

## --text--

What is the base case for this quicksort implementation in Python?

## --answers--

```python
while len(values) > 1:
    values.pop()
```

---

```python
for i in range(len(values)):
    if values[i] > 0:
        values[i] -= 1
```

---

```python
for i in range(len(values)):
    values[i] += 1
```

---

```python
if len(values) <= 1:
    return values
```

## --video-solution--

4
