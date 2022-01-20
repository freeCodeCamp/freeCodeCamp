---
id: 5e9a093a74c4063ca6f7c162
title: CSV や TXT のデータの読み取り
challengeType: 11
videoId: ViGEv0zOzUk
bilibiliIds:
  aid: 505575354
  bvid: BV1tg411c7GH
  cid: 409020451
dashedName: reading-data-csv-and-txt
---

# --description--

*動画で説明しているように、notebooks.ai を使用する代わりに Google Colab を使用することができます。*

その他のリソース:

-   [GitHub のノート](https://github.com/krishnatray/RDP-Reading-Data-with-Python-and-Pandas)
-   [Google Colab を使用して GitHub からノートを開く方法](https://colab.research.google.com/github/googlecolab/colabtools/blob/master/notebooks/colab-github-demo.ipynb)

# --question--

## --text--

Pandas モジュールを使用して CSV ファイル `data.csv` をインポートし、DataFrame に格納するにはどうすればよいですか？

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

