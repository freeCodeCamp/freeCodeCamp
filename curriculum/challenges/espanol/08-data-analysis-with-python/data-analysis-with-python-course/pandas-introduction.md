---
id: 5e9a093a74c4063ca6f7c158
title: Introducción a Pandas
challengeType: 11
videoId: 0xACW-8cZU0
bilibiliIds:
  aid: 975510116
  bvid: BV1u44y1b7fD
  cid: 409013433
dashedName: pandas-introduction
---

# --description--

*En vez de usar notebooks.ai como aparece en el video, puedes usar Google Colab.*

Más recursos:

-   [Notas en GitHub](https://github.com/ine-rmotr-curriculum/freecodecamp-intro-to-pandas)
-   [Cómo abrir Notebooks desde GitHub utilizando Google Colab.](https://colab.research.google.com/github/googlecolab/colabtools/blob/master/notebooks/colab-github-demo.ipynb)

# --question--

## --text--

¿Qué imprimirá el siguiente código?

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

