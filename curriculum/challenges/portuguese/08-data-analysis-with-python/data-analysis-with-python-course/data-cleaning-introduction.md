---
id: 5e9a093a74c4063ca6f7c15d
title: Introdução à limpeza de dados
challengeType: 11
videoId: ovYNhnltVxY
bilibiliIds:
  aid: 250574398
  bvid: BV1Pv411A7GN
  cid: 409018611
dashedName: data-cleaning-introduction
---

# --description--

*Ao invés de usar notebooks.ai como foi mostrado no vídeo, você pode usar o Google Colab como substituto.*

Mais recursos:

-  <a href="https://github.com/ine-rmotr-curriculum/data-cleaning-rmotr-freecodecamp" target="_blank" rel="noopener noreferrer nofollow">Notebooks no GitHub</a>
-  <a href="https://colab.research.google.com/github/googlecolab/colabtools/blob/master/notebooks/colab-github-demo.ipynb" target="_blank" rel="noopener noreferrer nofollow">Como abrir notebooks do GitHub usando o Google Colab.</a>

# --question--

## --text--

O que será impresso pelo código a seguir?

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

