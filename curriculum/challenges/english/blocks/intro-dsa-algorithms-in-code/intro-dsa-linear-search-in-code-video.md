---
id: 698dca057932b3cc4b19c926
title: Linear Search in Code
challengeType: 11
videoId: bKkgjdPkL3A
dashedName: linear-search-in-code-introduction-to-algorithms-and-data-structures
---

# --description--

In this video, you will code out the linear search algorithm using Python.

# --questions--

## --text--

Which of the following is the correct way to write a linear search function?

## --answers--

```python
def linear_search(list, target):
    for i in range(len(list) - 1):  
        if list[i] == target:
            return i
    return -1
```

---

```python
def linear_search(list, target):
    for i in range(len(list)):
        if i == target:   
            return i
    return -1

```

---

```python
def linear_search(list, target):
    for i in range(len(list)):
        if list[i] == target:
            return i
        else:
            return -1  
```

---

```python
def linear_search(list, target):
    for i in range(len(list)):
        if list[i] == target:
            return i  
    return None
```

## --video-solution--

4
