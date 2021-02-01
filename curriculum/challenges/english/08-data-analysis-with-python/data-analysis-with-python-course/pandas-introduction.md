---
id: 5e9a093a74c4063ca6f7c158
title: Pandas Introduction
challengeType: 11
videoId: 0xACW-8cZU0
dashedName: pandas-introduction
---

# --description--

*Instead of using notebooks.ai like it shows in the video, you can use Google Colab instead.*

More resources:

-   [Notebooks on GitHub](https://github.com/ine-rmotr-curriculum/freecodecamp-intro-to-pandas)
-   [How to open Notebooks from GitHub using Google Colab.](https://colab.research.google.com/github/googlecolab/colabtools/blob/master/notebooks/colab-github-demo.ipynb)

# --question--

## --text--

What will the following code print out?

```py
import pandas as pd

certificates_earned = pd.Series(
    [8, 2, 5, 6],
    index=['Tom', 'Kris', 'Ahmad', 'Beau']
)

print(certificates_earned)
```

## --answers--

```
Tom      8
Kris     2
Ahmad    5
Beau     6
dtype: int64
```

---

```
Kris     2
Ahmad    5
Beau     6
Tom      8
dtype: int64
```

---

```
Tom      8
Kris     2
Ahmad    5
Beau     6
Name: certificates_earned dtype: int64
```

## --video-solution--

1

