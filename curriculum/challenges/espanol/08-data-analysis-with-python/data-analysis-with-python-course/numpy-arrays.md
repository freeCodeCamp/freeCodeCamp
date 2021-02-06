---
id: 5e9a093a74c4063ca6f7c154
title: Numpy Arrays
challengeType: 11
videoId: VDYVFHBL1AM
dashedName: numpy-arrays
---

# --description--

*Instead of using notebooks.ai like it shows in the video, you can use Google Colab instead.*

More resources:

-   [Notebooks on GitHub](https://github.com/ine-rmotr-curriculum/freecodecamp-intro-to-numpy)
-   [How to open Notebooks from GitHub using Google Colab.](https://colab.research.google.com/github/googlecolab/colabtools/blob/master/notebooks/colab-github-demo.ipynb)

# --question--

## --text--

What will the following code print out?

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

