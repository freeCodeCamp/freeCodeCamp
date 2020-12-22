---
id: 5e9a093a74c4063ca6f7c15a
challengeType: 11
videoId: 7SgFBYXaiH0
---

# --description--

More resources:

\- [Notebook](https://notebooks.ai/rmotr-curriculum/freecodecamp-intro-to-pandas-902ae59b)

# --question--

## --text--

What will the following code print out?

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

```
Tom      16
Kris      5
Ahmad     9
Beau     12
Name: Time (in months), dtype: int64
```

---

```
Certificates         6
Time (in months)    12
Name: Beau, dtype: int64
```

---

```
Certificates        5
Time (in months)    9
Name: Ahmad, dtype: int64
```

## --video-solution--

3

# --hints--


# --solutions--

