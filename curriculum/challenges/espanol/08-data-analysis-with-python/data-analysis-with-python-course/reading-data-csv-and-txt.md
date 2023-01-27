---
id: 5e9a093a74c4063ca6f7c162
title: Leyendo datos CSV y TXT
challengeType: 11
videoId: ViGEv0zOzUk
bilibiliIds:
  aid: 505575354
  bvid: BV1tg411c7GH
  cid: 409020451
dashedName: reading-data-csv-and-txt
---

# --description--

*En vez de usar notebooks.ai como aparece en el video, puedes usar Google Colab.*

Más recursos:

-  <a href="https://github.com/krishnatray/RDP-Reading-Data-with-Python-and-Pandas" target="_blank" rel="noopener noreferrer nofollow">Notas en GitHub</a>
-  <a href="https://colab.research.google.com/github/googlecolab/colabtools/blob/master/notebooks/colab-github-demo.ipynb" target="_blank" rel="noopener noreferrer nofollow">Cómo abrir Notebooks desde GitHub utilizando Google Colab.</a>

# --question--

## --text--

¿Cómo importaría el archivo CSV `data.csv` y lo almacenaría en un DataFrame usando el módulo Pandas?

## --answers--

```python
import pandas as pd
df = pd.csv("data.csv")
```

---

```python
import pandas as pd
df = pd.read_csv("data.csv")
```

---

```python
import pandas as pd
pd.read_csv("data.csv")
```

---

```python
import pandas as pd
df = pd.csv_reader("data.csv")
```

## --video-solution--

2

