---
id: 5e9a093a74c4063ca6f7c15e
challengeType: 11
videoId: sTMN_pdI6S0
dashedName: data-cleaning-with-dataframes
---

# --description--

More resources:

\- [Notebook](https://notebooks.ai/rmotr-curriculum/data-cleaning-rmotr-freecodecamp-fd76fa59)

# --question--

## --text--

What will the following code print out?

```py
import pandas as pd
import numpy as np

s = pd.Series([np.nan, 1, 2, np.nan, 3])
s = s.fillna(method='ffill')

print(s)
```

## --answers--

```
0    1.0
1    1.0
2    2.0
3    3.0
4    3.0
dtype: float64
```

---

```
0    NaN
1    1.0
2    2.0
3    2.0
4    3.0
dtype: float64
```

---

```
0    NaN
1    1.0
2    2.0
3    NaN
4    3.0
dtype: float64
```

## --video-solution--

2

