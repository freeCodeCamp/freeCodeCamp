---
id: 5e9a093a74c4063ca6f7c15b
title: Pandas Conditional Selection and Modifying DataFrames
challengeType: 11
videoId: BFlH0fN5xRQ
bilibiliIds:
  aid: 505598518
  bvid: BV1vg411c72y
  cid: 409113534
dashedName: pandas-conditional-selection-and-modifying-dataframes
---

# --description--

*Instead of using notebooks.ai like it shows in the video, you can use Google Colab instead.*

More resources:

-  <a href="https://github.com/ine-rmotr-curriculum/freecodecamp-intro-to-pandas" target="_blank" rel="noopener noreferrer nofollow">Notebooks في GitHub</a>
-  <a href="https://colab.research.google.com/github/googlecolab/colabtools/blob/master/notebooks/colab-github-demo.ipynb" target="_blank" rel="noopener noreferrer nofollow">كيفية فتح Notebook من GitHub باستخدام Google Colab.</a>

# --question--

## --text--

What will the following code print out?

```py
import pandas as pd

certificates_earned = pd.DataFrame({
    'Certificates': [8, 2, 5, 6],
    'Time (in months)': [16, 5, 9, 12]
})
names = ['Tom', 'Kris', 'Ahmad', 'Beau']

certificates_earned.index = names
longest_streak = pd.Series([13, 11, 9, 7], index=names)
certificates_earned['Longest streak'] = longest_streak

print(certificates_earned)
```

## --answers--

<pre>
Tom      13
Kris     11
Ahmad     9
Beau      7
Name: Longest streak, dtype: int64
</pre>

---

<pre>
      Certificates  Time (in months)  Longest streak
Tom               8                16              13
Kris              2                 5              11
Ahmad             5                 9               9
Beau              6                12               7
</pre>

---

<pre>
      Certificates   Longest streak
Tom               8               13
Kris              2               11
Ahmad             5                9
Beau              6                7
</pre>

## --video-solution--

2

