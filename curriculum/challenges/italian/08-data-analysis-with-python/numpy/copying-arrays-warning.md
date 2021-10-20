---
id: 5e9a0a8e09c5df3cc3600ed7
title: Avvertenze sulla copia di array
challengeType: 11
videoId: iIoQ0_L0GvA
bilibiliIds:
  aid: 633008569
  bvid: BV1Bb4y127fb
  cid: 409026161
dashedName: copying-arrays-warning
---

# --question--

## --text--

Qual è il valore di `a` dopo aver eseguito il seguente codice?

```py
import numpy as np

a = np.array([1, 2, 3, 4, 5])
b = a
b[2] = 20
```

## --answers--

```python
[1 2 3 4 5]
```

---

```python
[1 2 20 4 5]
```

---

```python
[1 20 3 4 5]
```

## --video-solution--

2

