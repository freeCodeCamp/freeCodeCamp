---
id: 5e9a093a74c4063ca6f7c158
title: Introdução ao Pandas
challengeType: 11
videoId: 0xACW-8cZU0
bilibiliIds:
  aid: 975510116
  bvid: BV1u44y1b7fD
  cid: 409013433
dashedName: pandas-introduction
---

# --description--

*Ao invés de usar notebooks.ai como foi mostrado no vídeo, você pode usar o Google Colab como substituto.*

Mais recursos:

-  <a href="https://github.com/ine-rmotr-curriculum/freecodecamp-intro-to-pandas" target="_blank" rel="noopener noreferrer nofollow">Notebooks no GitHub</a>
-  <a href="https://colab.research.google.com/github/googlecolab/colabtools/blob/master/notebooks/colab-github-demo.ipynb" target="_blank" rel="noopener noreferrer nofollow">Como abrir notebooks do GitHub usando o Google Colab.</a>

# --question--

## --text--

O que será impresso pelo código a seguir?

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

