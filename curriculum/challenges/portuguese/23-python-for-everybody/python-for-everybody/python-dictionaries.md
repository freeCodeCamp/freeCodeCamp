---
id: 5e7b9f090b6c005b0e76f067
title: Dicionários do Python
challengeType: 11
videoId: dnzvfimrRMg
bilibiliIds:
  aid: 631893305
  bvid: BV19b4y167kj
  cid: 376386176
dashedName: python-dictionaries
---

# --question--

## --text--

Qual será o valor de dict após executar este código?:

```python
dict = {"Fri": 20, "Thu": 6, "Sat": 1}
dict["Thu"] = 13
dict["Sat"] = 2
dict["Sun"] = 9
```

## --answers--

```python
{'Fri': 20, 'Thu': 6, 'Sat': 1}
```

---

```python
{'Fri': 20, 'Thu': 6, 'Sat': 1, 'Thu': 13, 'Sat': 2, 'Sun': 9}
```

---

```python
{'Sun': 9}
```

---

```python
{'Thu': 13, 'Sat': 2, 'Sun': 9}
```

---

```python
{'Fri': 20, 'Thu': 13, 'Sat': 2, 'Sun': 9}
```

## --video-solution--

5

