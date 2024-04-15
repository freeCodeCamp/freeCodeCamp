---
id: 5e9a093a74c4063ca6f7c158
title: Pandas Introduction
challengeType: 11
videoId: 0xACW-8cZU0
bilibiliIds:
  aid: 975510116
  bvid: BV1u44y1b7fD
  cid: 409013433
dashedName: pandas-introduction
---

# --description--

*بدلاً من استخدام (notebooks.ai) كما هو موضح بالفيديو يمكنك استخدام (Google Colab).*

المزيد من المصادر:

-  <a href="https://github.com/ine-rmotr-curriculum/freecodecamp-intro-to-pandas" target="_blank" rel="noopener noreferrer nofollow">ال Notebooks في GitHub</a>
-  <a href="https://colab.research.google.com/github/googlecolab/colabtools/blob/master/notebookس/colab-github-demo.ipynb" target="_blank" rel="noopener noreferrer nofollow">كيفية فتح (Notebook) من (GitHub) باستخدام (Google Colab).</a>

# --question--

## --text--

ماذا سيطبع الكود التالي؟

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

