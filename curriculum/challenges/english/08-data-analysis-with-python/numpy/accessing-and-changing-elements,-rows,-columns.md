---
id: 5e9a0a8e09c5df3cc3600ed4
title: 'Accessing and Changing Elements, Rows, Columns'
challengeType: 11
videoId: v-7Y7koJ_N0
dashedName: accessing-and-changing-elements-rows-columns
---

# --question--

## --text--

What code would change the values in the 3rd column of both of the following Numpy arrays to 20?

```py
a = np.array([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]])

# Output:
# [[ 1  2  20  4  5]
# [ 6  7 20  9 10]]
```

## --answers--

```python
a[:, 3] = 20
```

---

```python
a[2, :] = 20
```

---

```python
a[:, 2] = 20
```

---

```python
a[1, 2] = 20
```

## --video-solution--

3

