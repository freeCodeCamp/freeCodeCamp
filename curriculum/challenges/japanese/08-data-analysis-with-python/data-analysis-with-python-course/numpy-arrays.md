---
id: 5e9a093a74c4063ca6f7c154
title: Numpy の配列
challengeType: 11
videoId: VDYVFHBL1AM
bilibiliIds:
  aid: 890607366
  bvid: BV1zP4y1h7FR
  cid: 409011400
dashedName: numpy-arrays
---

# --description--

*動画で説明しているように、notebooks.ai を使用する代わりに Google Colab を使用することができます。*

その他のリソース:

-  <a href="https://github.com/ine-rmotr-curriculum/freecodecamp-intro-to-numpy" target="_blank" rel="noopener noreferrer nofollow">GitHub のノート</a>
-  <a href="https://colab.research.google.com/github/googlecolab/colabtools/blob/master/notebooks/colab-github-demo.ipynb" target="_blank" rel="noopener noreferrer nofollow">Google Colab を使用して GitHub からノートを開く方法</a>

# --question--

## --text--

次のコードは何を表示しますか？

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

