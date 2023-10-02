---
id: 5e9a093a74c4063ca6f7c15d
title: Introducción a la limpieza de datos
challengeType: 11
videoId: ovYNhnltVxY
bilibiliIds:
  aid: 250574398
  bvid: BV1Pv411A7GN
  cid: 409018611
dashedName: data-cleaning-introduction
---

# --description--

*En lugar de usar notebooks.ai como se muestra en el vídeo, puede utilizar Google Colab en su lugar.*

Más recursos:

-  <a href="https://github.com/ine-rmotr-curriculum/data-cleaning-rmotr-freecodecamp" target="_blank" rel="noopener noreferrer nofollow">Notebooks en GitHub</a>
-  <a href="https://colab.research.google.com/github/googlecolab/colabtools/blob/master/notebooks/colab-github-demo.ipynb" target="_blank" rel="noopener noreferrer nofollow">Cómo abrir Notebooks desde GitHub utilizando Google Colab.</a>

# --question--

## --text--

¿Qué imprimirá el siguiente código?

```py
import pandas as pd
import numpy as np

s = pd.Series(['a', 3, np.nan, 1, np.nan])

print(s.notnull().sum())
```

## --answers--

3

---

<pre>0     True
1     True
2    False
3     True
4    False
dtype: bool</pre>

---

<pre>0    False
1    False
2     True
3    False
4     True
dtype: bool</pre>

## --video-solution--

1

