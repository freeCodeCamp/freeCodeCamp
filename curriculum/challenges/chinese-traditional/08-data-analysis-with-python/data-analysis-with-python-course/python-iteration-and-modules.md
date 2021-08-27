---
id: 5e9a093a74c4063ca6f7c167
title: Python 迭代和模塊
challengeType: 11
videoId: XzosGWLafrY
dashedName: python-iteration-and-modules
---

# --description--

*在視頻中我們使用的編輯器工具是在 notebook.ai 這個平臺，你也可以選擇用其他的平臺，比如說 Google Colab 也是一個不錯的選擇。*

更多資源：

-   [在 GitHub 平臺的 Notebooks](https://github.com/ine-rmotr-curriculum/ds-content-python-under-10-minutes)
-   [如何使用 Google Colab 來打開 GitHub 上的 Notebooks](https://colab.research.google.com/github/googlecolab/colabtools/blob/master/notebooks/colab-github-demo.ipynb)

# --question--

## --text--

您將如何迭代並打印名爲 `user` 的字典的鍵和值？

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

