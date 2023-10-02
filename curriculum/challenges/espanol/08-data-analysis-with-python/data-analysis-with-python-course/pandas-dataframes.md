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

certificates_earned.index = ['Tom', 'Kris', 'Ahmad', 'Beau']

print(certificates_earned.iloc[2])
```

## --answers--

<pre>
Tom      16
Kris      5
Ahmad     9
Beau     12
Nombre: Tiempo (en meses), dtype: int64
</pre>

---

<pre>
Certificados 6
Tiempo (en meses) 12
Nombre: Beau, dtype: int64
</pre>

---

<pre>
Certificados 5
Tiempo (en meses) 9
Nombre: Ahmad, dtype: int64
</pre>

## --video-solution--

3

