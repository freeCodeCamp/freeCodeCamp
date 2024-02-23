---
id: 5e9a093a74c4063ca6f7c15a
title: Pandas DataFrames
challengeType: 11
videoId: 7SgFBYXaiH0
bilibiliIds:
  aid: 890503235
  bvid: BV1TP4y1h7qq
  cid: 409014039
dashedName: pandas-dataframes
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

certificates_earned = pd.DataFrame({
    'Certificates': [8, 2, 5, 6],
    'Time (in months)': [16, 5, 9, 12]
})

certificates_earned.index = ['Tom', 'Kris', 'Ahmad', 'Beau']

print(certificates_earned.iloc[2])
```

## --answers--

<pre>
Tom      16
Kris      5
Ahmad     9
Beau     12
Name: Time (in months), dtype: int64
</pre>

---

<pre>
Certificates         6
Time (in months)    12
Name: Beau, dtype: int64
</pre>

---

<pre>
Certificates        5
Time (in months)    9
Name: Ahmad, dtype: int64
</pre>

## --video-solution--

3

