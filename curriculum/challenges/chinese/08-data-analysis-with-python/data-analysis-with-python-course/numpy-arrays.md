---
id: 5e9a093a74c4063ca6f7c154
challengeType: 11
videoId: VDYVFHBL1AM
---

## Description

<section id='description'>
More resources:
- <a href="https://notebooks.ai/rmotr-curriculum/freecodecamp-intro-to-numpy-6c285b74" target='_blank'>Notebook</a>
</section>

## Tests

<section id='tests'>

````yml
question:
  text: |
    What will the following code print out?

    ```py
    A = np.array([
        ['a', 'b', 'c'],
        ['d', 'e', 'f'],
        ['g', 'h', 'i']
    ])

    print(A[:, :2])
    ```

  answers:
    - |
      ```python
      [['a' 'b']]
      ```
    - |
      ```py
      [['b' 'c']
      ['e' 'f']
      ['h' 'i']]
      ```
    - |
      ```py
      [['a' 'b']
      ['d' 'e']
      ['g' 'h']]
      ```
  solution: 3
````

</section>
