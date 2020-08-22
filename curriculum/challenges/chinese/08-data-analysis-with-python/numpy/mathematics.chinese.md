---
id: 5e9a0a8e09c5df3cc3600ed8
title: Mathematics
challengeType: 11
isHidden: false
videoId: 7txegvyhtVk
---

## Description

<section id='description'>
</section>

## Tests

<section id='tests'>

````yml
question:
  text: |
    What is the value of `b` after running the following code?

    ```py
    import numpy as np

    a = np.array(([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]))
    b = np.max(a, axis=1).sum()
    ```

  answers:
    - |
      ```py
      10
      ```
    - |
      ```py
      7
      ```
    - |
      ```py
      5
      ```
    - |
      ```py
      15
      ```
  solution: 4
````

</section>
