---
id: 5e9a093a74c4063ca6f7c167
title: Iteración y módulos en Python
challengeType: 11
videoId: XzosGWLafrY
bilibiliIds:
  aid: 633068913
  bvid: BV1db4y127M4
  cid: 409024056
dashedName: python-iteration-and-modules
---

# --description--

*En vez de usar notebooks.ai como aparece en el video, puedes usar Google Colab.*

Más recursos:

-   [Notas en GitHub](https://github.com/ine-rmotr-curriculum/ds-content-python-under-10-minutes)
-   [Cómo abrir Notebooks desde GitHub utilizando Google Colab.](https://colab.research.google.com/github/googlecolab/colabtools/blob/master/notebooks/colab-github-demo.ipynb)

# --question--

## --text--

¿Cómo iterarías e imprimirías las claves y valores de un diccionario llamado`user`?

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

