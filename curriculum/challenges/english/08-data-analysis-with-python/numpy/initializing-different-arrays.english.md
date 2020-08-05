---
id: 5e9a0a8e09c5df3cc3600ed5
title: Initializing Different Arrays
challengeType: 11
isHidden: false
videoId: CEykdsKT4U4
---

## Description

<section id='description'>
</section>

## Tests

<section id='tests'>

````yml
question:
  text: |
    What will the following code print?

    ```py
    a = np.array([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]])

    print(np.full_like(a, 100))
    ```
  answers:
    - |
      ```py
      [[100 100 100 100 100]]
      ```
    - |
      ```py
      [[100 100 100 100 100]
      [100 100 100 100 100]]
      ```
    - |
      ```py
      [[ 1  2  3  4  5]
      [ 6  7 20  9 10]]
      ```
  solution: 2
````

</section>
