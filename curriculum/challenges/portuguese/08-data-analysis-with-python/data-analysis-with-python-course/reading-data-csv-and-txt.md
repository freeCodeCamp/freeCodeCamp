---
id: 5e9a093a74c4063ca6f7c162
title: Ler dados de CSV e TXT
challengeType: 11
videoId: ViGEv0zOzUk
dashedName: reading-data-csv-and-txt
---

# --description--

*Ao invés de usar notebooks.ai como foi mostrado no vídeo, você pode usar o Google Colab como substituto.*

Mais recursos:

-   [Notebooks no GitHub](https://github.com/ine-rmotr-curriculum/RDP-Reading-Data-with-Python-and-Pandas/tree/master/unit-1-reading-data-with-python-and-pandas/lesson-1-reading-csv-and-txt-files/files)
-   [Como abrir notebooks do GitHub usando o Google Colab.](https://colab.research.google.com/github/googlecolab/colabtools/blob/master/notebooks/colab-github-demo.ipynb)

# --question--

## --text--

Como você importaria o arquivo CSV `data.csv` e o armazenaria em um DataFrame usando o módulo Pandas?

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

