---
id: 5e9a0a8e09c5df3cc3600ed4
title: 'Accedere e cambiare elementi, righe, colonne'
challengeType: 11
videoId: v-7Y7koJ_N0
bilibiliIds:
  aid: 590517748
  bvid: BV1Eq4y1f7Fa
  cid: 409025392
dashedName: accessing-and-changing-elements-rows-columns
---

# --question--

## --text--

Quale codice imposterebbe a 20 il valore della terza colonna per entrambi i seguenti array Numpy?

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

