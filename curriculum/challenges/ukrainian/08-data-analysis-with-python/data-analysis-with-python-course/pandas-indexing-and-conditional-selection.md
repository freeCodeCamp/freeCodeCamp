---
id: 5e9a093a74c4063ca6f7c159
title: 'Pandas: індексування та умовна вибірка'
challengeType: 11
videoId: '-ZOrgV_aA9A'
bilibiliIds:
  aid: 720604139
  bvid: BV1FQ4y1k7tC
  cid: 409013650
dashedName: pandas-indexing-and-conditional-selection
---

# --description--

*Замість використаного у відеоматеріалі notebooks.ai можна користуватись блокнотом Google Colab.*

Додаткові ресурси:

-  <a href="https://github.com/ine-rmotr-curriculum/freecodecamp-intro-to-pandas" target="_blank" rel="noopener noreferrer nofollow">Блокноти на GitHub</a>
-  <a href="https://colab.research.google.com/github/googlecolab/colabtools/blob/master/notebooks/colab-github-demo.ipynb" target="_blank" rel="noopener noreferrer nofollow">Як відкрити блокноти з GitHub, використовуючи Google Colab.</a>

# --question--

## --text--

Що надрукує наведений код?

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

