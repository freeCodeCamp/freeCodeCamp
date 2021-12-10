---
id: 5e9a093a74c4063ca6f7c15e
title: 'Очищення даних: Таблиці даних'
challengeType: 11
videoId: sTMN_pdI6S0
bilibiliIds:
  aid: 505597026
  bvid: BV1Yg411c7bx
  cid: 409018948
dashedName: data-cleaning-with-dataframes
---

# --description--

*Замість використаного у відеоматеріалі notebooks.ai можна користуватись блокнотом Google Colab.*

Додаткові ресурси:

-   [Блокноти на GitHub](https://github.com/ine-rmotr-curriculum/data-cleaning-rmotr-freecodecamp)
-   [Як відкрити блокноти з GitHub використовуючи Google Colab.](https://colab.research.google.com/github/googlecolab/colabtools/blob/master/notebooks/colab-github-demo.ipynb)

# --question--

## --text--

Який результат буде виведено на екран після виконання наведеного нижче коду?

```py
import pandas as pd
import numpy as np

s = pd.Series([np.nan, 1, 2, np.nan, 3])
s = s.fillna(method='ffill')

print(s)
```

## --answers--

<pre>
0    1.0
1    1.0
2    2.0
3    3.0
4    3.0
dtype: float64
</pre>

---

<pre>
0    NaN
1    1.0
2    2.0
3    2.0
4    3.0
dtype: float64
</pre>

---

<pre>
0    NaN
1    1.0
2    2.0
3    NaN
4    3.0
dtype: float64
</pre>

## --video-solution--

2

