---
id: 5e9a0a8e09c5df3cc3600ed4
challengeType: 11
videoId: v-7Y7koJ_N0
---

## Description

<section id='description'>
</section>

## Tests

<section id='tests'>

````yml
question:
  text: |
    What code would change the values in the 3rd column of both of the following Numpy arrays to 20?

    ```py
    a = np.array([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]])

    # Output:
    # [[ 1  2  20  4  5]
    # [ 6  7 20  9 10]]
    ```
  answers:
    - |
      ```python
      a[:, 3] = 20
      ```
    - |
      ```python
      a[2, :] = 20
      ```
    - |
      ```python
      a[:, 2] = 20
      ```
    - |
      ```python
      a[1, 2] = 20
      ```
  solution: 3
````

</section>
