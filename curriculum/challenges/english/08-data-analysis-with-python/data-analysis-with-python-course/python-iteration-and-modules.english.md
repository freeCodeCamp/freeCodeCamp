---
id: 5e9a093a74c4063ca6f7c167
title: Python Iteration and Modules
challengeType: 11
videoId: XzosGWLafrY
---

## Description

<section id='description'>
<em>Instead of using notebooks.ai like it shows in the video, you can use Google Colab instead.</em>

More resources:

- <a href="https://github.com/ine-rmotr-curriculum/ds-content-python-under-10-minutes" target="_blank" rel="noopener noreferrer">Notebooks on GitHub</a>
- <a href="https://colab.research.google.com/github/googlecolab/colabtools/blob/master/notebooks/colab-github-demo.ipynb" target="_blank" rel="noopener noreferrer">How to open Notebooks from GitHub using Google Colab.</a>

</section>

## Tests

<section id='tests'>

````yml
question:
  text: |
    How would you iterate over and print the keys and values of a dictionary named `user`?
  answers:
    - |
      ```python
      for key in user.items():
          print(key)
      ```
    - |
      ```python
      for key, value in user.all():
          print(key, value)
          print(value)
      ```
    - |
      ```python
      for key, value in user.items():
          print(key, value)
      ```
    - |
      ```python
      for key, value in user
          print(key, value)
      ```
  solution: 3
````

</section>
