---
id: 5e9a093a74c4063ca6f7c15d
challengeType: 11
videoId: ovYNhnltVxY
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

s = pd.Series(['a', 3, np.nan, 1, np.nan])

print(s.notnull().sum())
```

## --answers--

3

---

```
0     True
1     True
2    False
3     True
4    False
dtype: bool
```

---

```
0    False
1    False
2     True
3    False
4     True
dtype: bool
```

## --video-solution--

1

# --hints--


# --solutions--

