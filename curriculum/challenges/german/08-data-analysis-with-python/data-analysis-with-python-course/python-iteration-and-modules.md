---
id: 5e9a093a74c4063ca6f7c167
title: Python Iteration und Module
challengeType: 11
videoId: XzosGWLafrY
bilibiliIds:
  aid: 633068913
  bvid: BV1db4y127M4
  cid: 409024056
dashedName: python-iteration-and-modules
---

# --description--

*Anstatt, wie in dem Video gezeigt, notebooks.ai zu verwenden, kannst du auch Google Colab verwenden.*

Weitere Ressourcen:

-  <a href="https://github.com/ine-rmotr-curriculum/ds-content-python-under-10-minutes" target="_blank" rel="noopener noreferrer nofollow">Notebooks auf GitHub</a>
-  <a href="https://colab.research.google.com/github/googlecolab/colabtools/blob/master/notebooks/colab-github-demo.ipynb" target="_blank" rel="noopener noreferrer nofollow">Wie man Notebooks von GitHub unter Verwendung von Google Colab öffnet.</a>

# --question--

## --text--

Wie würdest du die Schlüssel und Werte eines Wörterbuchs mit dem Namen `user` iterieren und ausgeben?

## --answers--

```python
for key in user.items():
    print(key)
```

---

```python
for key, value in user.all():
    print(key, value)
    print(value)
```

---

```python
for key, value in user.items():
    print(key, value)
```

---

```python
for key, value in user
    print(key, value)
```

## --video-solution--

3

