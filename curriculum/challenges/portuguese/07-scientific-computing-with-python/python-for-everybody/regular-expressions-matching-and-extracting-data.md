---
id: 5e7b9f0b0b6c005b0e76f06f
title: 'Expressões regulares: correspondência e extração de dados'
challengeType: 11
videoId: LaCZnTbQGkE
dashedName: regular-expressions-matching-and-extracting-data
---

# --question--

## --text--

O que será impresso pelo código a seguir?:

```python
import re
s = 'A message from csev@umich.edu to cwen@iupui.edu about meeting @2PM'
lst = re.findall('\\S+@\\S+', s)
print(lst)
```

## --answers--

['csev@umich.edu', 'cwen@iupui.edu']

---

['csev@umich.edu']

---

['umich.edu', 'iupui.edu']

---

['csev@', 'cwen@']

## --video-solution--

1

