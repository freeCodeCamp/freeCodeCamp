---
id: 5e9a093a74c4063ca6f7c154
title: Numpy Arrays
challengeType: 11
isHidden: true
videoId: VDYVFHBL1AM
---

## Description
<section id='description'>
</section>

## Tests
<section id='tests'>

```yml
question:
  text: |
    What will the following code print out?:

    ```py
    A = np.array([
        ['a', 'b', 'c'],
        ['d', 'e', 'f'],
        ['g', 'h', 'i']
    ])

    print(A[:, :2])
    ```

  answers:
    - "[['a' 'b']]"
    - |
      ```
      [['b' 'c']
      ['e' 'f']
      ['h' 'i']]
      ```
    - |
      ```
      [['a' 'b']
      ['d' 'e']
      ['g' 'h']]
      ```
  solution: 3
```

</section>

