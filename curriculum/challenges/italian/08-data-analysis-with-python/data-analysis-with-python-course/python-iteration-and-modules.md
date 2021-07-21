---
id: 5e9a093a74c4063ca6f7c167
title: Iterazione e moduli in Python
challengeType: 11
videoId: XzosGWLafrY
dashedName: python-iteration-and-modules
---

# --description--

*Invece di usare notebooks.ai come mostrato nel video, puoi usare Google Colab.*

Altre risorse:

-   [Notebook su GitHub](https://github.com/ine-rmotr-curriculum/ds-content-python-under-10-minutes)
-   [Come aprire Notebooks da GitHub usando Google Colab.](https://colab.research.google.com/github/googlecolab/colabtools/blob/master/notebooks/colab-github-demo.ipynb)

# --question--

## --text--

Come faresti per iterare su un dizionario chiamato `user` e scrivere nella console le sue chiavi e valori?

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

