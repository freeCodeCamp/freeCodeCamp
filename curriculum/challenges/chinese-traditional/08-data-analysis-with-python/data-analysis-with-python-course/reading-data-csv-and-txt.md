---
id: 5e9a093a74c4063ca6f7c162
title: 從 CSV 和 TXT 中讀取數據
challengeType: 11
videoId: ViGEv0zOzUk
dashedName: reading-data-csv-and-txt
---

# --description--

*在視頻中我們使用的編輯器工具是在 notebook.ai 這個平臺，你也可以選擇用其他的平臺，比如說 Google Colab 也是一個不錯的選擇。*

以下有更多的資料：

-   [在 GitHub 平臺的 Notebooks](https://github.com/ine-rmotr-curriculum/RDP-Reading-Data-with-Python-and-Pandas/tree/master/unit-1-reading-data-with-python-and-pandas/lesson-1-reading-csv-and-txt-files/files)
-   [如何使用 Google Colab 來打開 GitHub 上的 Notebooks](https://colab.research.google.com/github/googlecolab/colabtools/blob/master/notebooks/colab-github-demo.ipynb)

# --question--

## --text--

你如何使用 Pandas 模塊導入 CSV 文件 `data.csv` 並且存儲到 DataFrame 中？

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

