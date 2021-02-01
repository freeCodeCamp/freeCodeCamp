---
id: 5e9a093a74c4063ca6f7c162
title: Reading Data CSV and TXT
challengeType: 11
videoId: ViGEv0zOzUk
dashedName: reading-data-csv-and-txt
---

# --description--

*Instead of using notebooks.ai like it shows in the video, you can use Google Colab instead.*

More resources:

-   [Notebooks on GitHub](https://github.com/ine-rmotr-curriculum/RDP-Reading-Data-with-Python-and-Pandas)
-   [How to open Notebooks from GitHub using Google Colab.](https://colab.research.google.com/github/googlecolab/colabtools/blob/master/notebooks/colab-github-demo.ipynb)

# --question--

## --text--

How would you import the CSV file `data.csv` and store it in a DataFrame using the Pandas module?

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

