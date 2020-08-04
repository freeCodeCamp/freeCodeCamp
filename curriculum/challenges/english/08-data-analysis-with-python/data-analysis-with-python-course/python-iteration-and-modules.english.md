---
id: 5e9a093a74c4063ca6f7c167
title: Python Iteration and Modules
challengeType: 11
isHidden: false
videoId: XzosGWLafrY
---

## Description

<section id='description'>
More resources:
- <a href="https://notebooks.ai/rmotr-curriculum/python-under-10-minutes-15addcb2" target='_blank'>Notebook</a>
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
