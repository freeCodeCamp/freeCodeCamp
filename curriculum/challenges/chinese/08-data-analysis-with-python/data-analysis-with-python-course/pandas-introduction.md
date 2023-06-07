---
id: 5e9a093a74c4063ca6f7c158
title: Pandas 简介
challengeType: 11
videoId: 0xACW-8cZU0
bilibiliIds:
  aid: 975510116
  bvid: BV1u44y1b7fD
  cid: 409013433
dashedName: pandas-introduction
---

# --description--

*在视频中我们使用的编辑器工具是在 notebook.ai 这个平台，你也可以选择用其他的平台，比如说 Google Colab 也是一个不错的选择。*

以下有更多的资料：

-  <a href="https://github.com/ine-rmotr-curriculum/freecodecamp-intro-to-pandas" target="_blank" rel="noopener noreferrer nofollow">在 GitHub 平台的 Notebooks</a>
-  <a href="https://colab.research.google.com/github/googlecolab/colabtools/blob/master/notebooks/colab-github-demo.ipynb" target="_blank" rel="noopener noreferrer nofollow">如何使用 Google Colab 来打开 GitHub 上的 Notebooks</a>

# --question--

## --text--

以下代码会打印出什么？

```py
import pandas as pd

certificates_earned = pd.Series(
    [8, 2, 5, 6],
    index=['Tom', 'Kris', 'Ahmad', 'Beau']
)

print(certificates_earned)
```

## --answers--

```markup
Tom      8
Kris     2
Ahmad    5
Beau     6
dtype: int64
```

---

```markup
Kris     2
Ahmad    5
Beau     6
Tom      8
dtype: int64
```

---

```markup
Tom      8
Kris     2
Ahmad    5
Beau     6
Name: certificates_earned dtype: int64
```

## --video-solution--

1

