---
id: 5e9a093a74c4063ca6f7c15c
title: Pandas Creating Columns
challengeType: 11
videoId: _sSo2XZoB3E
bilibiliIds:
  aid: 975568901
  bvid: BV1b44y1b7Cg
  cid: 409018052
dashedName: pandas-creating-columns
---

# --description--

*Instead of using notebooks.ai like it shows in the video, you can use Google Colab instead.*

More resources:

-  <a href="https://github.com/ine-rmotr-curriculum/freecodecamp-intro-to-pandas" target="_blank" rel="noopener noreferrer nofollow">Notebooks في GitHub</a>
-  <a href="https://colab.research.google.com/github/googlecolab/colabtools/blob/master/notebooks/colab-github-demo.ipynb" target="_blank" rel="noopener noreferrer nofollow">كيفية فتح (Notebook) من (GitHub) باستخدام (Google Colab).</a>

# --question--

## --text--

What code would add a "Certificates per month" column to the `certificates_earned` DataFrame like the one below?

<pre>      Certificates  Time (in months)  Certificates per month
Tom               8                16                    0.50
Kris              2                 5                    0.40
Ahmad             5                 9                    0.56
Beau              6                12                    0.50</pre>

## --answers--

```py
certificates_earned['Certificates'] /
certificates_earned['Time (in months)']
```

---

```py
certificates_earned['Certificates per month'] = round(
    certificates_earned['Certificates'] /
    certificates_earned['Time (in months)']
)
```

---

```py
certificates_earned['Certificates per month'] = round(
    certificates_earned['Certificates'] /
    certificates_earned['Time (in months)'], 2
)
```

## --video-solution--

3

