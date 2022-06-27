---
id: 5e9a093a74c4063ca6f7c154
title: Numpy 數組
challengeType: 11
videoId: VDYVFHBL1AM
bilibiliIds:
  aid: 890607366
  bvid: BV1zP4y1h7FR
  cid: 409011400
dashedName: numpy-arrays
---

# --description--

*在視頻中我們使用的編輯器工具是在 notebook.ai 這個平臺，你也可以選擇用其他的平臺，比如說 Google Colab 也是一個不錯的選擇。*

以下有更多的資料：

-  <a href="https://github.com/ine-rmotr-curriculum/freecodecamp-intro-to-numpy" target="_blank" rel="noopener noreferrer nofollow">在 GitHub 平臺的 Notebooks</a>
-  <a href="https://colab.research.google.com/github/googlecolab/colabtools/blob/master/notebooks/colab-github-demo.ipynb" target="_blank" rel="noopener noreferrer nofollow">如何使用 Google Colab 來打開 GitHub 上的 Notebooks</a>

# --question--

## --text--

以下代碼會打印出什麼？

```py
A = np.array([
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i']
])

print(A[:, :2])
```

## --answers--

```py
[['a' 'b']]
```

---

```py
[['b' 'c']
['e' 'f']
['h' 'i']]
```

---

```py
[['a' 'b']
['d' 'e']
['g' 'h']]
```

## --video-solution--

3

