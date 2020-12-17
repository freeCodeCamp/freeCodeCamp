---
id: 5e9a093a74c4063ca6f7c159
challengeType: 11
videoId: '-ZOrgV_aA9A'
---

# --description--

More resources:

\- [Notebook](https://notebooks.ai/rmotr-curriculum/freecodecamp-intro-to-pandas-902ae59b)

# --question--

## --text--

What will the following code print out?

```py
import pandas as pd

certificates_earned = pd.Series(
    [8, 2, 5, 6],
    index=['Tom', 'Kris', 'Ahmad', 'Beau']
)

print(certificates_earned[certificates_earned > 5])
```

## --answers--

```
Tom      True
Kris     False
Ahmad    False
Beau     True
dtype: int64
```

---

```
Tom      8
Ahmad    5
Beau     6
dtype: int64
```

---

```
Tom      8
Beau     6
dtype: int64
```

## --video-solution--

3

# --hints--


# --solutions--

