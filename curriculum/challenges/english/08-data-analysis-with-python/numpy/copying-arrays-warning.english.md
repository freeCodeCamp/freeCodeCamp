---
id: 5e9a0a8e09c5df3cc3600ed7
title: Copying Arrays Warning
challengeType: 11
videoId: iIoQ0_L0GvA
---

## Description

<section id='description'>
</section>

## Tests

<section id='tests'>

````yml
question:
  text: |
    What is the value of `a` after running the following code?

    ```py
    import numpy as np

    a = np.array([1, 2, 3, 4, 5])
    b = a
    b[2] = 20
    ```

  answers:
    - |
      ```python
      [1 2 3 4 5]
      ```
    - |
      ```python
      [1 2 20 4 5]
      ```
    - |
      ```python
      [1 20 3 4 5]
      ```
  solution: 2
````

</section>
