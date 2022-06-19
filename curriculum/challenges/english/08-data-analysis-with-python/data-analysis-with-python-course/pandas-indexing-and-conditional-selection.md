---
id: 5e9a093a74c4063ca6f7c159
title: Pandas Indexing and Conditional Selection
challengeType: 11
videoId: '-ZOrgV_aA9A'
bilibiliIds:
  aid: 720604139
  bvid: BV1FQ4y1k7tC
  cid: 409013650
dashedName: pandas-indexing-and-conditional-selection
---

# --description--

*Instead of using notebooks.ai like it shows in the video, you can use Google Colab instead.*

More resources:

-  <a href="https://github.com/ine-rmotr-curriculum/freecodecamp-intro-to-pandas" target="_blank" rel="noopener noreferrer nofollow">Notebooks on GitHub</a>
-  <a href="https://colab.research.google.com/github/googlecolab/colabtools/blob/master/notebooks/colab-github-demo.ipynb" target="_blank" rel="noopener noreferrer nofollow">How to open Notebooks from GitHub using Google Colab.</a>

# --question--

## --text--

What will the following code print out?

```py
import pandas as pd

certificates_earned = pd.Series(
    [8, 2, 5, 6],
    index=['Tom', 'Kris', 'Ahmad', 'Beau']
)

print(certificates_earned[certificates_earned > 5])
```

## --answers--

<pre>
Tom      True
Kris     False
Ahmad    False
Beau     True
dtype: int64
</pre>

---

<pre>
Tom      8
Ahmad    5
Beau     6
dtype: int64
</pre>

---

<pre>
Tom      8
Beau     6
dtype: int64
</pre>

## --video-solution--

3

