---
id: 5e9a093a74c4063ca6f7c15b
title: Selección condicional de Pandas y modificación de DataFrames
challengeType: 11
videoId: BFlH0fN5xRQ
bilibiliIds:
  aid: 505598518
  bvid: BV1vg411c72y
  cid: 409113534
dashedName: pandas-conditional-selection-and-modifying-dataframes
---

# --description--

*En vez de usar notebooks.ai como aparece en el video, puedes usar Google Colab.*

Más recursos:

-  <a href="https://github.com/ine-rmotr-curriculum/freecodecamp-intro-to-pandas" target="_blank" rel="noopener noreferrer nofollow">Notas en GitHub</a>
-  <a href="https://colab.research.google.com/github/googlecolab/colabtools/blob/master/notebooks/colab-github-demo.ipynb" target="_blank" rel="noopener noreferrer nofollow">Cómo abrir Notebooks desde GitHub utilizando Google Colab.</a>

# --question--

## --text--

¿Qué imprimirá el siguiente código?

```py
import pandas as pd

certificates_earned = pd.DataFrame({
    'Certificates': [8, 2, 5, 6],
    'Time (in months)': [16, 5, 9, 12]
})
names = ['Tom', 'Kris', 'Ahmad', 'Beau']

certificates_earned.index = names
longest_streak = pd.Series([13, 11, 9, 7], index=names)
certificates_earned['Longest streak'] = longest_streak

print(certificates_earned)
```

## --answers--

<pre>
Tom 13
Kris 11
Ahmad 9
Beau 7
Nombre: Racha más larga, tipo: int64
</pre>

---

<pre>
      Certificados  Tiempo (en meses)  Racha más larga
Tom               8                16              13
Kris              2                 5              11
Ahmad             5                 9               9
Beau              6                12               7
</pre>

---

<pre>
      Certificados   Racha más larga
Tom               8               13
Kris              2               11
Ahmad             5                9
Beau              6                7
</pre>

## --video-solution--

2

