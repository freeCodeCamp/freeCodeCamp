---
id: 5e9a0a8e09c5df3cc3600ed6
challengeType: 11
videoId: 0jGfH8BPfOk
---

## Description

<section id='description'>
</section>

## Tests

<section id='tests'>

````yml
question:
  text: |
    What is another way to produce the following array?

    ```py
    [[1. 1. 1. 1. 1.]
    [1. 0. 0. 0. 1.]
    [1. 0. 9. 0. 1.]
    [1. 0. 0. 0. 1.]
    [1. 1. 1. 1. 1.]]
    ```

  answers:
    - |
      ```py
      output = np.ones((5, 5))

      z = np.zeros((3, 3))
      z[1, 1] = 9

      output[1:-1, 1:-1] = z
      ```
    - |
      ```py
      output = np.ones((5, 5))

      z = np.zeros((3, 3))
      z[1, 1] = 9

      output[1:3, 1:3] = z
      ```
    - |
      ```py
      output = np.ones((5, 5))

      z = np.zeros((3, 3))
      z[1, 1] = 9

      output[4:1, 4:1] = z
      ```
  solution: 1
````

</section>
